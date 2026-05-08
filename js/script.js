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