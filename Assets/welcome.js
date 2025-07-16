function typeText(elementId, text, delay = 80) {
  const element = document.getElementById(elementId);
  let index = 0;

  function type() {
    if (index <= text.length) {
      element.innerHTML = text.substring(0, index) + '<span class="typing-effect">|</span>';
      index++;
      setTimeout(type, delay);
    } else {
      element.innerHTML = text + '<span class="typing-effect fade-out">|</span>';
      setTimeout(() => {
        element.querySelector('.fade-out').style.opacity = 0;
      }, 500);
    }
  }

  type();
}

document.addEventListener("DOMContentLoaded", () => {
  typeText("hello", "Hello World! I'm");
  setTimeout(() => typeText("name", "Amanda Putri"), 2000);
  setTimeout(() => typeText("desc", "IoT, Design, Front End, UI/UX Enthusiast"), 4000);

  setTimeout(() => {
    const group = document.getElementById("buttonGroup");
    group.style.transition = "opacity 0.8s ease";
    group.style.opacity = 1;
  }, 7000);
});

const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawStaticGradient();
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function drawStaticGradient() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const gradient1 = ctx.createRadialGradient(
    0, 0, 0,
    0, 0, canvas.width * 0.5
  );
  gradient1.addColorStop(0, 'rgba(129,158,210,0.4)');
  gradient1.addColorStop(0.6, 'rgba(129,158,210,0.2)');
  gradient1.addColorStop(1, 'rgba(255,255,255,0)');

  const gradient2 = ctx.createRadialGradient(
    canvas.width, canvas.height, 0,
    canvas.width, canvas.height, canvas.width * 0.5
  );
  gradient2.addColorStop(0, 'rgba(65,131,142,0.4)');
  gradient2.addColorStop(0.6, 'rgba(65,131,142,0.2)');
  gradient2.addColorStop(1, 'rgba(255,255,255,0)');

  ctx.fillStyle = gradient1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = gradient2;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
