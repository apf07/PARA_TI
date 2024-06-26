const YES = document.querySelector('#YES');

YES.addEventListener('click', function() {
    alert('SABIA QUE DIRIAS QUE SI :3');
    alert('ME SIENTO FELIZ :)');
});

const NO = document.querySelector('#NO');

NO.addEventListener('mouseover', function() {
    const randomx = Math.random() * 80 + 10; // Para evitar que se vaya completamente fuera de la pantalla
    const randomy = Math.random() * 80 + 10; // Para evitar que se vaya completamente fuera de la pantalla

    NO.style.top = randomx + '%';
    NO.style.left = randomy + '%';
    NO.style.transform = `translate(-${randomx}%, -${randomy}%)`;
});
