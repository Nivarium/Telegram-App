const list = document.querySelectorAll('.list');
const menuItems = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    menuItems.forEach((el, i) => {
        const iconElement = el.querySelector('.icon div');
        if (iconElement) {
            switch (i) {
                case 0:
                    iconElement.classList.remove('icon-img-home-active');
                    iconElement.classList.add('icon-img-home');
                    break;
                case 1:
                    iconElement.classList.remove('icon-img-earn-active');
                    iconElement.classList.add('icon-img-earn');
                    break;
                case 2:
                    iconElement.classList.remove('icon-img-miner-active');
                    iconElement.classList.add('icon-img-miner');
                    break;
                case 3:
                    iconElement.classList.remove('icon-img-wallet-active');
                    iconElement.classList.add('icon-img-wallet');
                    break;
                case 4:
                    iconElement.classList.remove('icon-img-setting-active');
                    iconElement.classList.add('icon-img-setting');
                    break;
            }
        }
    });
    this.classList.add('active');
    const iconElement = this.querySelector('.icon div');
    switch (Array.from(menuItems).indexOf(this)) {
        case 0:
            iconElement.classList.remove('icon-img-home');
            iconElement.classList.add('icon-img-home-active');
            break;
        case 1:
            iconElement.classList.remove('icon-img-earn');
            iconElement.classList.add('icon-img-earn-active');
            break;
        case 2:
            iconElement.classList.remove('icon-img-miner');
            iconElement.classList.add('icon-img-miner-active');
            break;
        case 3:
            iconElement.classList.remove('icon-img-wallet');
            iconElement.classList.add('icon-img-wallet-active');
            break;
        case 4:
            iconElement.classList.remove('icon-img-setting');
            iconElement.classList.add('icon-img-setting-active');
            break;
    }
}

list.forEach((item) => item.addEventListener('click', activeLink));

