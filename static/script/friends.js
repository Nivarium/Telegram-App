function displayReferrals() {
    let telegramId = localStorage.getItem('telegram_id');
    let inviteFriendBalance = parseFloat(localStorage.getItem('invite_friend_balance')) || 0;
    const totalCount = 50;

    const friendsContainer = document.getElementById("friend-frame");
    const emptyFriendFrame = document.getElementById("empty-friend-frame");

    fetch(`/some_route?telegram_id=${telegramId}`)
        .then(response => response.json())
        .then(data => {
            if (data.referrals) {
                if (data.referrals.length === 0) {
                    emptyFriendFrame.style.display = "block";
                    friendsContainer.style.display = "none";
                } else {
                    emptyFriendFrame.style.display = "none";
                    friendsContainer.style.display = "flex";
                    friendsContainer.innerHTML = "";

                    let previousReferralsCount = parseInt(localStorage.getItem('previous_referrals_count')) || 0;

                    if (data.referrals.length > previousReferralsCount) {
                        let newReferralsCount = data.referrals.length - previousReferralsCount;
                        let totalReferralsCount = data.referrals.length;

                        if (totalReferralsCount <= totalCount) {
                            inviteFriendBalance += newReferralsCount * 100; // 100 NVRM Bonus
                        }
                        localStorage.setItem('total_friends_count', newReferralsCount);
                        localStorage.setItem('invite_friend_balance', inviteFriendBalance);
                        localStorage.setItem('previous_referrals_count', data.referrals.length); 
                    }

                    data.referrals.forEach(referral => {
                        const friendButton = document.createElement("button");
                        friendButton.className = "button-style-user-name-f";
                        friendButton.id = "user";

                        const iconDiv = document.createElement("div");
                        iconDiv.className = "button-style-icon-user-name-f";

                        const nameParagraph = document.createElement("p");
                        nameParagraph.className = "button-style-text-user-name-f";
                        nameParagraph.textContent = typeof referral === "string" ? referral : referral.name || "Unknown";

                        friendButton.appendChild(iconDiv);
                        friendButton.appendChild(nameParagraph);
                        friendsContainer.appendChild(friendButton);
                    });
                }
            }
        })
        .catch(error => console.error("Error while receiving referrals:", error));
}

document.addEventListener("DOMContentLoaded", function () {
    displayReferrals();
    
    document.getElementById("buttoncopyfriend").addEventListener("click", async function () {
        try {
            // We get a referral link from the user data
            const referralLink = userData.ref_link;
            await navigator.clipboard.writeText(referralLink);
            const alertWindow = document.getElementById("alert-window-link-copied");
            alertWindow.style.display = "block";

            //---
            setTimeout(() => {
                alertWindow.style.display = "none";
            }, 3000);
        } catch (err) {
            console.error("Copy error: ", err);
        }
    });

    document.getElementById("buttoncopyfriendearn").addEventListener("click", async function () {
        try {
            const referralLink = userData.ref_link;
            await navigator.clipboard.writeText(referralLink);
            const alertWindow = document.getElementById("alert-window-link-copied");
            alertWindow.style.display = "block";

            //---
            setTimeout(() => {
                alertWindow.style.display = "none";
            }, 3000);
        } catch (err) {
            console.error("Copy error: ", err);
        }
    });

    document.getElementById("buttoninvitefriend").addEventListener("click", async function () {
        const referralLink = userData.ref_link;
        const referralMessage = `✨ Start collecting coins with the Nivarium miner! ✨ ${referralLink}`;

        const telegram_id = localStorage.getItem('telegram_id');

        if (telegram_id) {
            fetch('/sendReferral', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: referralMessage, telegram_id: telegram_id })
            })
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'success') {
                        window.open(data.forward_url);
                    } else {
                        showNotification("Error while retrieving the forwarding link.");
                    }
                });
        } else {
            showNotification("Error: Telegram ID not found. Please start with the /start command.");
        }
    });

    document.getElementById("buttoninvitefriendearn").addEventListener("click", async function () {
        const referralLink = userData.ref_link;
        const referralMessage = `✨ Start collecting coins with the Nivarium miner! ✨ ${referralLink}`;

        const telegram_id = localStorage.getItem('telegram_id');

        if (telegram_id) {
            fetch('/sendReferral', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: referralMessage, telegram_id: telegram_id })
            })
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'success') {
                        window.open(data.forward_url);
                    } else {
                        showNotification("Error while retrieving the forwarding link.");
                    }
                });
        } else {
            showNotification("Error: Telegram ID not found. Please start with the /start command.");
        }
    });

    function showNotification(message) {
        const notification = document.getElementById('notification');
        notification.innerText = message;
        notification.style.display = 'block';

        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    }
});
