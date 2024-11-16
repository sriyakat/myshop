// nav section......................................!
let list = document.querySelector('.nav_list');
let isstatus = document.querySelector('.nav_ham');

isstatus.addEventListener('click', ()=>{
  list.classList.toggle('showData')
  // console.log(showData);
  
});

//  search logo....................................................!
let search = document.querySelector(".search_icon");

 search.onclick = function(){
  document.querySelector(".search_container").classList("search_active");
 }

function toggleSearchBar() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput.classList.contains("hidden")) {
    searchInput.classList.remove("hidden");
    searchInput.focus();
  } else {
    searchInput.classList.add("hidden");
  }
}

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

// section three......................................................................!
document.querySelectorAll(".best_seller_image img").forEach((img) => {
  img.addEventListener("click", function () {
    // Create a new item for the card
    const cardItem = document.createElement("div");
    cardItem.className = "card_item";
    cardItem.innerHTML = `<img src="${this.src}" alt="Best Seller Image" />`;

    // Append item to the card
    document.getElementById("addToCard").appendChild(cardItem).style.display='none';

    // Show an alert message
    alert("Item added to card!");
  });
});

// section five..................................................!
// Select all elements with the class "hot_sale_add_item"
document.querySelectorAll('.hot_sale_add_item').forEach((button) => {
  button.addEventListener('click', function () {
    alert('Item added to cart!');
  });
});

// footer section.....................................................!

    function showThankYouMessage(event) {
        event.preventDefault(); // Prevents the form from submitting
        alert("Thank you for subscribing to our Website!");
        // reset the input box
         event.target.reset();
    }

