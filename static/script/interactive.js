document.addEventListener('DOMContentLoaded', () => {
    // Initialize 
    const modalTG = document.getElementById('modal-TG');
    const modalX = document.getElementById('modal-X');
    const modalTikTok = document.getElementById('modal-TikTok');
    //---
    const joinTGMainButton = document.getElementById('joinTG');
    const joinXMainButton = document.getElementById('joinX');
    const joinTikTokMainButton = document.getElementById('joinTikTok');
    //---
    const iconStatusTG = document.getElementById('icon_status_tg');
    const taskStatusTG = document.getElementById('task-status-tg');
    const processingTG = document.getElementById('processing-tg');

    const iconStatusX = document.getElementById('icon_status_X');
    const taskStatusX = document.getElementById('task-status-x');
    const processingX = document.getElementById('processing-x');

    const iconStatusTikTok = document.getElementById('icon_status_tiktok');
    const taskStatusTikTok = document.getElementById('task-status-tiktok');
    const processingTikTok = document.getElementById('processing-tiktok');
    //---
    const joinTGkeyTime = 'TG_join_Time';
    const joinXkeyTime = 'X_join_Time';
    const joinTikTokkeyTime = 'TikTok_join_Time';

    //---
    const tgAirdropComplete = 'tgAirdropComplete';
    const xAirdropComplete = 'xAirdropComplete';
    const tiktokAirdropComplete = 'tiktokAirdropComplete';

    //--- 
    const timeHour = 60 * 60 * 1000; 
    const airdropPRCNT = 33;
    let airdropprcnt = parseFloat(localStorage.getItem('airdrop_user_prcnt')) || 0;

    //---
    const checkTimerTG = () => {
        const joinTime = localStorage.getItem(joinTGkeyTime);
        const isAirdropComplete = localStorage.getItem(tgAirdropComplete);
        if (joinTime && !isAirdropComplete) {
            const elapsedTime = Date.now() - parseInt(joinTime, 10);
            const oneHourInMilliseconds = timeHour; 
            processingTG.style.display = 'block';
            if (elapsedTime >= oneHourInMilliseconds) {
                //---
                processingTG.style.display = 'none';
                taskStatusTG.style.display = 'none';
                iconStatusTG.style.display = 'block';
                airdropprcnt += airdropPRCNT; 
                localStorage.setItem('airdrop_user_prcnt', airdropprcnt);
                localStorage.setItem(tgAirdropComplete, 'true');
                console.log(`Airdrop rise up to: ${airdropPRCNT}. Current Percent: ${airdropprcnt}`);
            } else {
                //---
                setTimeout(checkTimerTG, oneHourInMilliseconds - elapsedTime);
            }
        } else if (isAirdropComplete) {
            //---
            processingTG.style.display = 'none';
            iconStatusTG.style.display = 'block';
            localStorage.removeItem(joinTGkeyTime);
        }
    };

    const checkTimerX = () => {
        const joinTime = localStorage.getItem(joinXkeyTime);
        const isAirdropComplete = localStorage.getItem(xAirdropComplete);
        if (joinTime && !isAirdropComplete) {
            const elapsedTime = Date.now() - parseInt(joinTime, 10);
            const oneHourInMilliseconds = timeHour; 
            processingX.style.display = 'block';
            if (elapsedTime >= oneHourInMilliseconds) {
                //---
                processingX.style.display = 'none';
                taskStatusX.style.display = 'none';
                iconStatusX.style.display = 'block';
                airdropprcnt += airdropPRCNT;
                localStorage.setItem(xAirdropComplete, 'true');
                localStorage.setItem('airdrop_user_prcnt', airdropprcnt); 
                console.log(`Airdrop rise up to: ${airdropPRCNT}. Current Percent: ${airdropprcnt}`);
            } else {
                //---
                setTimeout(checkTimerX, oneHourInMilliseconds - elapsedTime);
            }
        } else if (isAirdropComplete) {
            //---
            processingX.style.display = 'none';
            iconStatusX.style.display = 'block';
            localStorage.removeItem(joinXkeyTime);
        }
    };

    const checkTimerTikTok = () => {
        const joinTime = localStorage.getItem(joinTikTokkeyTime);
        const isAirdropComplete = localStorage.getItem(tiktokAirdropComplete);
        if (joinTime && !isAirdropComplete) {
            const elapsedTime = Date.now() - parseInt(joinTime, 10);
            const oneHourInMilliseconds = timeHour;  
            processingTikTok.style.display = 'block';
            if (elapsedTime >= oneHourInMilliseconds) {
                //---
                processingTikTok.style.display = 'none';
                taskStatusTikTok.style.display = 'none';
                iconStatusTikTok.style.display = 'block';
                airdropprcnt += airdropPRCNT; 
                localStorage.setItem(tiktokAirdropComplete, 'true');
                localStorage.setItem('airdrop_user_prcnt', airdropprcnt);
                console.log(`Airdrop rise up to: ${airdropPRCNT}. Current Percent: ${airdropprcnt}`);
            } else {
                //---
                setTimeout(checkTimerTikTok, oneHourInMilliseconds - elapsedTime);
            }
        } else if (isAirdropComplete) {
            //---
            processingTikTok.style.display = 'none';
            iconStatusTikTok.style.display = 'block';
            localStorage.removeItem(joinTikTokkeyTime);
        }
    };

    // Join Telegram
    if (localStorage.getItem('tgJoined') === 'true') {
        joinTGMainButton.classList.add('inactive');
        joinTGMainButton.disabled = true;
        taskStatusTG.style.display = 'none';
        checkTimerTG();
    }

    // Follow X
    if (localStorage.getItem('xJoined') === 'true') {
        joinXMainButton.classList.add('inactive');
        joinXMainButton.disabled = true;
        taskStatusX.style.display = 'none';
        checkTimerX();
    }

    // Follow TikTok
    if (localStorage.getItem('tiktokJoined') === 'true') {
        joinTikTokMainButton.classList.add('inactive');
        joinTikTokMainButton.disabled = true;
        taskStatusTikTok.style.display = 'none';
        checkTimerTikTok();
    }

    document.getElementById('buttonjoinTG').addEventListener('click', function () {
        const currentTime = Date.now();
        localStorage.setItem(joinTGkeyTime, currentTime);
        //---
        window.open('https://t.me/nivarium_official', '_blank');
        modalTG.style.display = 'none';
        taskStatusTG.style.display = 'none';
        processingTG.style.display = 'block';
        joinTGMainButton.classList.add('inactive');
        joinTGMainButton.disabled = true;
        localStorage.setItem('tgJoined', 'true');
        //---
        checkTimerTG();
    });

    document.getElementById('buttonjoinX').addEventListener('click', function () {
        const currentTime = Date.now();
        localStorage.setItem(joinXkeyTime, currentTime);
        //---
        window.open('https://x.com/nivarium', '_blank');
        modalX.style.display = 'none';
        taskStatusX.style.display = 'none';
        processingX.style.display = 'block';
        joinXMainButton.classList.add('inactive');
        joinXMainButton.disabled = true;
        localStorage.setItem('xJoined', 'true');
        //---
        checkTimerX();
    });

    document.getElementById('buttonjoinTikTok').addEventListener('click', function () {
        const currentTime = Date.now();
        localStorage.setItem(joinTikTokkeyTime, currentTime);
        //---
        window.open('https://www.tiktok.com/@nivarium', '_blank');
        modalTikTok.style.display = 'none';
        taskStatusTikTok.style.display = 'none';
        processingTikTok.style.display = 'block';
        joinTikTokMainButton.classList.add('inactive');
        joinTikTokMainButton.disabled = true;
        localStorage.setItem('tiktokJoined', 'true');
        //---
        checkTimerTikTok();
    });

    //---
    checkTimerTG();
    checkTimerX();
    checkTimerTikTok();

    //---
    document.querySelectorAll('#airdrop_user_prcnt').forEach(element => {
        element.textContent = `+${airdropprcnt.toFixed(2)}%`;
    });
});