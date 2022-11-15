//HEADER --------------------------------------
// LIGHT vs DARK MODE
function isLight() {
    return localStorage.getItem("light-mode");
  }
  
  function toggleRootClass() {
    document.querySelector(":root").classList.toggle("light");
  }
  
  function toggleLocalStorageItem() {
    if (isLight()) {
      localStorage.removeItem("light-mode");
    } else {
      localStorage.setItem("light-mode", "set");
    }
  }
  
  if (isLight()) {
    toggleRootClass();
  }
  
  document.querySelector(".slider").addEventListener("click", () => {
    toggleLocalStorageItem();
    toggleRootClass();
  });
 
 
//HOME PAGE --------------------------------------

// HOME IMAGES
const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

const homeImg= document.querySelectorAll('.home-img');


homeImg.forEach(function(imgs) {

    // RANDOM POSITION
    const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

    // como fazer random position dentro do espaço??s
    imgs.style.left= getRandom(5, 70)+'vw'; // 👈🏼 Horizontally
    imgs.style.bottom = getRandom(10, 50)+'vh'; // 👈🏼 Vertically


    // RANDOM ROTATION
    const getRandomRotation = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

    imgs.style.transform= 'rotate(' + getRandomRotation(-10,10) + 'deg)';

});


// ILUSTRACAO .................................

// SCROLL HORIZONTAL
const scrollContainer = document.querySelector("#ilustracao");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});
