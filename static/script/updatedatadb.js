window.addEventListener('load', async function () {
    const telegramId = localStorage.getItem('telegram_id');
    const telegramName = localStorage.getItem('telegram_name');
    const userAddress = localStorage.getItem('userTONAddress');
    let userData = JSON.parse(localStorage.getItem('user_data'));

    try {
        // Checking the "Update" status
        const responseCheck = await fetch(`/get_update_status/${telegramId}`);
        const updateStatus = await responseCheck.json();

        if (updateStatus.updateAllowed) {
            // If the update is allowed, we send the data to the DB
            if (telegramId && telegramName && userData) {
                const userDataToSend = {
                    telegram_id: telegramId,
                    telegram_name: telegramName,
                    total_balance: userData.total_balance,
                    calc_mining: userData.calc_mining,
                    calc_airdrop: userData.calc_airdrop,
                    airdrop_user_prcnt: userData.airdrop_user_prcnt,
                    wallet_address: userAddress
                };

                await sendDataToDatabase(userDataToSend);
            }
        } else {
            // If the update is prohibited, we request data from the server
            const userDataResponse = await fetch(`/get_user_data/${telegramId}`);
            const userDataFromDB = await userDataResponse.json();

            if (userDataFromDB.status === 'success') {
                const newData = userDataFromDB.data;
                userData.total_balance = newData.total_balance;
                userData.calc_mining = newData.calc_mining;
                userData.calc_airdrop = newData.calc_airdrop;
                userData.airdrop_user_prcnt = newData.airdrop_user_prcnt;

                localStorage.setItem('user_data', JSON.stringify(userData));
                localStorage.setItem('calc_airdrop', newData.calc_airdrop.toFixed(3));
            } else {
                console.error('Failed to fetch user data from server.');
            }
        }
    } catch (error) {
        console.error('Error during update check or data fetch:', error);
    }
});

// Function for sending data to the DB
async function sendDataToDatabase(userDataToSend) {
    try {
        const response = await fetch('/update_user_data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userDataToSend),
        });

        const result = await response.json();
    } catch (error) {
        console.error('Error sending data to the server:', error);
    }
}
