document.addEventListener('DOMContentLoaded', () => {
    //---------- Modal Window Invite Friend Home ----------
    const friendhomeButton = document.getElementById('friend-home');
    const modalfriendhomeWindow = document.getElementById("modal-friend-home");
    const closeModalfriendhomeButton = document.getElementById("close-modal-friend-home");

    if (friendhomeButton && modalfriendhomeWindow && closeModalfriendhomeButton) {
        friendhomeButton.addEventListener("click", (event) => {
            event.stopPropagation();
            modalfriendhomeWindow.style.display = "flex";
            setTimeout(() => {
                modalfriendhomeWindow.classList.add("active");
            }, 10);
        });

        closeModalfriendhomeButton.addEventListener("click", (event) => {
            event.stopPropagation();
            modalfriendhomeWindow.classList.remove("active");
            setTimeout(() => {
                modalfriendhomeWindow.style.display = "none";
            }, 500);
        });

        window.addEventListener("click", (event) => {
            if (!modalfriendhomeWindow.contains(event.target)) {
                modalfriendhomeWindow.classList.remove("active");
                setTimeout(() => {
                    modalfriendhomeWindow.style.display = "none";
                }, 500);
            }
        });
    }

    //---------- Modal Window JoinTG ----------
    const JoinTGButton = document.getElementById('joinTG');
    const modalTGWindow = document.getElementById("modal-TG");
    const closeModalTGButton = document.getElementById("close-modal-TG");

    if (JoinTGButton && modalTGWindow && closeModalTGButton) {
        JoinTGButton.addEventListener("click", (event) => {
            event.stopPropagation();
            modalTGWindow.style.display = "flex";
            setTimeout(() => {
                modalTGWindow.classList.add("active");
            }, 10);
        });

        closeModalTGButton.addEventListener("click", (event) => {
            event.stopPropagation();
            modalTGWindow.classList.remove("active");
            setTimeout(() => {
                modalTGWindow.style.display = "none";
            }, 500);
        });

        window.addEventListener("click", (event) => {
            if (!modalTGWindow.contains(event.target)) {
                modalTGWindow.classList.remove("active");
                setTimeout(() => {
                    modalTGWindow.style.display = "none";
                }, 500);
            }
        });
    }

    //---------- Modal Window JoinX ----------
    const JoinXButton = document.getElementById('joinX');
    const modalXWindow = document.getElementById("modal-X");
    const closeModalXButton = document.getElementById("close-modal-X");

    if (JoinXButton && modalXWindow && closeModalXButton) {
        JoinXButton.addEventListener("click", (event) => {
            event.stopPropagation();
            modalXWindow.style.display = "flex";
            setTimeout(() => {
                modalXWindow.classList.add("active");
            }, 10);
        });

        closeModalXButton.addEventListener("click", (event) => {
            event.stopPropagation();
            modalXWindow.classList.remove("active");
            setTimeout(() => {
                modalXWindow.style.display = "none";
            }, 500);
        });

        window.addEventListener("click", (event) => {
            if (!modalXWindow.contains(event.target)) {
                modalXWindow.classList.remove("active");
                setTimeout(() => {
                    modalXWindow.style.display = "none";
                }, 500);
            }
        });
    }

    //---------- Modal Window TikTok ----------
    const JoinTikTokButton = document.getElementById('joinTikTok');
    const modalTikTokWindow = document.getElementById("modal-TikTok");
    const closeModalTikTokButton = document.getElementById("close-modal-TikTok");

    if (JoinTikTokButton && modalTikTokWindow && closeModalTikTokButton) {
        JoinTikTokButton.addEventListener("click", (event) => {
            event.stopPropagation();
            modalTikTokWindow.style.display = "flex";
            setTimeout(() => {
                modalTikTokWindow.classList.add("active");
            }, 10);
        });

        closeModalTikTokButton.addEventListener("click", (event) => {
            event.stopPropagation();
            modalTikTokWindow.classList.remove("active");
            setTimeout(() => {
                modalTikTokWindow.style.display = "none";
            }, 500);
        });

        window.addEventListener("click", (event) => {
            if (!modalTikTokWindow.contains(event.target)) {
                modalTikTokWindow.classList.remove("active");
                setTimeout(() => {
                    modalTikTokWindow.style.display = "none";
                }, 500);
            }
        });
    }

    //---------- Modal Window Invite Friend Earn ----------
    const friendearnButton = document.getElementById('friend-earn');
    const modalfriendearnWindow = document.getElementById("modal-friend-earn");
    const closeModalfriendearnButton = document.getElementById("close-modal-friend-earn");

    if (friendearnButton && modalfriendearnWindow && closeModalfriendearnButton) {
        friendearnButton.addEventListener("click", (event) => {
            event.stopPropagation();
            modalfriendearnWindow.style.display = "flex";
            setTimeout(() => {
                modalfriendearnWindow.classList.add("active");
            }, 10);
        });

        closeModalfriendearnButton.addEventListener("click", (event) => {
            event.stopPropagation();
            modalfriendearnWindow.classList.remove("active");
            setTimeout(() => {
                modalfriendearnWindow.style.display = "none";
            }, 500);
        });

        window.addEventListener("click", (event) => {
            if (!modalfriendearnWindow.contains(event.target)) {
                modalfriendearnWindow.classList.remove("active");
                setTimeout(() => {
                    modalfriendearnWindow.style.display = "none";
                }, 500);
            }
        });
    }

    //--------- Modal Window Instruction ----------
    const questionImage = document.querySelector('.question');
    const modalinstructionWindow = document.getElementById("modal-instruction");
    const closeModalinstructionButton = document.getElementById("close-modal-instruction");

    if (questionImage && modalinstructionWindow && closeModalinstructionButton) {
        questionImage.addEventListener("click", (event) => {
            event.stopPropagation();
            modalinstructionWindow.style.display = "flex";
            setTimeout(() => {
                modalinstructionWindow.classList.add("active");
            }, 10);
        });

        closeModalinstructionButton.addEventListener("click", (event) => {
            event.stopPropagation();
            modalinstructionWindow.classList.remove("active");
            setTimeout(() => {
                modalinstructionWindow.style.display = "none";
            }, 500);
        });

        window.addEventListener("click", (event) => {
            if (!modalinstructionWindow.contains(event.target)) {
                modalinstructionWindow.classList.remove("active");
                setTimeout(() => {
                    modalinstructionWindow.style.display = "none";
                }, 500);
            }
        });
    }

    //--------- Modal Window Boost ----------
    const boostImage = document.querySelector('.boost');
    const modalboostWindow = document.getElementById("modal-boost");
    const closeModalboostButton = document.getElementById("close-modal-boost");

    if (boostImage && modalboostWindow && closeModalboostButton) {
        boostImage.addEventListener("click", (event) => {
            event.stopPropagation();
            modalboostWindow.style.display = "flex";
            setTimeout(() => {
                modalboostWindow.classList.add("active");
            }, 10);
        });

        closeModalboostButton.addEventListener("click", (event) => {
            event.stopPropagation();
            modalboostWindow.classList.remove("active");
            setTimeout(() => {
                modalboostWindow.style.display = "none";
            }, 500);
        });

        window.addEventListener("click", (event) => {
            if (!modalboostWindow.contains(event.target)) {
                modalboostWindow.classList.remove("active");
                setTimeout(() => {
                    modalboostWindow.style.display = "none";
                }, 500);
            }
        });
    }

    //---------- Modal Window Delete Account ----------
    const deleteButton = document.getElementById('deletebutton');
    const modaldeleteWindow = document.getElementById("modal-delete");
    const closeModaldeleteButton = document.getElementById("close-modal-delete");
    const canceldeleteAccountButton = document.getElementById("canceldeleteAccountButton");
    const deleteAccount = document.getElementById("deleteAccountButton");

    if (deleteButton && modaldeleteWindow && closeModaldeleteButton && deleteAccount) {
        deleteButton.addEventListener("click", (event) => {
            event.stopPropagation();
            modaldeleteWindow.style.display = "flex";
            setTimeout(() => {
                modaldeleteWindow.classList.add("active");
            }, 10);
        });

        deleteAccount.addEventListener("click", (event) => {
            event.stopPropagation();
            modaldeleteWindow.classList.remove("active");
            setTimeout(() => {
                modaldeleteWindow.style.display = "none";
            }, 500);
        });

        closeModaldeleteButton.addEventListener("click", (event) => {
            event.stopPropagation();
            modaldeleteWindow.classList.remove("active");
            setTimeout(() => {
                modaldeleteWindow.style.display = "none";
            }, 500);
        });

        window.addEventListener("click", (event) => {
            if (!modaldeleteWindow.contains(event.target)) {
                modaldeleteWindow.classList.remove("active");
                setTimeout(() => {
                    modaldeleteWindow.style.display = "none";
                }, 500);
            }
        });
    }
    //---------- Modal Window Terms of Use ----------
    const termsButton = document.querySelector('.terms-setting');
    const modaltermsWindow = document.getElementById("modal-terms");
    const closeModaltermsButton = document.getElementById("close-modal-terms");

    if (termsButton && modaltermsWindow && closeModaltermsButton) {
        termsButton.addEventListener("click", (event) => {
            event.stopPropagation();
            modaltermsWindow.style.display = "flex";
            setTimeout(() => {
                modaltermsWindow.classList.add("active");
            }, 10);
        });

        closeModaltermsButton.addEventListener("click", (event) => {
            event.stopPropagation();
            modaltermsWindow.classList.remove("active");
            setTimeout(() => {
                modaltermsWindow.style.display = "none";
            }, 500);
        });

        window.addEventListener("click", (event) => {
            if (!modaltermsWindow.contains(event.target)) {
                modaltermsWindow.classList.remove("active");
                setTimeout(() => {
                    modaltermsWindow.style.display = "none";
                }, 500);
            }
        });
    }

    //---------- Modal Window Policy ----------
    const policyButton = document.querySelector('.policy-setting');
    const modalpolicyWindow = document.getElementById("modal-policy");
    const closeModalpolicyButton = document.getElementById("close-modal-policy");

    if (policyButton && modalpolicyWindow && closeModalpolicyButton) {
        policyButton.addEventListener("click", (event) => {
            event.stopPropagation();
            modalpolicyWindow.style.display = "flex";
            setTimeout(() => {
                modalpolicyWindow.classList.add("active");
            }, 10);
        });

        closeModalpolicyButton.addEventListener("click", (event) => {
            event.stopPropagation();
            modalpolicyWindow.classList.remove("active");
            setTimeout(() => {
                modalpolicyWindow.style.display = "none";
            }, 500);
        });

        window.addEventListener("click", (event) => {
            if (!modalpolicyWindow.contains(event.target)) {
                modalpolicyWindow.classList.remove("active");
                setTimeout(() => {
                    modalpolicyWindow.style.display = "none";
                }, 500);
            }
        });
    }

    //---------- Modal Window Bonus ----------
    const modal_bonus = document.getElementById('modal_bonus');
    const button_bonus_ok = document.getElementById('button_bonus_ok');
    const bonus_coin = document.getElementById('bonus_coin');
    const coin_prise = document.getElementById('coin_prise');

    const bonuses = [0.1, 0.2, 1, 2, 4, 10, 100, 1, 2, 0.1, 1, 5, 8, 1, 6, 0.8, 1, 2, 3, 2.8, 1, 8, 1, 5, 20, 1, 16, 1, 0.1, 4, 1];
    const todayDate = new Date().toISOString().slice(0, 10);

    //---
    function checkDailyBonus() {
        const lastBonusDate = localStorage.getItem("lastBonusDate");

        if (lastBonusDate === todayDate) return; 
        setTimeout(() => {
            showBonusModal();
        }, 2000);
    }

    function showBonusModal() {
        modal_bonus.style.display = "flex";
        setTimeout(() => {
            modal_bonus.classList.add("active");
        }, 100);

        let dailyBonus = parseFloat(localStorage.getItem('dailyBonus')) || null;

        if (dailyBonus === null) {
            dailyBonus = bonuses[Math.floor(Math.random() * bonuses.length)];
            localStorage.setItem('dailyBonus', dailyBonus);
        }

        bonus_coin.style.display = "flex";
        coin_prise.textContent = `+${dailyBonus}`;

        button_bonus_ok.onclick = function () {
            const currentBonus = parseFloat(localStorage.getItem('daybonus')) || 0;
            const updatedBonus = currentBonus + dailyBonus;
            localStorage.setItem('daybonus', updatedBonus);
            localStorage.setItem("lastBonusDate", todayDate);
            localStorage.removeItem('dailyBonus');

            closeBonusModal();
        };
    }

    function closeBonusModal() {
        modal_bonus.classList.remove("active");
        setTimeout(() => {
            modal_bonus.style.display = "none";
        }, 500);
    }

    //---
    checkDailyBonus();
});