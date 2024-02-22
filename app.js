'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
    const rootStyles = document.documentElement.style;
    const isLightTheme = document.body.classList.toggle('light-theme');

    if (isLightTheme) {
        rootStyles.setProperty('--green', '#00FF00');
        this.textContent = "Dark";
    } else {
        rootStyles.setProperty('--green', '');
        this.textContent = "Light";
    }

    console.log('current class name: ' + (isLightTheme ? 'light-theme' : ''));
});
