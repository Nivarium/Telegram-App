document.addEventListener('DOMContentLoaded', () => {
    // Initialize Data
    const initializeDefaultUserData = () => {
        let userDataToStore = {
            calc_mining: 10, // 10
            calc_power: 0,
            calc_airdrop: 0,
            total_balance: 0,
            airdrop_user_prcnt: 0,
            power_user_prcnt: 0,
            per_min_calc: 0,
            mining_accrued: 0,
        };
        localStorage.setItem('user_data', JSON.stringify(userDataToStore));
        console.log('Local storage updated with new values:', userDataToStore);
        return userDataToStore;
    };

    const loadUserDataFromLocalStorage = () => {
        const userData = localStorage.getItem('user_data');
        if (userData) {
            return JSON.parse(userData);
        } else {
            initializeDefaultUserData(); // Initialize the data if it does not exist
        }
    };

    let userData = loadUserDataFromLocalStorage();

    if (!userData) {
        console.warn("User data not found, initializing default values.");
        userData = initializeDefaultUserData();
        location.reload();
    }

    // Variebles
    let airdropprcnt = parseFloat(localStorage.getItem('airdrop_user_prcnt')) || 0;
    let calcpower = parseFloat(localStorage.getItem('calc_power')) || 0;
    let invite_friend_bal = parseFloat(localStorage.getItem('invite_friend_balance')) || 0;
    let daybonus = parseFloat(localStorage.getItem('daybonus')) || 0;
    let airdropcalc = parseFloat(localStorage.getItem('calc_airdrop')) || 0;
    let minerstatuskey = 'miner_status';

    const fireButton = document.getElementById('center-image');
    const stopImage = document.getElementById('stop-image');
    const tapStartText = document.querySelector('.tapstart');
    const loadingBlock = document.getElementById('loading-block');
    const loadingAnimate = document.querySelector('.loading-animate');
    const outerCircle = document.querySelector('.outer-circle');
    const innerCircle = document.querySelector('.inner-circle');
    const networkLoadText = document.getElementById('network-load-text');
    const nvrm_per_hour = document.getElementById('nvrm-per-hour');
    const nvrm_per_hour_text = document.getElementById('nvrm-per-hour-text');
    const calc_mining = document.querySelectorAll('.calc-mining-class');
    const total_balance = document.querySelectorAll('.total-balance-class');
    const calc_airdrop = document.getElementById('calc_airdrop');
    const profit_per_day = document.getElementById('profit_per_day');

    const imageFire = '/images/miner/fire_state.png';

    let currentLang = localStorage.getItem('selectedLang') || 'EN';
    let translations = {};
    let minerTimer;
    let minerStarted = false;
    const fadeOutDuration = 300;

    const period = 60; // MAIN VARIABLES WARNING!!!!!!!!!!!!!!!!!!!!!!

    const initialMining = 10.0;
    const initialAirdrop = 0;

    let ColorActive = '#E8524F';
    let ColorState = '#583DCC';

    const loadValues = ["30%", "42%", "87%", "20%", "5%", "60%", "38%", "90%"];
    const loadprcntValues1 = [4500, 2000, 4300, 3800, 2600, 3000, 3200, 4000];
    const loadprcntValues2 = [4200, 2200, 3100, 3800, 2800, 3600, 3400, 4800];

    const workIntervals = [
        3 * 60 * 60 * 1000, // 3 hours (10800000 milliseconds)
        2 * 60 * 60 * 1000, // 2 hours (7200000 milliseconds)
        30 * 60 * 1000, // 30 minutes (1800000 milliseconds)
        2 * 60 * 60 * 1000, // 2 hours (7200000 milliseconds)
        60 * 60 * 1000, // 1 hour (3600000 milliseconds)
        3 * 60 * 60 * 1000, // 3 hours (10800000 milliseconds)
        2 * 60 * 60 * 1000, // 2 hours (7200000 milliseconds)
        3*60* 60 * 1000, // 3 hours (10800000 milliseconds)
        3 * 60 * 60 * 1000 // 3 hours (10800000 milliseconds)
    ];

    // Update & Reload
    const updateBalance = (userData) => {
        let calcAirdrop;
        let calcMining;
        const airdropClaimed = localStorage.getItem('airdrop_claim') === 'true';
        const withdrawalStatus = localStorage.getItem('withdrawal_status') === 'true';

        if (withdrawalStatus) {
            console.log("Withdrawal detected. Resetting calc_minig.");
            localStorage.setItem('withdrawal_status', false);
            const amountWithdrawal = parseFloat(localStorage.getItem('withdrawal_amount')) || 0;
            userData.calc_mining -= amountWithdrawal;
            calcMining = userData.calc_mining || 0;
        } else {
            calcMining = userData.calc_mining || 0;
        }

        if (airdropClaimed) {
            console.log("Airdrop claim detected. Resetting calc_airdrop.");
            localStorage.setItem('airdrop_claim', false);
            calcAirdrop = 0;
            userData.calc_airdrop = 0;          
            localStorage.setItem('airdrop_balance', 0);
            localStorage.setItem('invite_friend_balance', 0);
            localStorage.setItem('daybonus', 0);
        } else {
            const invite_friend_bal = parseFloat(localStorage.getItem('invite_friend_balance')) || 0;
            const daybonus = parseFloat(localStorage.getItem('daybonus')) || 0;
            const airdropcalc = parseFloat(localStorage.getItem('calc_airdrop')) || 0;
            calcAirdrop = airdropcalc + invite_friend_bal + daybonus;
        }
   
        userData.airdrop_user_prcnt = airdropprcnt;
        userData.calc_power = calcpower;
        userData.calc_airdrop = parseFloat(calcAirdrop.toFixed(3));
        userData.total_balance = parseFloat((calcMining + calcAirdrop).toFixed(3));

        localStorage.setItem('airdrop_balance', calcAirdrop);
        localStorage.setItem('mining_balance', calcMining);
        localStorage.setItem('user_data', JSON.stringify(userData));

        const start_balance = userData.calc_mining.toFixed(3);
        let periodPrcnt;

        if (start_balance <= 100) {
            periodPrcnt = 1; // 100% 
        } else if (start_balance >= 100000) {
            periodPrcnt = 0.01; // 1% 
        } else if (start_balance >= 10000) {
            periodPrcnt = 0.1; // 10% 
        } else if (start_balance >= 1000) {
            periodPrcnt = 0.5; // 50% 
        } else {
            periodPrcnt = 1;
        }

        let totalBalance = userData.total_balance.toFixed(3);
        const { integerPart: totalBalanceInt, fractionalPart: totalBalanceFrac } = formatNumberForDisplay(totalBalance);
        total_balance.forEach((element) => {
            element.innerHTML = `${totalBalanceInt}<span class="fraction">.${totalBalanceFrac}</span>`;
        });

        let amountAirdrop = userData.calc_airdrop.toFixed(3);
        const { integerPart: airdropInt, fractionalPart: airdropFrac } = formatNumberForDisplay(amountAirdrop);
        calc_airdrop.innerHTML = `${airdropInt}<span class="fraction">.${airdropFrac}</span>`;

        let profit_per_day_balance = (start_balance * periodPrcnt).toFixed(3);
        const { integerPart: profit_per_dayInt, fractionalPart: profit_per_dayFrac } = formatNumberForDisplay(profit_per_day_balance);
        profit_per_day.innerHTML = `${profit_per_dayInt}<span class="fraction">.${profit_per_dayFrac}</span>`;

        let calc_mining_balance = calcMining.toFixed(3);
        const { integerPart: calcMiningInt, fractionalPart: calcMiningFrac } = formatNumberForDisplay(calc_mining_balance);

        calc_mining.forEach((element) => {
            element.innerHTML = `${calcMiningInt}<span class="fraction">.${calcMiningFrac}</span>`;
        });

        //---
        document.querySelectorAll('#calc_power').forEach(element => {
            element.textContent = `+${userData.calc_power.toFixed(2)}%`;
        });

        const miningPercentChange = ((userData.calc_mining - initialMining) / initialMining) * 100;
        document.querySelectorAll('#prcnt_mining').forEach(element => {
            const roundedPercent = Math.round(miningPercentChange);
            element.textContent = formatPercentage(roundedPercent);
        });

        const airdropPercentChange = initialAirdrop === 0
            ? (airdropcalc + invite_friend_bal + daybonus)
            : (((airdropcalc + invite_friend_bal + daybonus - initialAirdrop) / initialAirdrop) * 100);
        document.querySelectorAll('#prcnt_airdrop').forEach(element => {
            const roundedPercent = Math.round(airdropPercentChange);
            element.textContent = formatPercentage(roundedPercent);
        });

        document.querySelectorAll('#airdrop_user_prcnt').forEach(element => {
            const roundedPercent = Math.round(Number(userData.airdrop_user_prcnt));
            element.textContent = formatPercentage(roundedPercent);
        });
    };

    //---
    let currentTheme = localStorage.getItem('selectedTheme') || 'dark';

    if (currentTheme === 'dark') {
        ColorActive = '#E8524F';
        ColorState = '#583DCC';
    } else {
        ColorActive = '#850E0C';
        ColorState = '#0047FF';
    }

    updateBalance(userData);

    // Press Start Fire Button
    fireButton.addEventListener('touchend', () => startMiner());
    fireButton.addEventListener('mouseup', () => startMiner());

    const checkMinerStatus = () => {
        let currentUserData = localStorage.getItem(minerstatuskey);
       // console.log('Miner is working!');
        if (currentUserData !== localStorage.getItem(minerstatuskey)) {
            localStorage.getItem(minerstatuskey) = currentUserData;
            stopMiner();
            console.log('Miner stopped!');
        }
    };

    // Calculating
    const NVRMperhourtext = () => {
        const start_balance_key = 'start_balance_for_NVRM_per_hour';
        const start_NVRM_per_hour_key = 'start_NVRM_per_hour';

        if (localStorage.getItem(minerstatuskey) === 'worked') {
            let calc_mining = parseFloat(userData.calc_mining.toFixed(3));
            let periodPrcnt, start_balance;

            if (calc_mining <= 100) {
                periodPrcnt = 1; // 100% 
            } else if (calc_mining >= 100000) {
                periodPrcnt = 0.01; // 1% 
            } else if (calc_mining >= 10000) {
                periodPrcnt = 0.1; // 10% 
            } else if (calc_mining >= 1000) {
                periodPrcnt = 0.5; // 50% 
            } else {
                periodPrcnt = 1;
            }

            start_balance = calc_mining * periodPrcnt;
            localStorage.setItem(start_balance_key, start_balance);

            const NVRM_per_hour_balance = localStorage.getItem(start_balance_key);
            const NVRM_per_hour = ((NVRM_per_hour_balance / 24) * (1 + localStorage.getItem('calc_power') / 100)).toFixed(3);
            localStorage.setItem(start_NVRM_per_hour_key, NVRM_per_hour);

            console.log(`Calculating NVRM_per_hour: ${NVRM_per_hour}`);

            const nvrm_per_hour_calc = NVRM_per_hour;
            const { integerPart, fractionalPart } = formatNumberForDisplay(nvrm_per_hour_calc);
            nvrm_per_hour.innerHTML = `${integerPart}<span class="fraction">.${fractionalPart}</span>`;
            nvrm_per_hour.style.color = '#E8524F';
            nvrm_per_hour_text.style.color = '#E8524F';
            nvrm_per_hour.style.display = 'block';
        } else {
            localStorage.removeItem(start_NVRM_per_hour_key);
            localStorage.removeItem(start_balance_key);
        }
    };

    startAccrual = () => {
        const startaccrual_balance_key = 'start_balance_for_NVRM_per_hour';
        const start_balance = userData.calc_mining.toFixed(3);
        localStorage.setItem(startaccrual_balance_key, start_balance);

        const saved_start_balance = localStorage.getItem(startaccrual_balance_key)
        console.log(`Start accrual. Start balance: ${saved_start_balance}. Power: ${userData.calc_power}`);

        let periodPrcnt;
        let accrual_balance;

        if (saved_start_balance <= 100) {
            periodPrcnt = 1; // 100% 
        } else if (saved_start_balance >= 100000) {
            periodPrcnt = 0.01; // 1% 
        } else if (saved_start_balance >= 10000) {
            periodPrcnt = 0.1; // 10% 
        } else if (saved_start_balance >= 1000) {
            periodPrcnt = 0.5; // 50% 
        } else {
            periodPrcnt = 1;
        }

        accrual_balance = saved_start_balance * periodPrcnt;
        //---
        if (!isNaN(saved_start_balance)) {
            const NVRM_per_hour = ((accrual_balance / 24) * (1 + localStorage.getItem('calc_power') / 100)).toFixed(3);
            const NVRM_per_min = (NVRM_per_hour / period).toFixed(3);
            userData.per_min_calc = NVRM_per_min;
            localStorage.setItem('user_data', JSON.stringify(userData));
            console.log(`NVRM per min: ${NVRM_per_min}`);
        }
    };

    stopAccrual = () => {
        const now = Date.now();
        const actualWorkTime = Math.min(now - userData.start_time, userData.end_time - userData.start_time);
        const minutesWorked = actualWorkTime / (1000 * 60);
        //---
        if (minutesWorked > 0) {
            const accruedNVRM = (userData.per_min_calc * minutesWorked).toFixed(3);

            userData.mining_accrued += parseFloat(accruedNVRM);
            let calcMining = parseFloat(userData.calc_mining);
            let miningAccrued = parseFloat(userData.mining_accrued);

            if (isNaN(miningAccrued)) miningAccrued = 0;
            calcMining += miningAccrued;
            userData.calc_mining = calcMining;
            console.log(`Mining accrual = ${miningAccrued}. Total accrued ${calcMining}`);
            localStorage.setItem('user_data', JSON.stringify(userData));
            console.log(`Miner stopped manually. Accrued NVRM for ${minutesWorked.toFixed(1)} min: ${accruedNVRM}`);
        }
    };

    // Stop Miner
    stopImage.addEventListener('click', () => {
        loadTranslations(currentLang, () => {
            tapStartText.textContent = translate('miner_stopping');
        });

        stopMiner();
        console.log('Stop Button Pressed. Miner stopped!')
        location.reload();
    });

    const stopMiner = () => {
        stopAccrual();
        localStorage.setItem(minerstatuskey, 'stopped');
        userData.nvrm_per_hour = 0;
        userData.per_min_calc = 0;
        userData.mining_accrued = 0;
        localStorage.removeItem('start_NVRM_per_hour');
        userData.end_time = null;
        localStorage.setItem('user_data', JSON.stringify(userData));
        //---
        clearTimeout(minerTimer);

        updateBalance(userData);
        resetNetworkLoad();
        resetNVRMPerHour();
        showLoadingAnimation(() => resetToInitialState());

        minerStarted = false;
        console.log('Miner has been stopped!');
    }

    // Start Miner
    const startMiner = () => {
        if (minerStarted)
            return;
        console.log('Fire Button Pressed. Miner starting!');
        //---
        const workTime = getRandomWorkTime();
        const endTime = Date.now() + workTime;
        //---
        localStorage.setItem(minerstatuskey, 'worked');
        userData.start_time = Date.now();
        userData.end_time = endTime;
        localStorage.setItem('user_data', JSON.stringify(userData));
        //---
        loadTranslations(currentLang, () => {
            tapStartText.textContent = translate('loading');
        });
        showLoadingAndStartMiner();
        startAccrual();
        //---
        minerStarted = true;
        //---
        minerTimer = setTimeout(() => {
            stopMiner();
        }, workTime);

        console.log(`Miner started. Working for ${(workTime / (1000 * 60 * 60)).toFixed(2)} hours`);
    }

    // Timer Working Miner
    const getRandomWorkTime = () => {
        const randomIndex = Math.floor(Math.random() * workIntervals.length);
        return workIntervals[randomIndex];
    };

    // Reload
    const Reload = () => {
        if (localStorage.getItem(minerstatuskey) === 'worked') {
            console.log('Miner is already working after reload');

            const nvrm_per_hour_calc = localStorage.getItem('start_NVRM_per_hour');
            const { integerPart, fractionalPart } = formatNumberForDisplay(nvrm_per_hour_calc);

            nvrm_per_hour.innerHTML = `${integerPart}<span class="fraction">.${fractionalPart}</span>`;
            nvrm_per_hour.style.color = ColorActive;
            nvrm_per_hour_text.style.color = ColorActive;
            nvrm_per_hour.style.display = 'block';
            fireButton.style.display = 'none';
            stopImage.style.display = 'block';
            outerCircle.classList.add('circle-active');
            innerCircle.classList.add('circle-active');
            tapStartText.style.color = ColorActive;
            tapStartText.setAttribute('data-lang', 'miner_working');
            loadTranslations(currentLang, () => {
                tapStartText.textContent = translate('miner_working');
            });
            //---
            changeNetworkLoad();

            const now = Date.now();
            const timeLeft = userData.end_time - now;

            if (timeLeft > 0) {
                console.log(`Time left for miner to stop: ${timeLeft / 1000} seconds`);
                minerTimer = setTimeout(stopMiner, timeLeft);
            } else {
                stopMiner();
            }

        } else {
            tapStartText.setAttribute('data-lang', 'miner-tap-start');
            loadTranslations(currentLang, () => {
                tapStartText.textContent = translate('miner-tap-start');
            });
            tapStartText.style.color = ColorState;

            resetToInitialState();
        }

        updateBalance(userData);
    };

    // Animate Section
    const startMinerUI = () => {
        stopImage.style.display = 'block';
        outerCircle.classList.add('circle-active');
        innerCircle.classList.add('circle-active');
        tapStartText.style.color = ColorActive;
        loadTranslations(currentLang, () => {
            tapStartText.textContent = translate('miner_working');
        });
    };

    const showLoadingAndStartMiner = () => {
        fadeOutImage(() => {
            loadingBlock.style.display = 'block';
            resetLoadingTextVisibility();
            startLoadingAnimation();
            setTimeout(() => {
                loadingBlock.style.display = 'none';
                changeNetworkLoad();
                showLoadingAnimation(() => {
                    NVRMperhourtext();
                    startMinerUI();
                    location.reload();
                    console.log(`Miner is working`);
                });
            }, 5000);
        });
    };

    function fadeOutImage(callback) {
        fireButton.style.transition = `opacity ${fadeOutDuration}ms`;
        fireButton.style.opacity = '0';
        setTimeout(() => {
            fireButton.style.display = 'none';
            callback();
        }, fadeOutDuration);
    }

    function animatePercentage(elementId, start, end, duration) {
        let element = document.getElementById(elementId);
        let current = start;
        let increment = (end - start) / (duration / 100);

        let interval = setInterval(function () {
            current += increment;
            element.textContent = Math.floor(current) + '% ' + (elementId === 'progress1' ? ' ' : '');

            if (current >= end) {
                clearInterval(interval);
                element.textContent = end + '% ' + (elementId === 'progress1' ? ' ' : '');
            }
        }, 100);
    }

    function startLoadingAnimation() {
        document.getElementById('progress1').textContent = '0% ';
        document.getElementById('progress2').textContent = '0%';

        const randomValue1 = loadprcntValues1[Math.floor(Math.random() * loadprcntValues1.length)];
        const randomValue2 = loadprcntValues2[Math.floor(Math.random() * loadprcntValues2.length)];

        animatePercentage('progress1', 0, 100, randomValue1);
        animatePercentage('progress2', 0, 100, randomValue2);

        const loadingTexts = document.querySelectorAll('.loading-text');
        loadingBlock.style.display = 'block';
        loadingTexts.forEach((loadingText, index) => {
            setTimeout(() => {
                loadingText.style.opacity = '1';
            }, index * 200);
        });
    }

    function showLoadingAnimation(callback) {
        loadingAnimate.style.display = 'block';
        setTimeout(function () {
            loadingAnimate.style.display = 'none';
            if (callback) callback();
        }, 2000);
    }

    function changeNetworkLoad() {
        loadTextTimeout = setTimeout(() => {
            const randomValue = loadValues[Math.floor(Math.random() * loadValues.length)];
            networkLoadText.textContent = randomValue;
            networkLoadText.style.color = ColorState;
        }, 1000);
    }

    // Reset Section
    function resetNVRMPerHour() {
        loadTranslations(currentLang, () => {
            nvrm_per_hour_text.textContent = translate('0_per_hour');
        });
        nvrm_per_hour.style.display = 'block';
        nvrm_per_hour.textContent = '0.000';
        nvrm_per_hour.style.color = '';
        nvrm_per_hour_text.style.color = '';
    }

    function resetNetworkLoad() {
        clearTimeout(loadTextTimeout);
        networkLoadText.textContent = '0%';
        networkLoadText.style.color = '';
    }

    const resetToInitialState = () => {
        stopImage.style.display = 'none';
        fireButton.style.display = 'block';
        fireButton.style.opacity = '1';
        fireButton.src = imageFire;
        tapStartText.style.color = ColorState;
        outerCircle.classList.remove('circle-active');
        innerCircle.classList.remove('circle-active');
        loadTranslations(currentLang, () => {
            tapStartText.textContent = translate('tap_to_start');
        });
    };

    function resetLoadingTextVisibility() {
        const loadingTexts = document.querySelectorAll('.loading-text');
        loadingTexts.forEach((loadingText) => {
            loadingText.style.opacity = '0';
        });
    }

    // Translate Section
    const loadTranslations = (lang, callback) => {
        fetch('/static/lang.json')
            .then(response => response.json())
            .then(data => {
                translations = data[lang.toLowerCase()];
                if (translations) {
                    callback();
                } else {
                    console.error(`Translations for language "${lang}" not found.`);
                }
            })
            .catch(error => console.error('Error loading translations:', error));
    };

    const translate = (key) => {
        return translations[key] || key;
    };

    checkMinerStatus();
    Reload();
});

//---
function formatNumberForDisplay(number) {
    if (isNaN(number)) {
        console.error("Invalid number:", number);
        return { integerPart: "0", fractionalPart: "000" }; 
    }

    const [integerPart, fractionalPart = "000"] = number.toFixed(3).split(".");
    return { integerPart, fractionalPart };
}

//---
function formatPercentage(value) {
    const formatted = new Intl.NumberFormat('ru-RU').format(value);
    return `+${formatted}%`;
}

/* If you need to view all values ​​stored in localStorage
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    console.log(key, localStorage.getItem(key));
}
*/

