function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄';
    const size = Math.random() * 10 + 10; 
    snowflake.style.fontSize = `${size}px`;

    const screenWidth = window.innerWidth;
    const safeZone = screenWidth * 0.09;
    const positionX = Math.random() * (screenWidth - safeZone * 2) + safeZone;
    snowflake.style.left = `${positionX}px`;
    const duration = Math.random() * 15 + 20;
    snowflake.style.setProperty('--duration', `${duration}s`);

    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}

setInterval(createSnowflake, 4000);
