// nav section......................................!
let list = document.querySelector(".nav_list");
let isstatus = document.querySelector(".nav_ham");

isstatus.addEventListener("click", () => {
  list.classList.toggle("showData");
  // console.log(showData);
});

// section one..............................................................!

let slideIndex = 0;
const slides = document.querySelectorAll(".card_one");

// Function to show the current slide based on slideIndex
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = "none";
  });
  slides[index].style.display = "block";
}

// Function to move slides
function moveSlide(step) {
  slideIndex += step;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  // Loop to the end if at the beginning
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}

// Event listeners for navigation buttons
document.querySelector(".prev").addEventListener("click", () => moveSlide(-1));
document.querySelector(".next").addEventListener("click", () => moveSlide(1));

showSlide(slideIndex);