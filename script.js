const sideNav = document.getElementById('side-nav');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
    sideNav.style.width = '260px';
});

closeBtn.addEventListener('click', () => {
    sideNav.style.width = '0';
});


const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function goToSlide(index) {
  slides.style.transform = `translateX(-${index * 100}vw)`;
  currentIndex = index;
  updateDots();
}

function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

nextBtn.addEventListener('click', () => {
  const newIndex = (currentIndex + 1) % slideCount;
  goToSlide(newIndex);
});

prevBtn.addEventListener('click', () => {
  const newIndex = (currentIndex - 1 + slideCount) % slideCount;
  goToSlide(newIndex);
});

dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    goToSlide(idx);
  });
});

// Auto slide every 5 seconds (optional)
setInterval(() => {
  const newIndex = (currentIndex + 1) % slideCount;
  goToSlide(newIndex);
}, 6000);

// Initialize
goToSlide(0);