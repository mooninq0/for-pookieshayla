const env = document.getElementById('env');
const envStage = document.getElementById('envelope-stage');
const clickText = document.getElementById('click-text');
const letterStage = document.getElementById('letter-stage');
const card = document.getElementById('card');
const btnFlip = document.getElementById('btn-flip');
const btnBack = document.getElementById('btn-back');
const hearts = document.querySelectorAll('.heart-frame');

let isOpen = false;
let emojiInterval;

window.onload = () => {
    setTimeout(() => { envStage.classList.add('visible'); }, 300);
};

function createEmoji() {
    const emojis = ['🌻', '💕', '🕯️'];
    const el = document.createElement('div');
    el.className = 'floating-emoji';
    el.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = Math.random() * 90 + '%';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 5000);
}

env.addEventListener('click', () => {
    if (!isOpen) {
        hearts.forEach((heart, index) => {
            setTimeout(() => { heart.classList.add('hidden-heart'); }, index * 80);
        });

        setTimeout(() => {
            env.classList.add('is-open');
            clickText.innerText = "Click to read the full letter!";
            emojiInterval = setInterval(createEmoji, 400);
            isOpen = true;
        }, 600);
    } else {
        clearInterval(emojiInterval);
        envStage.style.opacity = '0';
        setTimeout(() => {
            envStage.style.display = 'none';
            letterStage.style.display = 'flex';
        }, 800);
    }
});

btnFlip.addEventListener('click', () => card.classList.add('is-flipped'));
btnBack.addEventListener('click', () => card.classList.remove('is-flipped'));