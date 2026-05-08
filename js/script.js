// =========================
// MENU MOBILE
// =========================

function toggleMenu(){
  document.getElementById("nav")
  .classList.toggle("active");
}

// =========================
// LOADER
// =========================

window.addEventListener("load",()=>{

  const loader =
  document.getElementById("loader");

  setTimeout(()=>{

    loader.style.opacity = "0";

    setTimeout(()=>{
      loader.style.display = "none";
    },500);

  },1000);

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

const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("click",()=>{

  document.body.classList.toggle(
    "light-mode"
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