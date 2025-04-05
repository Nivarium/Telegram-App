document.addEventListener("DOMContentLoaded", function () {
    const colorThemeButton = document.getElementById('colorThemeButton');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const statusIconColor = document.getElementById('status-icon-color');
    const colorThemeText = document.getElementById('colorThemeText');
    const langButton = document.getElementById('langButton');
    const dropdownMenuLang = document.getElementById('dropdownMenu-lang');
    const langmenuText = document.getElementById('langmenuText');
    const statusIconLang = document.getElementById('status-icon-lang');
    const darkThemeItem = document.getElementById('darkTheme');
    const lightThemeItem = document.getElementById('lightTheme');
    const modaldeleteWindow = document.getElementById("modal-delete");

    let currentLang = localStorage.getItem('selectedLang') || 'EN';
    let themebuttonactive;
    let themebutton;

    const loadTranslations = (lang) => {
        fetch('/static/lang.json')
            .then(response => response.json())
            .then(data => {
                const translations = data[lang.toLowerCase()];
                if (translations) {
                    document.querySelectorAll('[data-lang]').forEach(element => {
                        const key = element.getAttribute('data-lang');
                        element.textContent = translations[key] || key;
                    });
                }
            })
            .catch(error => console.error('Error loading translations:', error));
    };

    //---------- Color Scheme ----------
    let currentTheme = localStorage.getItem('selectedTheme') || 'dark';

    applyTheme(currentTheme);

    function applyTheme(theme) {
        if (theme === 'light') {
            document.body.classList.add('light-theme');  
            colorThemeText.textContent = 'Light'; 
            colorThemeText.setAttribute('data-lang', 'dropdown-item-setting-lang-light'); 
        } else {
            document.body.classList.remove('light-theme');  
            colorThemeText.textContent = 'Dark'; 
            colorThemeText.setAttribute('data-lang', 'dropdown-item-setting-lang-dark'); 
        }
        loadTranslations(currentLang);
        localStorage.setItem('selectedTheme', theme);
    }

    if (currentTheme === 'dark') {
        themebuttonactive = "/static/images/setting/list_button_active.svg";
        themebutton = "/static/images/border_button.svg";
    } else {
        themebuttonactive = "/static/images/setting/list_button_active_light.svg";
        themebutton = "/static/images/border_button_light.svg";
    }

    colorThemeButton.addEventListener('click', function () {
        const isDropdownVisible = dropdownMenu.style.display === 'flex';
        if (isDropdownVisible) {
            colorThemeButton.style.backgroundImage = `url(${themebutton})`;
            dropdownMenu.style.display = 'none';          
            statusIconColor.classList.remove('rotate-180');
            colorThemeButton.classList.remove('task-active');     
        } else {
            colorThemeButton.style.backgroundImage = `url(${themebuttonactive})`;
            dropdownMenu.style.display = 'flex';
            statusIconColor.classList.add('rotate-180');
            colorThemeButton.classList.add('task-active');
        }
        //---
        langButton.style.backgroundImage = `url(${themebutton})`;
        dropdownMenuLang.style.display = 'none';
        statusIconLang.classList.remove('rotate-180');
        langButton.classList.remove('task-active');
        //---
        modaldeleteWindow.classList.remove("active");
        setTimeout(() => {
            modaldeleteWindow.style.display = "none";
        }, 500);
    });

    darkThemeItem.addEventListener('click', function () {
        document.body.classList.remove('light-theme');
        dropdownMenu.style.display = 'none';
        statusIconColor.classList.remove('rotate-180');
        colorThemeButton.classList.remove('task-active');
        applyTheme('dark');
        location.reload();
    });

    lightThemeItem.addEventListener('click', function () {
        document.body.classList.add('dark-theme');
        dropdownMenu.style.display = 'none';
        statusIconColor.classList.remove('rotate-180');
        colorThemeButton.classList.remove('task-active');
        applyTheme('light');
        location.reload();
    });

    //---------- Choose Languge ----------
    const langItems = document.querySelectorAll('.dropdown-item-lang-setting');
    langmenuText.textContent = currentLang;

    loadTranslations(currentLang);

    langButton.addEventListener('click', function () {
        const isDropdownVisible = dropdownMenuLang.style.display === 'flex';
        if (isDropdownVisible) {
            langButton.style.backgroundImage = `url(${themebutton})`;
            dropdownMenuLang.style.display = 'none';
            statusIconLang.classList.remove('rotate-180');
            langButton.classList.remove('task-active');         
        } else {
            langButton.style.backgroundImage = `url(${themebuttonactive})`;
            dropdownMenuLang.style.display = 'flex';
            statusIconLang.classList.add('rotate-180');
            langButton.classList.add('task-active');
        }
        //---
        colorThemeButton.style.backgroundImage = `url(${themebutton})`;
        dropdownMenu.style.display = 'none';          
        statusIconColor.classList.remove('rotate-180');
        colorThemeButton.classList.remove('task-active');
         //---
         modaldeleteWindow.classList.remove("active");
         setTimeout(() => {
             modaldeleteWindow.style.display = "none";
         }, 500);
    });

    langItems.forEach(item => {
        item.addEventListener('click', function () {
            const selectedLang = item.getAttribute('id').toUpperCase();
            langmenuText.textContent = selectedLang;

            dropdownMenuLang.style.display = 'none';
            statusIconLang.classList.remove('rotate-180');
            langButton.classList.remove('task-active');

            loadTranslations(selectedLang);

            localStorage.setItem('selectedLang', selectedLang);
            location.reload();
        });
    });
});
