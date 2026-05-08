// MENU MOBILE
function toggleMenu() {
  document.getElementById('nav').classList.toggle('active');
}

// ANIMATION AU SCROLL
const reveals = document.querySelectorAll('.card, .stat-box, .testimonial-card');

window.addEventListener('scroll', () => {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
      el.classList.add('active');
      el.classList.add('reveal');
    }
  });
});