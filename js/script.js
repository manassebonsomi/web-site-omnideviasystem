// =========================
// MENU MOBILE
// =========================

function toggleMenu(btn) {
  const nav = document.getElementById("nav");
  const icon = btn.querySelector("i");

  nav.classList.toggle("active");

  // BASCULE ICÔNE
  if (nav.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
}

// =========================
// LOADER
// =========================

/* window.addEventListener("load",()=>{

  const loader =
  document.getElementById("loader");

  setTimeout(()=>{

    loader.style.opacity = "0";

    setTimeout(()=>{
      loader.style.display = "none";
    },500);

  },1000);

}); */

/* =========================================
   PREMIUM PRELOADER
========================================= */

const dynamicText = document.getElementById("dynamic-text");

const loadingTexts = [
  "Initialisation...",
  "Chargement des modules...",
  "Connexion sécurisée...",
  "Préparation de l’interface...",
  "Bienvenue chez OMNI DEV SYSTEM"
];

let textIndex = 0;

const textInterval = setInterval(() => {

  textIndex++;

  if(textIndex < loadingTexts.length){

    dynamicText.textContent =
      loadingTexts[textIndex];

  }

}, 700);

/* HIDE LOADER */

window.addEventListener("load", () => {

  setTimeout(() => {

    document.body.classList.add("loaded");

    clearInterval(textInterval);

  }, 4000);

});

// =========================
// REVEAL SCROLL
// =========================

function revealSections(){

  const reveals =
  document.querySelectorAll(".reveal");

  reveals.forEach(section=>{

    const windowHeight =
    window.innerHeight;

    const revealTop =
    section.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){
      section.classList.add("active");
    }

  });

}

window.addEventListener(
  "scroll",
  revealSections
);

revealSections();

// =========================
// FAQ
// =========================

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

  item.addEventListener("click",()=>{

    item.classList.toggle("active");

  });

});

// =========================
// DARK MODE
// =========================

// =========================
// ULTRA THEME SYSTEM
// =========================

const themeToggle =
document.getElementById("themeToggle");

const themeIcon =
themeToggle.querySelector("i");

/* =========================
   APPLY THEME
========================= */

function applyTheme(theme){

  if(theme === "light"){

    document.body.classList.add(
      "light-mode"
    );

    themeIcon.className =
    "fa-solid fa-sun";

  }

  else{

    document.body.classList.remove(
      "light-mode"
    );

    themeIcon.className =
    "fa-solid fa-moon";

  }

}

/* =========================
   SYSTEM DETECTION
========================= */

const savedTheme =
localStorage.getItem("theme");

if(savedTheme){

  applyTheme(savedTheme);

}

else{

  const prefersLight =
  window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;

  applyTheme(
    prefersLight ? "light" : "dark"
  );

}

/* =========================
   TOGGLE
========================= */

themeToggle.addEventListener(
  "click",
  ()=>{

    const isLight =
    document.body.classList.contains(
      "light-mode"
    );

    const newTheme =
    isLight ? "dark" : "light";

    applyTheme(newTheme);

    localStorage.setItem(
      "theme",
      newTheme
    );

});

// =========================
// CAROUSEL
// =========================

document.addEventListener(
  "DOMContentLoaded",
  ()=>{

    const slides =
    document.querySelectorAll(
      ".carousel-slide"
    );

    const indicators =
    document.querySelectorAll(
      ".indicator"
    );

    const nextBtn =
    document.querySelector(".next");

    const prevBtn =
    document.querySelector(".prev");

    let currentSlide = 0;

    function showSlide(index){

      slides.forEach(slide=>{
        slide.classList.remove("active");
      });

      indicators.forEach(indicator=>{
        indicator.classList.remove("active");
      });

      slides[index].classList.add("active");

      indicators[index].classList.add("active");

    }

    function nextSlide(){

      currentSlide++;

      if(currentSlide >= slides.length){
        currentSlide = 0;
      }

      showSlide(currentSlide);

    }

    function prevSlide(){

      currentSlide--;

      if(currentSlide < 0){
        currentSlide =
        slides.length - 1;
      }

      showSlide(currentSlide);

    }

    // BUTTONS

    if(nextBtn){

      nextBtn.addEventListener(
        "click",
        nextSlide
      );

    }

    if(prevBtn){

      prevBtn.addEventListener(
        "click",
        prevSlide
      );

    }

    // INDICATORS

    indicators.forEach(
      (indicator,index)=>{

      indicator.addEventListener(
        "click",
        ()=>{

          currentSlide = index;

          showSlide(currentSlide);

        });

    });

    // AUTO SLIDE

    setInterval(()=>{
      nextSlide();
    },5000);

});

// =========================
// PARTICLES BACKGROUND
// =========================

tsParticles.load("particles-bg", {

  fullScreen:{
    enable:false
  },

  background:{
    color:"transparent"
  },

  fpsLimit:60,

  particles:{

    number:{
      value:70,
      density:{
        enable:true,
        area:800
      }
    },

    color:{
      value:"#60a5fa"
    },

    shape:{
      type:"circle"
    },

    opacity:{
      value:0.3
    },

    size:{
      value:{min:1,max:4}
    },

    links:{
      enable:true,
      distance:150,
      color:"#2563eb",
      opacity:0.2,
      width:1
    },

    move:{
      enable:true,
      speed:1,
      direction:"none",
      random:false,
      straight:false,
      outModes:{
        default:"bounce"
      }
    }

  },

  interactivity:{

    events:{

      onHover:{
        enable:true,
        mode:"grab"
      },

      onClick:{
        enable:true,
        mode:"push"
      },

      resize:true

    },

    modes:{

      grab:{
        distance:180,

        links:{
          opacity:0.5
        }
      },

      push:{
        quantity:4
      }

    }

  },

  detectRetina:true

});

// =========================
// MOUSE GLOW EFFECT
// =========================

const glow =
document.querySelector(".mouse-glow");

document.addEventListener(
  "mousemove",
  (e)=>{

    glow.style.left =
    e.clientX + "px";

    glow.style.top =
    e.clientY + "px";

});

// =========================
// MOBILE MEGA MENU
// =========================

document.addEventListener(
  "DOMContentLoaded",
  ()=>{

    const megaMenu =
    document.querySelector(
      ".mega-menu-container"
    );

    const megaLink =
    document.querySelector(
      ".mega-link"
    );

    if(megaLink){

      megaLink.addEventListener(
        "click",
        (e)=>{

          // MOBILE ONLY
          if(window.innerWidth <= 950){

            e.preventDefault();

            megaMenu.classList.toggle(
              "active"
            );

          }

        }
      );

    }

});

/* =========================
   ANIMATED COUNTERS
========================= */

const counters = document.querySelectorAll(".counter");

const startCounters = () => {

  counters.forEach(counter => {

    const target = +counter.getAttribute("data-target");

    let count = 0;

    const speed = target / 120;

    const updateCounter = () => {

      count += speed;

      if(count < target){

        counter.innerText = Math.ceil(count);

        requestAnimationFrame(updateCounter);

      }else{

        // AJOUT DU +
        if(target === 95){

          counter.innerText = target + "%";

        }else{

          counter.innerText = target + "+";
        }

      }

    };

    updateCounter();

  });

};

/* =========================
   START WHEN SECTION VISIBLE
========================= */

const statsSection = document.querySelector(".stats");

let started = false;

window.addEventListener("scroll", () => {

  const sectionTop = statsSection.offsetTop - 400;

  if(window.scrollY > sectionTop && !started){

    startCounters();

    started = true;
  }

});

/* =========================
   VIDEO MODAL
========================= */

const videoModal = document.getElementById("videoModal");
const openVideo = document.getElementById("openVideo");
const closeVideo = document.getElementById("closeVideo");
const companyVideo = document.getElementById("companyVideo");

/* OPEN */

openVideo.addEventListener("click", () => {

  videoModal.classList.add("active");

  companyVideo.play();

});

/* CLOSE */

closeVideo.addEventListener("click", () => {

  videoModal.classList.remove("active");

  companyVideo.pause();

});

/* CLOSE OUTSIDE */

videoModal.addEventListener("click", (e) => {

  if(e.target === videoModal){

    videoModal.classList.remove("active");

    companyVideo.pause();

  }

});