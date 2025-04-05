document.addEventListener('DOMContentLoaded', () => {
    //--- Task
    //--- BUY 100
    const buy100_button = document.getElementById('buy100');
    const frame_status_buy100 = document.getElementById('frame_status_buy100');
    const icon_status_buy100 = document.getElementById('icon_status_buy100');

    const buy100_button_boost = document.getElementById('buy100_boost');
    const frame_status_buy100_boost = document.getElementById('frame_status_buy100_boost');
    const icon_status_buy100_boost = document.getElementById('icon_status_buy100_boost');

    //--- BUY 1000
    const buy1000_button = document.getElementById('buy1000');
    const frame_status_buy1000 = document.getElementById('frame_status_buy1000');
    const icon_status_buy1000 = document.getElementById('icon_status_buy1000');

    const buy1000_button_boost = document.getElementById('buy1000_boost');
    const frame_status_buy1000_boost = document.getElementById('frame_status_buy1000_boost');
    const icon_status_buy1000_boost = document.getElementById('icon_status_buy1000_boost');

    //--- Modal 
    //--- BUY 100
    const modal_buy100_window = document.getElementById("modal_buy100_window");
    const modal_buy100_close_button = document.getElementById("modal_buy100_close_button");
    const modal_header_buy100 = document.getElementById('modal_header_buy100');
    const modal_header_p_buy100 = document.getElementById('modal_header_p_buy100');
    const modal_header_p2_buy100 = document.getElementById('modal_header_p2_buy100');
    const modal_header_processing_buy100 = document.getElementById('modal_header_processing_buy100');
    const modal_main_content_buy100 = document.getElementById('modal_main_content_buy100');
    const modal_processing_content_buy100 = document.getElementById('modal_processing_content_buy100');
    const modal_succes_content_buy100 = document.getElementById('modal_succes_content_buy100');
    const modal_error_content_buy100 = document.getElementById('modal_error_content_buy100');

    const modal_buy100_window_boost = document.getElementById("modal_buy100_window_boost");
    const modal_buy100_close_button_boost = document.getElementById("modal_buy100_close_button_boost");
    const modal_header_buy100_boost = document.getElementById('modal_header_buy100_boost');
    const modal_header_p_buy100_boost = document.getElementById('modal_header_p_buy100_boost');
    const modal_header_p2_buy100_boost = document.getElementById('modal_header_p2_buy100_boost');
    const modal_header_processing_buy100_boost = document.getElementById('modal_header_processing_buy100_boost');
    const modal_main_content_buy100_boost = document.getElementById('modal_main_content_buy100_boost');
    const modal_processing_content_buy100_boost = document.getElementById('modal_processing_content_buy100_boost');
    const modal_succes_content_buy100_boost = document.getElementById('modal_succes_content_buy100_boost');
    const modal_error_content_buy100_boost = document.getElementById('modal_error_content_buy100_boost');

    //--- BUY 1000
    const modal_buy1000_window = document.getElementById("modal_buy1000_window");
    const modal_buy1000_close_button = document.getElementById("modal_buy1000_close_button");
    const modal_header_buy1000 = document.getElementById('modal_header_buy1000');
    const modal_header_p_buy1000 = document.getElementById('modal_header_p_buy1000');
    const modal_header_p2_buy1000 = document.getElementById('modal_header_p2_buy1000');
    const modal_header_processing_buy1000 = document.getElementById('modal_header_processing_buy1000');
    const modal_main_content_buy1000 = document.getElementById('modal_main_content_buy1000');
    const modal_processing_content_buy1000 = document.getElementById('modal_processing_content_buy1000');
    const modal_succes_content_buy1000 = document.getElementById('modal_succes_content_buy1000');
    const modal_error_content_buy1000 = document.getElementById('modal_error_content_buy1000');

    const modal_buy1000_window_boost = document.getElementById("modal_buy1000_window_boost");
    const modal_buy1000_close_button_boost = document.getElementById("modal_buy1000_close_button_boost");
    const modal_header_buy1000_boost = document.getElementById('modal_header_buy1000_boost');
    const modal_header_p_buy1000_boost = document.getElementById('modal_header_p_buy1000_boost');
    const modal_header_p2_buy1000_boost = document.getElementById('modal_header_p2_buy1000_boost');
    const modal_header_processing_buy1000_boost = document.getElementById('modal_header_processing_buy1000_boost');
    const modal_main_content_buy1000_boost = document.getElementById('modal_main_content_buy1000_boost');
    const modal_processing_content_buy1000_boost = document.getElementById('modal_processing_content_buy1000_boost');
    const modal_succes_content_buy1000_boost = document.getElementById('modal_succes_content_buy1000_boost');
    const modal_error_content_buy1000_boost = document.getElementById('modal_error_content_buy1000_boost');

    const button_confirm_buy100 = document.getElementById('button_confirm_buy100');
    const button_error_buy100 = document.getElementById('button_error_buy100');
    const button_confirm_buy100_boost = document.getElementById('button_confirm_buy100_boost');
    const button_error_buy100_boost = document.getElementById('button_error_buy100_boost');

    const button_confirm_buy1000 = document.getElementById('button_confirm_buy1000');
    const button_error_buy1000 = document.getElementById('button_error_buy1000');
    const button_confirm_buy1000_boost = document.getElementById('button_confirm_buy1000_boost');
    const button_error_buy1000_boost = document.getElementById('button_error_buy1000_boost');

    //--- Sponsored View
    const sponsoredViewButton = document.getElementById('sponsoredview');
    const sponsoredViewButtonOK = document.getElementById('button_sponsor_OK');
    const modalsponsorWindow = document.getElementById("modal_sponsor");
    const closeModalsponsorButton = document.getElementById("close_modal_sponsor");
    const modal_heder_sponsored = document.getElementById("modal_heder_sponsored");
    const modal_heder_sponsored_boost = document.getElementById("modal_heder_sponsored_boost");
    const modal_succes_content_sponsored_view = document.getElementById("modal_succes_content");
    const modal_succes_content_sponsored_view_boost = document.getElementById("modal_succes_content_boost");
    const timerElement = document.getElementById("timer");
    const timerElement_boost = document.getElementById("timer_boost");
    //---
    const sponsoredViewButtonBoost = document.getElementById('sponsoredview_boost');
    const sponsoredViewButtonBoostOK = document.getElementById('button_sponsor_OK_boost');
    const modalsponsorboostWindow = document.getElementById("modal_sponsor_boost");
    const closeModalsponsorboostButton = document.getElementById("close_modal_sponsor_boost");
    //---
    const taskStatus = document.getElementById('task_status_sponsored_view');
    const iconStatus = document.getElementById('task_icon_status_sponsored_view');
    const taskStatusBoost = document.getElementById('task_status_sponsored_view_boost');
    const iconStatusBoost = document.getElementById('task_icon_status_sponsored_view_boost');

    //---
    const buy100Key = 'Buy100';
    const buy1000Key = 'Buy1000';
    const sponsoredKey = 'SponsoredView';

    const lastClickKey = 'sponsored_view_last_click';
    const buy100lastClickKey = 'buy100_last_click';
    const buy1000lastClickKey = 'buy1000_last_click';

    const timeHour = 3 * 60 * 60 * 1000; 
    const tameDay = 24 * 60 * 60 * 1000; 

    const powerSponsor = 38;
    const powerBuy100 = 100;
    const powerBuy1000 = 1000;

    const discount1000 = 0.5;
    const discount100 = 1;

    let currentLang = localStorage.getItem('selectedLang') || 'EN';

    //---
    if (minerStatus()) {
        buy100_button.addEventListener("click", () => {
            ShowAlertWindow();
        });

        buy100_button_boost.addEventListener("click", () => {
            ShowAlertWindow();
        });

        buy1000_button.addEventListener("click", () => {
            ShowAlertWindow();
        });
        buy1000_button_boost.addEventListener("click", () => {
            ShowAlertWindow();
        });

        //--- Sponsored View
        sponsoredViewButton.addEventListener("click", () => {
            ShowAlertWindow();
        });

        sponsoredViewButtonBoost.addEventListener("click", () => {
            ShowAlertWindow();
        });
    } else {
        buy100_button.addEventListener("click", async (event) => {
            event.stopPropagation();
            updateUIbuy100();
            modal_buy100_window.style.display = "flex";
            setTimeout(() => {
                modal_buy100_window.classList.add("active");
            }, 10);
            await updateModalButtons(modal_buy100_window);
        });

        buy100_button_boost.addEventListener("click", async (event) => {
            event.stopPropagation();
            updateUIbuy100();
            modal_buy100_window_boost.style.display = "flex";
            setTimeout(() => {
                modal_buy100_window_boost.classList.add("active");
            }, 10);
            await updateModalButtons(modal_buy100_window_boost);
        });

        buy1000_button.addEventListener("click", async (event) => {
            event.stopPropagation();
            updateUIbuy1000();
            modal_buy1000_window.style.display = "flex";
            setTimeout(() => {
                modal_buy1000_window.classList.add("active");
            }, 10);
            await updateModalButtons(modal_buy1000_window);
        });

        buy1000_button_boost.addEventListener("click", async (event) => {
            event.stopPropagation();
            updateUIbuy1000();
            modal_buy1000_window_boost.style.display = "flex";
            setTimeout(() => {
                modal_buy1000_window_boost.classList.add("active");
            }, 10);
            await  updateModalButtons(modal_buy1000_window_boost);
        });

        //--- Sponsored View
        sponsoredViewButton.addEventListener("click", (event) => {
            event.stopPropagation();
            resetCountdown();
            loadConfig('default');
            modalsponsorWindow.style.display = "flex";
            setTimeout(() => {
                modalsponsorWindow.classList.add("active");
            }, 10);
        });

        sponsoredViewButtonBoost.addEventListener("click", (event) => {
            event.stopPropagation();
            resetCountdownBoost();
            loadConfig('boost');
            modalsponsorboostWindow.style.display = "flex";
            setTimeout(() => {
                modalsponsorboostWindow.classList.add("active");
            }, 10);
        });
    }

    async function updateModalButtons(modalWindow) {
        const isConnected = localStorage.getItem('wallet_status') === 'connected';
        const TON_PRICE_VOUCHER = await getTonPrice(); 
        const isPriceAvailable = TON_PRICE_VOUCHER !== null; 
    
        const buttonsInModal = modalWindow.querySelectorAll('.button-vaucher');
    
        buttonsInModal.forEach((btn) => {
            if (isConnected && isPriceAvailable) {
                btn.classList.remove('disabled');
                btn.disabled = false;
            } else {
                btn.classList.add('disabled');
                btn.disabled = true;
            }
        });
    }
    //-------
    //
    // Sponsored View
    //
    //-------
    let countdown;
    let timer;
    let player;
    const configUrl = '/static/adcontent.json';
    const adBanner = document.getElementById('adbanner');
    const adBannerBoost = document.getElementById('adbanner_boost');

    async function loadConfig(context) {
        try {
            const response = await fetch(configUrl);
            const data = await response.json();
            setupAd(data, context);
        } catch (error) {
            console.error('Error loading JSON:', error);
        }
    }

    function setupAd(config, context) {
        const videoUrl = config.videos[Math.floor(Math.random() * config.videos.length)];
        const videoId = getYouTubeVideoId(videoUrl);
        countdown = config.countdown;

        if (context === 'default') {
            adBanner.innerHTML = '';
            if (player) {
                player.destroy();
            }
            player = new YT.Player('adbanner', {
                height: '250',
                width: '300',
                videoId: videoId, // ID видео             
                events: {
                    'onReady': function (event) {
                        event.target.unMute();
                        event.target.playVideo();
                    },
                    'onStateChange': onPlayerStateChange
                }
            });

            startCountdown(timerElement);
        } else if (context === 'boost') {
            adBannerBoost.innerHTML = '';
            if (player) {
                player.destroy();
            }
            player = new YT.Player('adbanner_boost', {
                height: '250',
                width: '300',
                videoId: videoId,
                events: {
                    'onReady': function (event) {
                        event.target.unMute();
                        event.target.playVideo();
                    },
                    'onStateChange': onPlayerStateChange
                }
            });

            startCountdown(timerElement_boost);
        }
    }

    function getYouTubeVideoId(url) {
        const regex = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|(?:[^\/\n\s]+\/)*)(?:(\S{11})))/;
        const match = url.match(regex);
        return match ? match[1] : null;
    }

    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.ENDED) {
            showSuccessContent();
        }
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    function startCountdown(timerEl) {
        timerEl.textContent = formatTime(countdown);
        timer = setInterval(() => {
            countdown--;
            timerEl.textContent = formatTime(countdown);
            if (countdown <= 0) {
                clearInterval(timer);
                if (player) {
                    player.stopVideo();
                    player.destroy();
                }
                showSuccessContent(timerEl);
            }
        }, 1000);
    }

    function resetCountdown() {
        clearInterval(timer);
        countdown = 0;
        timerElement.textContent = formatTime(countdown);
    }

    function resetCountdownBoost() {
        clearInterval(timer);
        countdown = 0;
        timerElement_boost.textContent = formatTime(countdown);
    }

    function showSuccessContent(timerEl) {
        clearInterval(timer);
        if (timerEl === timerElement) {
            adBanner.style.display = 'none';
            modal_heder_sponsored.style.display = 'none';
            modal_succes_content_sponsored_view.style.display = 'block';
        } else if (timerEl === timerElement_boost) {
            adBannerBoost.style.display = 'none';
            modal_heder_sponsored_boost.style.display = 'none';
            modal_succes_content_sponsored_view_boost.style.display = 'block';
        }
    }

    const checkSponsorView = () => {
        const lastClickTime = parseInt(localStorage.getItem(lastClickKey), 10);
        const currentTime = Date.now();
        //---
        if (lastClickTime && (currentTime - lastClickTime) < timeHour) {
            const timeLeft = timeHour - (currentTime - lastClickTime);
            const remainingHours = timeLeft / (60 * 60 * 1000); // 60 * 60 * 1000
            console.log(`${remainingHours.toFixed(2)} часа до конца бонуса`);
            sponsoredViewButton.disabled = true;
            sponsoredViewButtonBoost.disabled = true;
            taskStatus.style.display = 'none';
            iconStatus.style.display = 'block';
            taskStatusBoost.style.display = 'none';
            iconStatusBoost.style.display = 'block';
        } else {
            localStorage.removeItem(lastClickKey);
            localStorage.setItem(sponsoredKey, 0);
            sponsoredViewButton.disabled = false;
            sponsoredViewButtonBoost.disabled = false;
            taskStatus.style.display = 'flex';
            iconStatus.style.display = 'none';
            taskStatusBoost.style.display = 'flex';
            iconStatusBoost.style.display = 'none';
        }
    };

    if (localStorage.getItem(sponsoredKey) === powerSponsor) {
        sponsoredViewButton.disabled = true;
        sponsoredViewButtonBoost.disabled = true;
        taskStatus.style.display = 'none';
        iconStatus.style.display = 'block';
        taskStatusBoost.style.display = 'none';
        iconStatusBoost.style.display = 'block';
        checkSponsorView();
    }

    if (sponsoredViewButtonOK) {
        sponsoredViewButtonOK.addEventListener('click', () => {
            sponsoredViewButton.disabled = true;
            sponsoredViewButtonBoost.disabled = true;
            taskStatus.style.display = 'none';
            iconStatus.style.display = 'block';
            taskStatusBoost.style.display = 'none';
            iconStatusBoost.style.display = 'block';
            //---
            modalsponsorWindow.classList.remove("active");
            setTimeout(() => {
                modalsponsorWindow.style.display = "none";
            }, 500);

            const sponsoredViewCountKey = 'sponsored_view_count';
            let sponsoredViewCount = parseInt(localStorage.getItem(sponsoredViewCountKey), 10) || 0;
            sponsoredViewCount += 1;
            localStorage.setItem(sponsoredViewCountKey, sponsoredViewCount);

            const currentTime = Date.now();
            localStorage.setItem(sponsoredKey, powerSponsor);
            localStorage.setItem('sponsored_view_last_click', currentTime);
            checkSponsorView();
            updateUI();
        });
    }

    if (sponsoredViewButtonBoostOK) {
        sponsoredViewButtonBoostOK.addEventListener('click', () => {
            sponsoredViewButton.disabled = true;
            sponsoredViewButtonBoost.disabled = true;
            taskStatus.style.display = 'none';
            iconStatus.style.display = 'block';
            taskStatusBoost.style.display = 'none';
            iconStatusBoost.style.display = 'block';
            //---
            modalsponsorboostWindow.classList.remove("active");
            setTimeout(() => {
                modalsponsorboostWindow.style.display = "none";
            }, 500);

            const currentTime = Date.now();
            localStorage.setItem(sponsoredKey, powerSponsor);
            localStorage.setItem('sponsored_view_last_click', currentTime);
            checkSponsorView();
            updateUI();
        });
    }

    if (modalsponsorWindow && closeModalsponsorButton) {
        closeModalsponsorButton.addEventListener("click", () => {
            modalsponsorWindow.classList.remove("active");
            if (player) {
                player.stopVideo();
                player.destroy();
            }
            resetCountdown();
            setTimeout(() => {
                modalsponsorWindow.style.display = "none";
            }, 500);
        });
    }

    if (modalsponsorboostWindow && closeModalsponsorboostButton) {
        closeModalsponsorboostButton.addEventListener("click", () => {
            modalsponsorboostWindow.classList.remove("active");
            if (player) {
                player.stopVideo();
                player.destroy();
            }
            resetCountdownBoost();
            setTimeout(() => {
                modalsponsorboostWindow.style.display = "none";
            }, 500);
        });
    }

    //-------
    //
    // Buy 100
    //
    //-------
    if (localStorage.getItem(buy100Key) === powerBuy100) {
        buy100_button.disabled = true;
        frame_status_buy100.display = 'none';
        icon_status_buy100.display = 'block';

        buy100_button_boost.disabled = true;
        frame_status_buy100_boost.display = 'none';
        icon_status_buy100_boost.display = 'block';
    }

    if (modal_buy100_window && modal_buy100_close_button) {
        modal_buy100_close_button.addEventListener("click", (event) => {
            event.stopPropagation();
            modal_buy100_window.classList.remove("active");
            setTimeout(() => {
                modal_buy100_window.style.display = "none";
            }, 500);
        });

        window.addEventListener("click", (event) => {
            if (modal_succes_content_buy100.style.display === "none" && !modal_buy100_window.contains(event.target)) {
                modal_buy100_window.classList.remove("active");
                setTimeout(() => {
                    modal_buy100_window.style.display = "none";
                }, 500);
            }
        });
    }

    if (modal_buy100_window_boost && modal_buy100_close_button_boost) {
        modal_buy100_close_button_boost.addEventListener("click", (event) => {
            event.stopPropagation();
            modal_buy100_window_boost.classList.remove("active");
            setTimeout(() => {
                modal_buy100_window_boost.style.display = "none";
            }, 500);
        });

        window.addEventListener("click", (event) => {
            if (modal_succes_content_buy100_boost.style.display === "none" && !modal_buy100_window_boost.contains(event.target)) {
                modal_buy100_window_boost.classList.remove("active");
                setTimeout(() => {
                    modal_buy100_window_boost.style.display = "none";
                }, 500);
            }
        });
    }

    if (button_confirm_buy100) {
        button_confirm_buy100.addEventListener('click', (event) => {
            buy100_button.disabled = true;
            frame_status_buy100.style.display = 'none';
            icon_status_buy100.style.display = 'block';
            //---
            event.stopPropagation();
            modal_buy100_window.classList.remove("active");
            setTimeout(() => {
                modal_buy100_window.style.display = "none";
            }, 500);

            const currentTime = Date.now();
            localStorage.setItem('check_buy100_voucher', true);
            localStorage.setItem(buy100Key, powerBuy100);
            localStorage.setItem('buy100_last_click', currentTime);
            localStorage.setItem('statusBuy100Voucher', 'default');
            checkBuy100();
            updateUI();
            updateUIbuy100();
            location.reload();
        });
    }

    if (button_confirm_buy100_boost) {
        button_confirm_buy100_boost.addEventListener('click', (event) => {
            buy100_button_boost.disabled = true;
            frame_status_buy100_boost.style.display = 'none';
            icon_status_buy100_boost.style.display = 'block';
            //---
            event.stopPropagation();
            modal_buy100_window_boost.classList.remove("active");
            setTimeout(() => {
                modal_buy100_window_boost.style.display = "none";
            }, 500);

            const currentTime = Date.now();
            localStorage.setItem('check_buy100_voucher', true);
            localStorage.setItem(buy100Key, powerBuy100);
            localStorage.setItem('buy100_last_click', currentTime);
            localStorage.setItem('statusBuy100Voucher', 'default');
            updateUI();
            checkBuy100();
            updateUIbuy100();
            location.reload();
        });
    }

    if (button_error_buy100) {
        button_error_buy100.addEventListener('click', (event) => {
            localStorage.setItem('statusBuy100Voucher', 'default');
            updateUIbuy100();
            updateUI();
            //---
            event.stopPropagation();
            modal_buy100_window.classList.remove("active");
            setTimeout(() => {
                modal_buy100_window.style.display = "none";
            }, 500);
            location.reload();
        });
    }

    if (button_error_buy100_boost) {
        button_error_buy100_boost.addEventListener('click', (event) => {
            localStorage.setItem('statusBuy100Voucher', 'default');
            updateUIbuy100();
            updateUI();
            //---
            event.stopPropagation();
            modal_buy100_window_boost.classList.remove("active");
            setTimeout(() => {
                modal_buy100_window_boost.style.display = "none";
            }, 500);
            location.reload();
        });
    }

    //-------
    //
    // Buy 1000
    //
    //-------
    if (localStorage.getItem(buy1000Key) === powerBuy1000) {
        buy1000_button.disabled = true;
        frame_status_buy1000.display = 'none';
        icon_status_buy1000.display = 'block';

        buy1000_button_boost.disabled = true;
        frame_status_buy1000_boost.display = 'none';
        icon_status_buy1000_boost.display = 'block';
    }

    if (modal_buy1000_window && modal_buy1000_close_button) {
        modal_buy1000_close_button.addEventListener("click", (event) => {
            event.stopPropagation();
            modal_buy1000_window.classList.remove("active");
            setTimeout(() => {
                modal_buy1000_window.style.display = "none";
            }, 500);
        });

        window.addEventListener("click", (event) => {
            if (modal_succes_content_buy1000.style.display === "none" && !modal_buy1000_window.contains(event.target)) {
                modal_buy1000_window.classList.remove("active");
                setTimeout(() => {
                    modal_buy1000_window.style.display = "none";
                }, 500);
            }
        });
    }

    if (modal_buy1000_window_boost && modal_buy1000_close_button_boost) {
        modal_buy1000_close_button_boost.addEventListener("click", (event) => {
            event.stopPropagation();
            modal_buy1000_window_boost.classList.remove("active");
            setTimeout(() => {
                modal_buy1000_window_boost.style.display = "none";
            }, 500);
        });

        window.addEventListener("click", (event) => {
            if (modal_succes_content_buy1000_boost.style.display === "none" && !modal_buy1000_window_boost.contains(event.target)) {
                modal_buy1000_window_boost.classList.remove("active");
                setTimeout(() => {
                    modal_buy1000_window_boost.style.display = "none";
                }, 500);
            }
        });
    }

    if (button_confirm_buy1000) {
        button_confirm_buy1000.addEventListener('click', (event) => {
            buy1000_button.disabled = true;
            frame_status_buy1000.style.display = 'none';
            icon_status_buy1000.style.display = 'block';
            //---
            event.stopPropagation();
            modal_buy1000_window.classList.remove("active");
            setTimeout(() => {
                modal_buy1000_window.style.display = "none";
            }, 500);

            const currentTime = Date.now();
            localStorage.setItem(buy1000Key, powerBuy1000);
            localStorage.setItem('buy1000_last_click', currentTime);
            localStorage.setItem('statusBuy1000Voucher', 'default');
            checkBuy1000();
            updateUI();
            updateUIbuy1000();
            location.reload();
        });
    }

    if (button_confirm_buy1000_boost) {
        button_confirm_buy1000_boost.addEventListener('click', (event) => {
            buy1000_button_boost.disabled = true;
            frame_status_buy1000_boost.style.display = 'none';
            icon_status_buy1000_boost.style.display = 'block';
            //---
            event.stopPropagation();
            modal_buy1000_window_boost.classList.remove("active");
            setTimeout(() => {
                modal_buy1000_window_boost.style.display = "none";
            }, 500);

            const currentTime = Date.now();
            localStorage.setItem(buy1000Key, powerBuy1000);
            localStorage.setItem('buy1000_last_click', currentTime);
            localStorage.setItem('statusBuy1000Voucher', 'default');
            updateUI();
            checkBuy1000();
            updateUIbuy1000();
            location.reload();
        });
    }

    if (button_error_buy1000) {
        button_error_buy1000.addEventListener('click', (event) => {
            localStorage.setItem('statusBuy1000Voucher', 'default');
            updateUIbuy1000();
            updateUI();
            //---
            event.stopPropagation();
            modal_buy1000_window.classList.remove("active");
            setTimeout(() => {
                modal_buy1000_window.style.display = "none";
            }, 500);
            location.reload();
        });
    }

    if (button_error_buy1000_boost) {
        button_error_buy1000_boost.addEventListener('click', (event) => {
            localStorage.setItem('statusBuy1000Voucher', 'default');
            updateUIbuy1000();
            updateUI();
            //---
            event.stopPropagation();
            modal_buy1000_window_boost.classList.remove("active");
            setTimeout(() => {
                modal_buy1000_window_boost.style.display = "none";
            }, 500);
            location.reload();
        });
    }

    //-------
    //
    // Buy Nivarium Wallet
    //
    //-------
    const buynivariumButton = document.getElementById('buynivariumbutton');
    const modalbuynivariumWindow = document.getElementById("modal-buynivarium");
    const closeModalbuynivariumButton = document.getElementById("close-modal-buynivarium");
    const successMessageContainer = document.getElementById("successMessageVisiblebuy");
    const processingBuy = document.getElementById('modal_processing_buy_wallet');
    const modalheader = document.getElementById("modal-header-buy-nivarium");
    const modalmessagemaincontent = document.getElementById("modal-message-main-content-buy-nivarium");
    const modal_error_content_wallet = document.getElementById("modal_error_content_buy_wallet");
    const inputPayText = document.querySelector('.input-pay p');
    const inputReceiveText = document.querySelector('.input-receive p');
    const termsCheckbox = document.getElementById('terms-checkbox');
    const buttonConfirmBuy = document.querySelector('.button-confirm-buy');
    const inputPay = document.getElementById("amount-pay");
    const buttonOKbuynivarium = document.getElementById('buttonOKbuynivarium');
    const buttonErrorbuynivarium = document.getElementById('button_error_buy_wallet');

    let termsCheckboxchecked = false;

    if (buynivariumButton && modalbuynivariumWindow && closeModalbuynivariumButton) {
        buynivariumButton.addEventListener("click", (event) => {
            event.stopPropagation();
            updateUIbuyNVRM();
            updatePrices();
            modalbuynivariumWindow.style.display = "flex";
            setTimeout(() => {
                modalbuynivariumWindow.classList.add("active");
                buttonConfirmBuy.classList.add('disabled');
                buttonConfirmBuy.disabled = true;
                termsCheckbox.checked = false;
            }, 10);
        });

        closeModalbuynivariumButton.addEventListener("click", (event) => {
            event.stopPropagation();
            modalbuynivariumWindow.classList.remove("active");
            setTimeout(() => {
                modalbuynivariumWindow.style.display = "none";
            }, 500);
        });

        window.addEventListener("click", (event) => {
            if (!successMessageContainer.style.display === "flex" && !modalbuynivariumWindow.contains(event.target)) {
                modalbuynivariumWindow.classList.remove("active");
                setTimeout(() => {
                    modalbuynivariumWindow.style.display = "none";
                }, 500);
            }
        });
    }

    async function updateButtonState() {
        const removeFormatting = (value) => value.replace(/,/g, '');
        const checkMinAmount = (amountPay) => {
            return isNaN(amountPay) || amountPay < 0.05;
        };

        try {
            const TON_PRICE = await getTonPrice(); // Waiting to receive the price
            const amountPayTON = parseFloat(removeFormatting(inputPay.value)) || 0;

            if (termsCheckbox.checked && !checkMinAmount(amountPayTON) && TON_PRICE) {
                buttonConfirmBuy.classList.remove('disabled');
                buttonConfirmBuy.disabled = false;
                termsCheckboxchecked = true;
            } else {
                ShowAlertWindowTONprice();
                buttonConfirmBuy.classList.add('disabled');
                buttonConfirmBuy.disabled = true;
                termsCheckboxchecked = false;
            }
        } catch (error) {
            console.error("Error fetching TON price:", error);
            ShowAlertWindowTONprice();
            buttonConfirmBuy.classList.add('disabled');
            buttonConfirmBuy.disabled = true;
            termsCheckboxchecked = false;
        }
    }

    termsCheckbox.addEventListener('change', updateButtonState);

    async function updatePrices() {
        const TON_PRICE = await getTonPrice();
        const NVRM_PRICE = await fetchPrice();

        if (!NVRM_PRICE) {
            inputReceiveText.innerHTML = 'NaN';
            buttonConfirmBuy.classList.add('disabled');
            buttonConfirmBuy.disabled = true;
            return;
        }

        if (!TON_PRICE) {
            inputPayText.innerHTML = 'NaN';
            buttonConfirmBuy.classList.add('disabled');
            buttonConfirmBuy.disabled = true;
            return;
        }

        document.getElementById("nvrmprice").textContent = `$${NVRM_PRICE}`;

        const inputPay = document.getElementById("amount-pay");
        const inputReceive = document.getElementById("amount-receive");
        const calculateFromPay = (amount) => (amount > 0 ? amount * TON_PRICE : 0);
        const removeFormatting = (value) => value.replace(/,/g, '');
        const formatValue = (value) => {
            return parseFloat(value).toFixed(3);
        };

        const amountTON = parseFloat(removeFormatting(inputPay.value)) || 0;
        const amountUSDT = calculateFromPay(amountTON);
        loadTranslations(currentLang, () => {
            inputPayText.innerHTML = `${translate('you_pay')} ≈ ${amountUSDT.toFixed(2)}$`;
        });

        const updateFormattedDisplay = (input, formattedValue) => {
            input.nextElementSibling.textContent = formattedValue;
        };

        const checkMinAmount = (amountPay) => {
            const inputPayText = document.querySelector('.input-pay p');
            if (isNaN(amountPay) || amountPay < 0.05) {
                inputPayText.innerHTML = 'min: 0.05';
                return true;
            } else {
                inputPayText.innerHTML = '';
                return false;
            }
        };

        inputPay.addEventListener('input', () => {
            const amountPayTON = parseFloat(removeFormatting(inputPay.value)) || 0;

            if (checkMinAmount(amountPayTON)) {
                buttonConfirmBuy.classList.add('disabled');
                buttonConfirmBuy.disabled = true;
            } else {
                if (termsCheckboxchecked) {
                    buttonConfirmBuy.classList.remove('disabled');
                    buttonConfirmBuy.disabled = false;
                }

                const amountPayUSDT = calculateFromPay(amountPayTON);
                const amountReceiveNVRM = (amountPayUSDT / NVRM_PRICE).toFixed(0);

                inputReceive.value = amountReceiveNVRM;
                updateFormattedDisplay(inputReceive, amountReceiveNVRM);
                loadTranslations(currentLang, () => {
                    inputPayText.innerHTML = `${translate('you_pay')} ≈ ${amountPayUSDT.toFixed(2)}$`;
                });
            }
        });

        inputReceive.addEventListener('input', () => {
            const amountReceiveNVRM = parseFloat(removeFormatting(inputReceive.value)) || 0;
            const amountReceiveUSDT = amountReceiveNVRM * NVRM_PRICE;
            const amountReceiveTON = amountReceiveUSDT / TON_PRICE;

            inputPay.value = formatValue(amountReceiveTON);
            updateFormattedDisplay(inputPay, formatValue(amountReceiveTON));

            const amountPayTON = parseFloat(removeFormatting(inputPay.value)) || 0;
            if (checkMinAmount(amountPayTON)) {
                buttonConfirmBuy.classList.add('disabled');
                buttonConfirmBuy.disabled = true;
                inputPayText.innerHTML = 'min: 0.05';
            } else {
                if (termsCheckboxchecked) {
                    buttonConfirmBuy.classList.remove('disabled');
                    buttonConfirmBuy.disabled = false;
                }
                loadTranslations(currentLang, () => {
                    inputPayText.innerHTML = `${translate('you_pay')} ≈ ${amountPayUSDT.toFixed(2)}$`;
                });
            }
        });

        const defaultPayTON = 0.05;
        const amountPayUSDT = calculateFromPay(defaultPayTON);
        inputPayText.innerHTML = `You pay: ≈ ${amountPayUSDT.toFixed(2)}$`;
        const defaultPayUSDT = calculateFromPay(defaultPayTON);
        const defaultReceiveNVRM = (defaultPayUSDT / NVRM_PRICE).toFixed(0);

        inputPay.value = defaultPayTON;
        updateFormattedDisplay(inputPay, formatValue(defaultPayTON));

        inputReceive.value = defaultReceiveNVRM;
        updateFormattedDisplay(inputReceive, defaultReceiveNVRM);
    }

    buttonErrorbuynivarium.addEventListener("click", (event) => {
        event.stopPropagation();
        localStorage.setItem('statusBuyNivarium', 'default');
        modal_error_content_wallet.style.display = 'none';
        modalheader.style.display = 'flex';
        modalmessagemaincontent.style.display = 'flex';
        modalbuynivariumWindow.classList.remove("active");
        updateUIbuyNVRM();
        setTimeout(() => {
            modalbuynivariumWindow.style.display = "none";
        }, 500);
        location.reload();
    });

    buttonOKbuynivarium.addEventListener('click', (event) => {
        event.stopPropagation();
        localStorage.setItem('statusBuyNivarium', 'default');
        successMessageContainer.style.display = "none";
        modalheader.style.display = 'flex';
        modalmessagemaincontent.style.display = 'flex';
        updateUIbuyNVRM();
        modalbuynivariumWindow.classList.remove("active");
        setTimeout(() => {
            modalbuynivariumWindow.style.display = "none";
        }, 500);
        location.reload();
    });

    updatePrices();

    //-------
    //
    // Withdrawal Nivarium Wallet
    //
    //-------
    const withdrawalnivariumButton = document.getElementById('withdrawalnivariumbutton');
    const modalwithdrawalnivariumWindow = document.getElementById("modal-withdrawal-nivarium");
    const closeModalwithdrawalnivariumButton = document.getElementById("close-modal-withdrawalnivarium");
    const withdrawalnivariumButtonConfirm = document.getElementById('buttonwithdrawalconfirm');
    const withdrawalAmount = document.getElementById('withdrawal-amount');
    const inputWithdrawal = document.getElementById("amount-withdrawal");
    const buttonOKwithdrawalnivarium = document.getElementById("buttonOKwithdrawalnivarium");
    const buttonErrorWalletWithdrawal = document.getElementById("button_error_wallet_withdrawal");
    const successWithdrawal = document.getElementById("successMessageVisibleWithdrawal");
    const hederWithdrawal = document.getElementById('modal-header-withdrawal-nivarium');
    const errorWithdrawal = document.getElementById('modal_error_content_wallet_withdrawal');
    const messageMainWithdrawal = document.getElementById('modal-message-main-content-withdrawal-nivarium');
    const processingDivWithdrawal = document.getElementById('modal_processing_withdrawal');

    const MIN_BALANCE_REMAINING = 10;

    if (withdrawalnivariumButton && modalwithdrawalnivariumWindow && closeModalwithdrawalnivariumButton) {
        if (minerStatus()) {
            withdrawalnivariumButton.addEventListener("click", () => {
                ShowAlertWindow();
            });
        } else {
            withdrawalnivariumButton.addEventListener("click", (event) => {
                event.stopPropagation();
                updateUIwithdrawalNVRM();
                modalwithdrawalnivariumWindow.style.display = "flex";
                inputWithdrawal.value = "100";
                setTimeout(() => {
                    checkButtonState();
                    modalwithdrawalnivariumWindow.classList.add("active");
                }, 10);
            });
        }

        closeModalwithdrawalnivariumButton.addEventListener("click", (event) => {
            event.stopPropagation();
            modalwithdrawalnivariumWindow.classList.remove("active");
            setTimeout(() => {
                modalwithdrawalnivariumWindow.style.display = "none";
            }, 500);
        });

        window.addEventListener("click", (event) => {
            if (!successMessageContainer.style.display === "flex" && !modalwithdrawalnivariumWindow.contains(event.target)) {
                modalwithdrawalnivariumWindow.classList.remove("active");
                setTimeout(() => {
                    modalwithdrawalnivariumWindow.style.display = "none";
                }, 500);
            }
        });

        const amountWithdrawal = parseFloat(localStorage.getItem('mining_balance') || 0).toFixed(3);
        const { integerPart, fractionalPart } = formatNumberForDisplay(amountWithdrawal);
        withdrawalAmount.innerHTML = `${integerPart}<span class="fraction">.${fractionalPart}</span>`;

        const checkButtonState = () => {
            const inputAmount = parseFloat(removeFormatting(inputWithdrawal.value)) || 0;
            const maxWithdrawal = Math.max(0, amountWithdrawal - MIN_BALANCE_REMAINING);

            if (amountWithdrawal >= 100 && inputAmount >= 100 && inputAmount <= maxWithdrawal) {
                withdrawalnivariumButtonConfirm.classList.remove('disabled');
                withdrawalnivariumButtonConfirm.disabled = false;
            } else {
                withdrawalnivariumButtonConfirm.classList.add('disabled');
                withdrawalnivariumButtonConfirm.disabled = true;
            }
        };

        const removeFormatting = (value) => value.replace(/,/g, '');
        checkButtonState();

        inputWithdrawal.addEventListener('input', () => {
            checkButtonState();
        });
    }

    buttonOKwithdrawalnivarium.addEventListener("click", (event) => {
        event.stopPropagation();
        localStorage.setItem('statusWithdrawalNivarium', 'default');
        successWithdrawal.style.display = "none";
        hederWithdrawal.style.display = 'flex';
        messageMainWithdrawal.style.display = 'flex';
        localStorage.setItem('withdrawal_status', true);
        updateUIwithdrawalNVRM();
        modalwithdrawalnivariumWindow.classList.remove("active");
        setTimeout(() => {
            modalwithdrawalnivariumWindow.style.display = "none";
        }, 500);
        location.reload();
    });

    buttonErrorWalletWithdrawal.addEventListener("click", (event) => {
        event.stopPropagation();
        localStorage.setItem('statusWithdrawalNivarium', 'default');
        errorWithdrawal.style.display = 'none';
        hederWithdrawal.style.display = 'flex';
        messageMainWithdrawal.style.display = 'flex';
        successMessageContainer.style.display = 'none';
        updateUIwithdrawalNVRM();
        modalwithdrawalnivariumWindow.classList.remove("active");
        setTimeout(() => {
            modalwithdrawalnivariumWindow.style.display = "none";
        }, 500);
        location.reload();
    });

    //-------
    //
    // Airdrop Nivarium Wallet
    //
    //-------
    const airdropnivariumButton = document.getElementById('airdropnivariumbutton');
    const modalairdropnivariumWindow = document.getElementById("modal-airdrop-nivarium");
    const closeModalairdropnivariumButton = document.getElementById("close-modal-airdrop");
    const airdropAmount = document.getElementById('airdrop-amount');
    const airdropConfirmButton = document.getElementById('buttonairdropconfirm');
    const mainContentAirdrop = document.getElementById('modal-message-main-content-airdrop-nivarium');
    const hederAirdrop = document.getElementById('modal-header-airdrop-nivarium');
    const errorDivAirdrop = document.getElementById('modal_error_content_wallet_airdrop');
    const successDivAirdrop = document.getElementById('successMessageVisibleAirdrop');
    const buttonOKAirdrop = document.getElementById('buttonOKAirdrop');
    const buttonErrorAirdrop = document.getElementById('button_error_wallet_airdrop');
    const processingDivAirdrop = document.getElementById('modal_processing_airdrop');

    if (airdropnivariumButton && modalairdropnivariumWindow && closeModalairdropnivariumButton) {
        airdropnivariumButton.addEventListener("click", (event) => {
            event.stopPropagation();
            updateUIairdrop();
            modalairdropnivariumWindow.style.display = "flex";
            setTimeout(() => {
                modalairdropnivariumWindow.classList.add("active");
            }, 10);
        });

        closeModalairdropnivariumButton.addEventListener("click", (event) => {
            event.stopPropagation();
            modalairdropnivariumWindow.classList.remove("active");
            setTimeout(() => {
                modalairdropnivariumWindow.style.display = "none";
            }, 500);
        });

        window.addEventListener("click", (event) => {
            if (!successMessageContainer.style.display === "flex" && !modalairdropnivariumWindow.contains(event.target)) {
                modalairdropnivariumWindow.classList.remove("active");
                setTimeout(() => {
                    modalairdropnivariumWindow.style.display = "none";
                }, 500);
            }
        });

        const amountAirdrop = parseFloat(localStorage.getItem('airdrop_balance') || 0).toFixed(3);
        const { integerPart, fractionalPart } = formatNumberForDisplay(amountAirdrop);
        airdropAmount.innerHTML = `${integerPart}<span class="fraction">.${fractionalPart}</span>`;

        const airdrop_prcnt = localStorage.getItem('airdrop_user_prcnt');
        if (airdrop_prcnt > 0) {
            document.getElementById('airdrop_prcnt_id').textContent = `+${airdrop_prcnt} %`;
        } else {
            document.getElementById('airdrop_prcnt_id').style.display = 'none';
        }

        //---
        let allAirdropComplete = false;
        let status = {
            tgcomplete: false,
            xcomplete: false,
            sponsoredviewcomplete: false,
            buyvouchercomplete: false,
            mine1000coins: false,
            invite_friendcomplete: false,
        };

        const checks = [
            {
                key: 'tgAirdropComplete',
                statusKey: 'tgcomplete',
                circleId: 'check_tg_circle',
                iconId: 'check_tg_icon',
                condition: (value) => !!value,
            },
            {
                key: 'xAirdropComplete',
                statusKey: 'xcomplete',
                circleId: 'check_x_circle',
                iconId: 'check_x_icon',
                condition: (value) => !!value,
            },
            {
                key: 'sponsored_view_count',
                statusKey: 'sponsoredviewcomplete',
                circleId: 'check_sw_circle',
                iconId: 'check_sw_icon',
                condition: (value) => parseInt(value, 10) >= 20,
            },
            {
                key: 'check_buy100_voucher',
                statusKey: 'buyvouchercomplete',
                circleId: 'check_buy100_circle',
                iconId: 'check_buy100_icon',
                condition: (value) => !!value,
            },
            {
                key: 'mining_balance',
                statusKey: 'mine1000coins',
                circleId: 'check_mine_coins_circle',
                iconId: 'check_mine_coins_icon',
                condition: (value) => parseFloat(value) >= 1010,
            },
            {
                key: 'invite_friend_balance',
                statusKey: 'invite_friendcomplete',
                circleId: 'check_friends_count_circle',
                iconId: 'check_friends_count_icon',
                condition: (value) => parseFloat(value) >= 1,
            },
        ];

        checks.forEach(({ key, statusKey, circleId, iconId, condition }) => {
            const value = localStorage.getItem(key);
            if (condition(value)) {
                console.log(`${statusKey.toUpperCase()}:`, value);
                status[statusKey] = true;
                document.getElementById(circleId).style.display = 'none';
                document.getElementById(iconId).style.display = 'block';
            }
        });

        if (Object.values(status).every(Boolean)) {
            allAirdropComplete = true;
        }

        if (allAirdropComplete && amountAirdrop > 0) {
            airdropConfirmButton.classList.remove('disabled');
            airdropConfirmButton.disabled = false;
        }
    }

    buttonOKAirdrop.addEventListener("click", (event) => {
        event.stopPropagation();
        successDivAirdrop.style.display = "none";
        hederAirdrop.style.display = 'flex';
        mainContentAirdrop.style.display = 'flex';
        localStorage.setItem('airdrop_claim', true);
        localStorage.setItem('statusAirdropNivarium', 'default');
        updateUIairdrop();
        modalairdropnivariumWindow.classList.remove("active");
        setTimeout(() => {
            modalairdropnivariumWindow.style.display = "none";
        }, 500);
        location.reload();
    });

    buttonErrorAirdrop.addEventListener("click", (event) => {
        event.stopPropagation();
        localStorage.setItem('statusAirdropNivarium', 'default');
        errorDivAirdrop.style.display = 'none';
        hederAirdrop.style.display = 'flex';
        mainContentAirdrop.style.display = 'flex';
        updateUIairdrop();
        modalairdropnivariumWindow.classList.remove("active");
        setTimeout(() => {
            modalairdropnivariumWindow.style.display = "none";
        }, 500);
        location.reload();
    });

    //-------
    //
    // Other Functions
    //
    //-------
    const updateUI = () => {
        const sponsorpower = parseFloat(localStorage.getItem(sponsoredKey)) || 0;
        const buy100power = parseFloat(localStorage.getItem(buy100Key)) || 0;
        const buy1000power = parseFloat(localStorage.getItem(buy1000Key)) || 0;
        let sum = sponsorpower + buy100power + buy1000power;

        localStorage.setItem('calc_power', sum);

        if (localStorage.getItem('calc_power') === 0) {
            document.querySelectorAll('#calc_power').forEach(element => {
                element.textContent = `+${localStorage.getItem('calc_power')}%`;
            });
        } else {
            document.querySelectorAll('#calc_power').forEach(element => {
                element.textContent = `+${localStorage.getItem('calc_power')}%`;
            });
        }
    };

    const ShowAlertWindow = () => {
        const alertWindowModal = document.getElementById("alert-window-modal");
        alertWindowModal.style.display = "block";
        setTimeout(() => {
            alertWindowModal.style.display = "none";
        }, 3000);
    };

    const ShowAlertWindowTONprice = () => {
        const alertWindowModal = document.getElementById("alert-window-modal-ton-price");
        alertWindowModal.style.display = "block";
        setTimeout(() => {
            alertWindowModal.style.display = "none";
        }, 3000);
    };

    async function updateVoucherPrices() {
        const nivariumPrice = await fetchPrice();

        if (nivariumPrice) {
            const vaucher100Price = (nivariumPrice * 100) * discount100;
            const vaucher1000Price = (nivariumPrice * 1000) * discount1000;

            const formattedBalance100 = new Intl.NumberFormat('en-US', {
                minimumFractionDigits: 3,
                maximumFractionDigits: 3
            }).format(vaucher100Price);

            const formattedBalance1000 = new Intl.NumberFormat('en-US', {
                minimumFractionDigits: 3,
                maximumFractionDigits: 3
            }).format(vaucher1000Price);

            document.getElementById("vaucher100_price").textContent = `≈${formattedBalance100.toLocaleString()}$`;
            document.getElementById("vaucher1000_price").textContent = `≈${formattedBalance1000.toLocaleString()}$`;
            document.getElementById("vaucher100_price_boost").textContent = `≈${formattedBalance100.toLocaleString()}$`;
            document.getElementById("vaucher1000_price_boost").textContent = `≈${formattedBalance1000.toLocaleString()}$`;
        }
    }

    const checkBuy100 = () => {
        const lastClickTime = parseInt(localStorage.getItem(buy100lastClickKey), 10);
        const currentTime = Date.now();
        //---
        if (lastClickTime && (currentTime - lastClickTime) < tameDay) {
            const timeLeft = tameDay - (currentTime - lastClickTime);
            const remainingHours = timeLeft / (60 * 60 * 1000);

            buy100_button.disabled = true;
            frame_status_buy100.style.display = 'none';
            icon_status_buy100.style.display = 'block';
            //---
            buy100_button_boost.disabled = true;
            frame_status_buy100_boost.style.display = 'none';
            icon_status_buy100_boost.style.display = 'block';
        } else {
            localStorage.removeItem(buy100lastClickKey);
            localStorage.setItem(buy100Key, 0);

            buy100_button.disabled = false;
            frame_status_buy100.style.display = 'flex';
            icon_status_buy100.style.display = 'none';
            //---
            buy100_button_boost.disabled = false;
            frame_status_buy100_boost.style.display = 'flex';
            icon_status_buy100_boost.style.display = 'none';
        }
    };

    const checkBuy1000 = () => {
        const lastClickTime = parseInt(localStorage.getItem(buy1000lastClickKey), 10);
        const currentTime = Date.now();
        //---
        if (lastClickTime && (currentTime - lastClickTime) < tameDay) {
            const timeLeft = tameDay - (currentTime - lastClickTime);
            const remainingHours = timeLeft / (60 * 60 * 1000);

            buy1000_button.disabled = true;
            frame_status_buy1000.style.display = 'none';
            icon_status_buy1000.style.display = 'block';
            //---
            buy1000_button_boost.disabled = true;
            frame_status_buy1000_boost.style.display = 'none';
            icon_status_buy1000_boost.style.display = 'block';
        } else {
            localStorage.removeItem(buy1000lastClickKey);
            localStorage.setItem(buy1000Key, 0);

            buy1000_button.disabled = false;
            frame_status_buy1000.style.display = 'flex';
            icon_status_buy1000.style.display = 'none';
            //---
            buy1000_button_boost.disabled = false;
            frame_status_buy1000_boost.style.display = 'flex';
            icon_status_buy1000_boost.style.display = 'none';
        }
    };

    function updateUIbuy100() {
        const status = localStorage.getItem('statusBuy100Voucher');
        if (status === "default") {
            modal_main_content_buy100.style.display = 'flex';
            modal_header_buy100.style.display = 'flex';
            modal_error_content_buy100.style.display = 'none';
            modal_processing_content_buy100.style.display = 'none';
            modal_succes_content_buy100_boost.style.display = 'none';
            //---
            modal_main_content_buy100_boost.style.display = 'flex';
            modal_header_buy100_boost.style.display = 'flex';
            modal_error_content_buy100.style.display = 'none';
            modal_processing_content_buy100_boost.style.display = 'none';
            modal_succes_content_buy100_boost.style.display = 'none';
        } else if (status === "processing") {
            modal_processing_content_buy100.style.display = 'block';
            modal_header_processing_buy100.style.display = 'block';
            modal_main_content_buy100.style.display = 'none';
            modal_header_p_buy100.style.display = 'none';
            modal_header_p2_buy100.style.display = 'none';
            //---
            modal_processing_content_buy100_boost.style.display = 'block';
            modal_header_processing_buy100_boost.style.display = 'block';
            modal_main_content_buy100_boost.style.display = 'none';
            modal_header_p_buy100_boost.style.display = 'none';
            modal_header_p2_buy100_boost.style.display = 'none';
        } else if (status === "finished") {
            modal_succes_content_buy100.style.display = 'flex';
            modal_header_processing_buy100.style.display = 'none';
            modal_error_content_buy100.style.display = 'none';
            modal_main_content_buy100.style.display = 'none';
            modal_processing_content_buy100.style.display = 'none';
            modal_header_buy100.style.display = 'none';
            //---
            modal_succes_content_buy100_boost.style.display = 'flex';
            modal_header_processing_buy100_boost.style.display = 'none';
            modal_error_content_buy100_boost.style.display = 'none';
            modal_main_content_buy100_boost.style.display = 'none';
            modal_processing_content_buy100_boost.style.display = 'none';
            modal_header_buy100_boost.style.display = 'none';
        } else if (status === "error") {
            modal_error_content_buy100.style.display = 'flex';
            modal_main_content_buy100.style.display = 'none';
            modal_processing_content_buy100.style.display = 'none';
            modal_succes_content_buy100.style.display = 'none';
            modal_header_buy100.style.display = 'none';
            //---
            modal_error_content_buy100_boost.style.display = 'flex';
            modal_main_content_buy100_boost.style.display = 'none';
            modal_processing_content_buy100_boost.style.display = 'none';
            modal_succes_content_buy100_boost.style.display = 'none';
            modal_header_buy100_boost.style.display = 'none';
        }
    }

    function updateUIbuy1000() {
        const status = localStorage.getItem('statusBuy1000Voucher');
        if (status === "default") {
            modal_main_content_buy1000.style.display = 'flex';
            modal_header_buy1000.style.display = 'flex';
            modal_error_content_buy1000.style.display = 'none';
            modal_processing_content_buy1000.style.display = 'none';
            modal_succes_content_buy1000_boost.style.display = 'none';
            //---
            modal_main_content_buy1000_boost.style.display = 'flex';
            modal_header_buy1000_boost.style.display = 'flex';
            modal_error_content_buy1000.style.display = 'none';
            modal_processing_content_buy1000_boost.style.display = 'none';
            modal_succes_content_buy1000_boost.style.display = 'none';
        } else if (status === "processing") {
            modal_processing_content_buy1000.style.display = 'block';
            modal_header_processing_buy1000.style.display = 'block';
            modal_main_content_buy1000.style.display = 'none';
            modal_header_p_buy1000.style.display = 'none';
            modal_header_p2_buy1000.style.display = 'none';
            //---
            modal_processing_content_buy1000_boost.style.display = 'block';
            modal_header_processing_buy1000_boost.style.display = 'block';
            modal_main_content_buy1000_boost.style.display = 'none';
            modal_header_p_buy1000_boost.style.display = 'none';
            modal_header_p2_buy1000_boost.style.display = 'none';
        } else if (status === "finished") {
            modal_succes_content_buy1000.style.display = 'flex';
            modal_header_processing_buy1000.style.display = 'none';
            modal_error_content_buy1000.style.display = 'none';
            modal_main_content_buy1000.style.display = 'none';
            modal_processing_content_buy1000.style.display = 'none';
            modal_header_buy1000.style.display = 'none';
            //---
            modal_succes_content_buy1000_boost.style.display = 'flex';
            modal_header_processing_buy1000_boost.style.display = 'none';
            modal_error_content_buy1000_boost.style.display = 'none';
            modal_main_content_buy1000_boost.style.display = 'none';
            modal_processing_content_buy1000_boost.style.display = 'none';
            modal_header_buy1000_boost.style.display = 'none';
        } else if (status === "error") {
            modal_error_content_buy1000.style.display = 'flex';
            modal_main_content_buy1000.style.display = 'none';
            modal_processing_content_buy1000.style.display = 'none';
            modal_succes_content_buy1000.style.display = 'none';
            modal_header_buy1000.style.display = 'none';
            //---
            modal_error_content_buy1000_boost.style.display = 'flex';
            modal_main_content_buy1000_boost.style.display = 'none';
            modal_processing_content_buy1000_boost.style.display = 'none';
            modal_succes_content_buy1000_boost.style.display = 'none';
            modal_header_buy1000_boost.style.display = 'none';
        }
    }

    function updateUIbuyNVRM() {
        let statusBuyNivarium = localStorage.getItem('statusBuyNivarium');
        if (statusBuyNivarium === 'processing') {
            modalmessagemaincontent.style.display = 'none';
            modalheader.style.display = 'none';
            processingBuy.style.display = 'block';
        } else if (statusBuyNivarium === 'finished') {
            processingBuy.style.display = 'none';
            modalheader.style.display = 'none';
            successMessageContainer.style.display = 'flex';
        } else if (statusBuyNivarium === 'error') {
            modalmessagemaincontent.style.display = 'none';
            processingBuy.style.display = 'none';
            modalheader.style.display = 'none';
            modal_error_content_wallet.style.display = 'flex';
        } else {
            modal_error_content_wallet.style.display = 'none';
            successMessageContainer.style.display = 'none';
            modalheader.style.display = 'flex';
            modalmessagemaincontent.style.display = 'flex';
        }
    }

    function updateUIwithdrawalNVRM() {
        let statusWithdrawalNivarium = localStorage.getItem('statusWithdrawalNivarium');
        if (statusWithdrawalNivarium === 'processing') {
            hederWithdrawal.style.display = 'none';
            messageMainWithdrawal.style.display = 'none';
            processingDivWithdrawal.style.display = 'block';
        } else if (statusWithdrawalNivarium === 'finished') {
            processingDivWithdrawal.style.display = 'none';
            hederWithdrawal.style.display = 'none';
            successWithdrawal.style.display = 'flex';
        } else if (statusWithdrawalNivarium === 'error') {
            messageMainWithdrawal.style.display = 'none';
            processingDivWithdrawal.style.display = 'none';
            hederWithdrawal.style.display = 'none';
            errorWithdrawal.style.display = 'flex';
        } else {
            errorWithdrawal.style.display = 'none';
            successWithdrawal.style.display = 'none';
            hederWithdrawal.style.display = 'flex';
            messageMainWithdrawal.style.display = 'flex';
        }
    }

    function updateUIairdrop() {
        let statusAirdropNivarium = localStorage.getItem('statusAirdropNivarium');
        if (statusAirdropNivarium === 'processing') {
            mainContentAirdrop.style.display = 'none';
            hederAirdrop.style.display = 'none';
            processingDivAirdrop.style.display = 'block';
        } else if (statusAirdropNivarium === 'finished') {
            processingDivAirdrop.style.display = 'none';
            hederAirdrop.style.display = 'none';
            successDivAirdrop.style.display = 'flex';
        } else if (statusAirdropNivarium === 'error') {
            mainContentAirdrop.style.display = 'none';
            processingDivAirdrop.style.display = 'none';
            hederAirdrop.style.display = 'none';
            errorDivAirdrop.style.display = 'flex';
        } else {
            errorDivAirdrop.style.display = 'none';
            successDivAirdrop.style.display = 'none';
            hederAirdrop.style.display = 'flex';
            mainContentAirdrop.style.display = 'block';
        }
    }

    function getStatusWithTimestamp(key, maxDurationMs = 600000) {
        const rawTimestamp = localStorage.getItem(key);
    
        if (!rawTimestamp) return null;
    
        const timestamp = parseInt(rawTimestamp, 10);
        if (isNaN(timestamp)) {
            console.error(`Invalid timestamp for key "${key}":`, rawTimestamp);
            return null;
        }
    
        const elapsedTime = Date.now() - timestamp;
    
        if (elapsedTime > maxDurationMs) {
            return { status: "expired", elapsedTime };
        }
    
        return { status: "processing", elapsedTime };
    }
       
    function clearStatus(key) {
        localStorage.removeItem(key);
    }

    function checkStatusProcessing() {
        const keys = [
            'statusBuy100Voucher',
            'statusBuy1000Voucher',
            'statusBuyNivarium',
            'statusWithdrawalNivarium',
            'statusAirdropNivarium',
        ];
        const maxDurationMs = 600000;
    
        keys.forEach((key) => {
            const timestampKey = `${key}_time_stamp`; 
            const statusData = getStatusWithTimestamp(timestampKey, maxDurationMs);
    
            if (statusData) {
                const { status, elapsedTime } = statusData;
    
                if (status === 'expired') {
                    if (elapsedTime > maxDurationMs) {
                        localStorage.setItem(key, 'error');
                        clearStatus(timestampKey);
                        updateUIbyKey(key); 
                    } else {
                        localStorage.setItem(key, 'processing');
                        updateUIbyKey(key);
                    }
                } else if (status === 'error') {
                    localStorage.setItem(key, 'error');
                    clearStatus(timestampKey); 
                    updateUIbyKey(key);
                } else if (status === 'finished') {
                    localStorage.setItem(key, 'finished');
                    clearStatus(timestampKey); 
                    updateUIbyKey(key);
                } else {
                    localStorage.setItem(key, 'default');
                    clearStatus(timestampKey); 
                    updateUIbyKey(key);
                }
            } else {
                const currentStatus = localStorage.getItem(key);
                if (currentStatus !== 'default') {
                    localStorage.setItem(key, 'default');
                    updateUIbyKey(key);
                }
            }
        });
    }
    
    function updateUIbyKey(key) {
        if (key === 'statusBuy100Voucher') {
            updateUIbuy100();
        } else if (key === 'statusBuy1000Voucher') {
            updateUIbuy1000();
        } else if (key === 'statusBuyNivarium') {
            updateUIbuyNVRM();
        } else if (key === 'statusWithdrawalNivarium') {
            updateUIwithdrawalNVRM();
        } else if (key === 'statusAirdropNivarium') {
            updateUIairdrop();
        }
    }

    updatePrices();
    minerStatus();
    checkSponsorView();
    checkBuy100();
    checkBuy1000();
    updateVoucherPrices();
    updateUI();
    checkStatusProcessing();
});
//---
let minerstatuskey = 'miner_status';
let translations = {};

//---
const minerStatus = () => {
    const currentMinerStatus = localStorage.getItem(minerstatuskey);
    return currentMinerStatus === 'worked';
};

//---
async function fetchPrice() {
    try {
        const response = await fetch('/static/price.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return parseFloat(data.nivarium_price);
    } catch (error) {
        console.error("Ошибка при загрузке цены:", error);
        return null;
    }
}

//---
async function getTonPrice() {
    const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=the-open-network&vs_currencies=usd';
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Failed to fetch price');
        const data = await response.json();
        const tonPrice = data['the-open-network'].usd;
        document.getElementById('tonprice').textContent = `$${tonPrice.toFixed(2)}`;
        return data['the-open-network'].usd;
    } catch (error) {
        console.error('Error get TON price:', error);
        return null;
    }
}

//---
function formatNumberForDisplay(number) {
    const [integerPart, fractionalPart] = number.toString().split('.');
    const formattedIntegerPart = new Intl.NumberFormat('en-US').format(integerPart);
    return { integerPart: formattedIntegerPart, fractionalPart };
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



