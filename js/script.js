// MENU MOBILE

function toggleMenu() {
  document
    .getElementById("nav")
    .classList.toggle("active");
}


// SCROLL ANIMATION
const reveals = document.querySelectorAll(".reveal");

function revealElements() {
  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });

}

// EXECUTION
window.addEventListener("scroll", revealElements);
revealElements();


// LOADER
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 1500);
});

// DARK MODE
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

// FAQ
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// AOS
AOS.init({
  duration:1200
});

// GSAP
gsap.from(".hero-content", {
  y:100,
  opacity:0,
  duration:1.5
});

// COUNTER
const counters = document.querySelectorAll(".stat-box h3"); 
counters.forEach(counter => {
  const updateCounter = () => {
    const target =
    +counter.innerText.replace('+','');
    let count = +counter.innerText;
    const increment = target / 100;
    if(count < target){
      counter.innerText =
      `${Math.ceil(count + increment)}+`;
      setTimeout(updateCounter,20);
    }
  }

  counter.innerText = "0";
  updateCounter();
  
});