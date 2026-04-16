document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.cursor-glow');
    glow.style.left = e.clientX - 300 + 'px';
    glow.style.top = e.clientY - 300 + 'px';
});

// Staggered Fade-in Animation
const boxes = document.querySelectorAll('.box');
boxes.forEach((box, index) => {
    box.style.opacity = "0";
    box.style.transform = "translateY(20px)";
    setTimeout(() => {
        box.style.transition = "0.8s ease-out";
        box.style.opacity = "1";
        box.style.transform = "translateY(0)";
    }, 100 * index);
});