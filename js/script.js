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