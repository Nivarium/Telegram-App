import os
from pymongo import MongoClient
from flask import Flask, render_template, redirect, url_for, jsonify, request
from bson import ObjectId
import requests
import json
import time
import logging
from threading import Timer
from datetime import datetime
from dotenv import load_dotenv

load_dotenv()

TOKEN = os.getenv("TOKEN")
APP_URL = os.getenv("APP_URL")
CHANNEL_URL = os.getenv("CHANNEL_URL")
NOWPAYMENTS_API_KEY = os.getenv("NOWPAYMENTS_API_KEY")
IPN_INVOICE = os.getenv("IPN_INVOICE")
CURRENCY = os.getenv("CURRENCY")
HOWURL = os.getenv("HOWURL")

# Connecting to MongoDB
client = MongoClient(os.getenv("MONGO_URI"))
db = client["WebbApp"]
collection = db["Users"]

app = Flask(__name__, template_folder="templates", static_folder="static")

payment_statuses = {}
chat_ids = {}
logging.basicConfig(level=logging.INFO)

@app.route('/config', methods=['GET'])
def get_config():
    return jsonify({
        "SELLER_WALLET_ADDRESS": os.getenv("SELLER_WALLET_ADDRESS"),
        "SEED_PHRASE": os.getenv("SEED_PHRASE").split(","),
        "JETTON_MINTER_ADDRESS": os.getenv("JETTON_MINTER_ADDRESS"),
    })

# Payments
@app.route('/create_payment_voucher', methods=['POST'])
def create_payment():
    data = request.json
    print("Received data:", data)

    amount = data.get('amount')
    user_id = data.get('user_id')

    if not amount or not user_id:
        return jsonify({"status": "error", "message": "Missing amount or user_id"}), 400

    payment_payload = {
        "price_amount": float(amount),
        "price_currency": CURRENCY,
        "pay_currency": CURRENCY, 
        "order_id": user_id,
        "order_description": f"Purchase of {amount}$USDTton",
        "ipn_callback_url": f'{APP_URL}/ipn_handler'
    }

    headers = {
        "x-api-key": NOWPAYMENTS_API_KEY,
        "Content-Type": "application/json"
    }

    print("We send a request to NOWPayments with the data:", payment_payload)

    try:
        response = requests.post(IPN_INVOICE, json=payment_payload, headers=headers)
        response.raise_for_status()
        payment_data = response.json()

        print("Reply from NOWPayments:", payment_data)

        invoice_url = payment_data.get("invoice_url")
        invoice_id = str(payment_data.get("id"))
        payment_id = payment_data.get("payment_id")
        order_id = payment_data.get("order_id")

        if invoice_url and invoice_id:
            payment_statuses[invoice_id] = {
                "invoice_id": invoice_id,
                "payment_id": payment_id,
                "order_id": order_id,
                "payment_status": "waiting",
                "timestamp": time.time()
            }
            return jsonify({"status": "success", "invoice_url": invoice_url, "invoice_id": invoice_id})
        else:
            return jsonify({"status": "error", "message": "Invoice URL or Invoice ID not found"}), 400

    except requests.exceptions.RequestException as e:
        print("Error creating payment:", e)
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route('/ipn_handler', methods=['POST'])
def ipn_handler():
    data = request.json
    payment_id = data.get('payment_id')
    payment_status = data.get('payment_status')
    invoice_id = str(data.get('invoice_id'))
    order_id = data.get('order_id')

    print("Data received from NOWPayments:")
    print(f"Payment ID: {payment_id}, Invoice ID: {invoice_id}, Payment Status: {payment_status}, Order ID: {order_id}")

    if not payment_id or not invoice_id:
        return jsonify({"status": "error", "message": "Missing payment_id or invoice_id"}), 400

    print("Saved data in payment_statuses dictionary before saving:")
    print(f"Invoice ID: {invoice_id}, Payment ID: {payment_id}, Payment Status: {payment_status}, Order ID: {order_id}")

    payment_statuses[invoice_id] = {
        "invoice_id": invoice_id,
        "payment_id": payment_id,
        "order_id": order_id,
        "payment_status": payment_status
    }

    print("Saved data in payment_statuses dictionary after saving:")
    print(payment_statuses)

    return jsonify({"status": "success"}), 200

@app.route('/get_payment_status/<invoice_id>', methods=['GET'])
def get_payment_status(invoice_id):
    print(f"Request status for Invoice ID: {invoice_id}")
    
    payment_info = payment_statuses.get(invoice_id)
    
    if payment_info:
        print(f"Data found: {payment_info}")

        # Checking the completed status
        if payment_info["payment_status"] in ["finished", "expired", "failed"]:
            del payment_statuses[invoice_id]  # Removing a completed payment from the dictionary
            print(f"Payment {invoice_id} deleted after first request with status {payment_info['payment_status']}")

        return jsonify({
            "status": "success",
            "invoice_id": payment_info["invoice_id"],
            "payment_status": payment_info["payment_status"],
            "payment_id": payment_info["payment_id"],
            "order_id": payment_info["order_id"]
        })
    else:
        
        print(f"Querying status for Invoice ID: {invoice_id} - not found in dictionary.")
        return jsonify({"status": "error", "message": "Invoice ID not found"}), 404

# Function for cleaning outdated records
def clear_old_payments():
    current_time = time.time()
    to_delete = []

    for invoice_id, payment_info in payment_statuses.items():
        if payment_info["payment_status"] == "waiting" and current_time - payment_info["timestamp"] > 86400:  # 86400 секунд = 24 часа
            to_delete.append(invoice_id)

    for invoice_id in to_delete:
        del payment_statuses[invoice_id]
        print(f"Payment {invoice_id} was removed due to timeout (more than 24 hours).")

    Timer(3600, clear_old_payments).start()

clear_old_payments()

# Loading messages from JSON file
def load_messages(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return json.load(file)

messages = load_messages('botmessagelang.json')

# Function for creating a referral link
def generate_referral_link(telegram_id):
    return f"https://t.me/WebBot?start={telegram_id}"

@app.route('/sendReferral', methods=['POST'])
def send_referral():
    data = request.json
    message = data.get('message', '')
    telegram_id = data.get('telegram_id')

    if not telegram_id:
        return jsonify({'status': 'error', 'message': 'telegram_id not provided'}), 400

    forward_url = f'tg://msg?text={message}'

    return jsonify({'status': 'success', 'forward_url': forward_url}), 200

# Message in the bot
def send_message_with_buttons(chat_id, telegram_name, user_language, ref_id=None):
    url = f"https://api.telegram.org/bot{TOKEN}/sendMessage"
    message_text = messages.get(user_language, messages["en"])["welcome"].format(telegram_name=telegram_name)
    loading_url = f"{APP_URL}/loading?telegram_id={chat_id}&telegram_name={telegram_name}"
    if ref_id:
        loading_url += f"&ref_id={ref_id}"

    keyboard = {
        "inline_keyboard": [
            [
                {
                    "text": messages.get(user_language, messages["en"])["play"],
                    "web_app": {
                        "url": loading_url
                    }
                }
            ],
            [
                {"text": messages.get(user_language, messages["en"])["visit_channel"], "url": CHANNEL_URL},
                {"text": messages.get(user_language, messages["en"])["how_to_play"], "callback_data": "how_to_play"}
            ]
        ]
    }

    payload = {
        "chat_id": chat_id,
        "text": message_text,
        "reply_markup": keyboard
    }

    response = requests.post(url, json=payload)
    return response.json()

def handle_callback_query(callback_query):
    print("Callback received:", callback_query) 
    chat_id = callback_query['from']['id']
    telegram_name = callback_query['from'].get('first_name')
    user_language = callback_query['from'].get('language_code', 'en')
    callback_data = callback_query['data']

    if callback_data == "how_to_play":
        print(f"The 'how_to_play' button was clicked by the user {telegram_name} ({chat_id}).")
        send_how_to_use_message(chat_id, telegram_name, user_language)  

# Message "how_to_play"
def send_how_to_use_message(chat_id, telegram_name, user_language):
    print(f"Sending a message about how to use the miner to the user {telegram_name} ({chat_id}).")

    how_to_use_text = messages.get(user_language, messages["en"])["how_to_use"]
    website_url = HOWURL
    formatted_text = (
        f"💡 [How it Works]({website_url})\n\n"
        f"{how_to_use_text}"
    )

    # Create a keyboard with buttons
    loading_url = f"{APP_URL}/loading?telegram_id={chat_id}&telegram_name={telegram_name}"
    keyboard = {
        "inline_keyboard": [
            [
                {
                    "text": messages.get(user_language, messages["en"])["play"],
                    "web_app": {
                        "url": loading_url
                    }
                }
            ],
            [
                {
                    "text": messages.get(user_language, messages["en"])["visit_channel"],
                    "url": CHANNEL_URL
                }
            ]
        ]
    }

    payload = {
        "chat_id": chat_id,
        "text": formatted_text,
        "reply_markup": keyboard,
        "parse_mode": "Markdown" 
    }
    
    # Sending a message via Telegram API
    url = f"https://api.telegram.org/bot{TOKEN}/sendMessage"
    response = requests.post(url, json=payload)
    print("Response from Telegram API:", response.json()) 
    return response.json()

# Function to check if a user exists in the database
def check_user_in_db(telegram_id):
    user = collection.find_one({"telegram_id": telegram_id})
    if user:
        user["_id"] = str(user["_id"]) 
    return user

# Function to create a new user
def create_new_user(telegram_id, telegram_name, referrer_id=None):
    ref_link = generate_referral_link(telegram_id)
    main_ref_link = int(referrer_id) if referrer_id else 0

    user_data = {
        "telegram_id": telegram_id,
        "telegram_name": telegram_name,
        "username": f"{telegram_name}{telegram_id}",
        "total_balance": 0,
        "calc_mining": 10,
        "calc_airdrop": 0,
        "airdrop_user_prcnt": 0,
        "language": "en",
        "ref_link": ref_link,
        "registration": datetime.now().strftime("%B %d, %Y"),
        "main_ref": main_ref_link,
        "referrals": [],
        "ban": False,
        "Update" : True,
        "wallet_address": None,  
        "wallet_memo": None     
    }
    result = collection.insert_one(user_data)
    user_data["_id"] = str(result.inserted_id)

    # If there is a referrer, add the new user to his referral list
    if referrer_id:
        collection.update_one({"telegram_id": referrer_id}, {"$push": {"referrals": telegram_id}})
    
    return user_data

# Referral search and update function
def update_referrals(referrer_id):
    if not referrer_id.isdigit():  # Check if referrer_id is a number
        print(f"referrer_id is not a number: {referrer_id}")
        return

    referrer_id = int(referrer_id) 

    # We are looking for all users whose main_ref matches the referrer_id
    referred_users = list(collection.find({"main_ref": referrer_id}))
    print(f"Found referrals for user with ID {referrer_id}: {referred_users}")

    if referred_users:
        referral_names = [user["telegram_name"] for user in referred_users]

        update_result = collection.update_one(
            {"telegram_id": str(referrer_id)},
            {"$addToSet": {"referrals": {"$each": referral_names}}}
        )

        if update_result.modified_count > 0:
            print(f"Referrals successfully added to user with ID {referrer_id}: {referral_names}")
        else:
            print(f"Update failed for user with ID {referrer_id}. Check the ID format or the existence of the record.")
    else:
        print(f"No referrals for user with ID {referrer_id}")

# Function to update user's wallet
def update_wallet_info(telegram_id, wallet_address, wallet_memo=None):
    update_data = {"wallet_address": wallet_address}
    if wallet_memo: 
        update_data["wallet_memo"] = wallet_memo

    result = collection.update_one(
        {"telegram_id": telegram_id},
        {"$set": update_data}
    )
    return result.modified_count > 0 

# Updated user verification feature
@app.route('/some_route')
def some_route():
    telegram_id = request.args.get('telegram_id')
    user = check_user_in_db(telegram_id)
    
    if user:
        return jsonify(user) 
    else:
        return jsonify({"message": "User not found"}), 404

@app.route('/webhook', methods=['POST'])
def webhook():
    update = request.get_json()

    print("Update received:", update)

    if "callback_query" in update:
        handle_callback_query(update['callback_query']) 
        return '', 200

    if "message" in update and update['message'].get('text', '').startswith('/start'):
        chat_id = update['message']['chat']['id'] 
        telegram_id = update['message']['from']['id']
        telegram_name = update['message']['chat']['first_name']
        if update['message']['chat'].get('last_name'):
            telegram_name += f" {update['message']['chat']['last_name']}"

        user_language = update['message']['from'].get('language_code', 'en')
        if user_language not in messages.keys():
            user_language = 'en'

        ref_id = update['message']['text'][6:] if len(update['message']['text']) > 6 else None
        
        send_message_with_buttons(chat_id, telegram_name, user_language, ref_id=ref_id)

        chat_ids[telegram_id] = chat_id
        return jsonify({'chat_id': chat_id}), 200

    return '', 200

@app.route('/get_update_status/<telegram_id>', methods=['GET'])
def get_update_status(telegram_id):
    user = collection.find_one({'telegram_id': telegram_id}, {'Update': 1})
    if user:
        return jsonify({'updateAllowed': user.get('Update', True)})
    return jsonify({'updateAllowed': False})

# Updating user data
@app.route('/update_user_data', methods=['POST'])
def update_user_data():
    user_data = request.json
    telegram_id = user_data.get('telegram_id')

    data = request.get_json()    
    if not data or 'telegram_id' not in data:
        return jsonify({'status': 'error', 'message': 'Missing data'}), 400

    total_balance = user_data.get('total_balance', 0)
    calc_mining = user_data.get('calc_mining', 0)
    calc_airdrop = user_data.get('calc_airdrop', 0)
    airdrop_user_prcnt = user_data.get('airdrop_user_prcnt', 0)

    if telegram_id:
        try:
            collection.update_one(
                {'telegram_id': telegram_id},
                {'$set': {
                    'total_balance': total_balance,
                    'calc_mining': calc_mining,
                    'calc_airdrop': calc_airdrop,
                    'airdrop_user_prcnt': airdrop_user_prcnt
                }}
            )
            return jsonify({'status': 'success'}), 200
        except Exception as e:
            return jsonify({'status': 'error', 'message': str(e)}), 500
    else:
        return jsonify({'status': 'error', 'message': 'Invalid telegram ID'}), 400    

@app.route('/get_user_data/<telegram_id>', methods=['GET'])
def get_user_data(telegram_id):
    user = collection.find_one({'telegram_id': telegram_id}, {'_id': 0, 'total_balance': 1, 'calc_mining': 1, 'calc_airdrop': 1, 'airdrop_user_prcnt': 1})
    if user:
        return jsonify({'status': 'success', 'data': user})
    return jsonify({'status': 'error', 'message': 'User not found'}), 404

# Deleting a user
@app.route('/delete_user', methods=['POST'])
def delete_user():
    user_data = request.json
    user_id = user_data.get('_id')

    if user_id:
        try:
            result = collection.delete_one({'_id': ObjectId(user_id)})
            if result.deleted_count == 1:
                return jsonify({'status': 'success', 'message': 'User deleted successfully'}), 200
            else:
                return jsonify({'status': 'error', 'message': 'User not found'}), 404
        except Exception as e:
            return jsonify({'status': 'error', 'message': str(e)}), 500
    else:
        return jsonify({'status': 'error', 'message': 'Invalid user id'}), 400

# Successful User Deletion Page
@app.route('/success_page')
def success_page():
    return render_template('deletepage.html')

# Route for loading page
@app.route('/loading')
def loading():
    telegram_id = request.args.get('telegram_id', 'temp_user')
    telegram_name = request.args.get('telegram_name') 
    ref_id = request.args.get('ref_id', None)

    logging.info(f"Loading started for telegram_id: {telegram_id}, telegram_name: {telegram_name}, ref_id: {ref_id}")

    try:
        # Checking if a user is in the database
        user = check_user_in_db(telegram_id)

        if not user:
            new_user_data = create_new_user(telegram_id, telegram_name, referrer_id=ref_id)
            if ref_id:
                update_referrals(ref_id)
            return render_template('loading.html', telegram_id=telegram_id, telegram_name=telegram_name, ref_id=ref_id)
        else:
            update_referrals(telegram_id)
            return render_template('loading.html', telegram_id=telegram_id, telegram_name=telegram_name, ref_id=ref_id)

    except Exception as e:
        logging.error(f"Error in loading: {str(e)}")
        return jsonify({'status': 'error', 'message': str(e)}), 500

# Page Launch Route
@app.route('/')
def index():
    return redirect(url_for('loading'))

@app.route('/nivarium')
def nivarium():
    telegram_id = request.args.get('telegram_id')
    telegram_name = request.args.get('telegram_name', 'Temporary User')
    
    # If telegram_id is empty or null, use temporary ID
    if not telegram_id or telegram_id == "null":
        telegram_id = 'temp_user'
        
        # Checking for the presence of a temporary user in the database
        user_data = check_user_in_db(telegram_id)
        
        # If there is no temporary user, create one
        if user_data is None:
            user_data = create_new_user(telegram_id, telegram_name)
    else:
        user_data = check_user_in_db(telegram_id)

    # ЕIf the user is still not found or BANNED, return the notfound page
    if user_data is None or user_data.get('ban', False):
        return render_template('notfound.html'), 404

    return render_template('index.html', user_data=user_data)

if __name__ == '__main__':
    app.run(debug=True, use_reloader=False)
