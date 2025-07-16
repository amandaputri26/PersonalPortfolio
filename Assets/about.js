document.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.getElementById('about');
    const aboutTitle = document.querySelector('.about-title');
    const aboutText = document.querySelector('.about-text');

    function checkScroll() {
        const rect = aboutSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
            aboutTitle.classList.add('animate');
        } else {
            aboutTitle.classList.remove('animate');
        }
    }

    function wrapTextInSpans() {
        const paragraphs = aboutText.querySelectorAll('p');
        paragraphs.forEach(p => {
            const wrapped = p.textContent.split('').map(char => {
                if (char === ' ') return ' ';
                return `<span class="char">${char}</span>`;
            }).join('');
            p.innerHTML = wrapped;
        });
    }

    wrapTextInSpans();
    const chars = aboutText.querySelectorAll('.char');
    const totalChars = chars.length;

    function revealText() {
        const rect = aboutSection.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionHeight = rect.height;
        const scrollY = window.scrollY + window.innerHeight;

        let progress = (scrollY - sectionTop) / sectionHeight;

        progress = Math.min(Math.max(progress, 0), 1);

        const charsToShow = Math.floor(progress * totalChars);

        chars.forEach((char, i) => {
            if (i <= charsToShow) {
                char.classList.add('revealed');
            } else {
                char.classList.remove('revealed');
            }
        });
    }

    window.addEventListener('scroll', () => {
        checkScroll();
        revealText();
    });

    checkScroll();
    revealText();
});

const aboutImage = document.querySelector('.about-image');
const frames = [2, -2.5];   
const interval = 700;     
let currentFrame = 0;

function rotateImage() {
  aboutImage.style.transform = `rotate(${frames[currentFrame]}deg)`;
  currentFrame = (currentFrame + 1) % frames.length;
}

setInterval(rotateImage, interval);



