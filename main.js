console.log("Hello world!");

// GENERAL SETTINGS
// HEADER ------------------------------------------
// BRUGER MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".main-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".main-menu li").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))


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
  // !!!!!!!!!!!!!!!!! verificar
  if (isLight()) {
    toggleRootClass();
  }
  
  document.querySelector(".slider").addEventListener("click", () => {
    toggleLocalStorageItem();
    toggleRootClass();
  });
 

// FOOTER ------------------------------------------
// back to top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} 


// PAGES -------------------------------------------
//HOME / ABOUT PAGE -------------------------------------------
//IMAGENS LANDING 
const sobreImg= document.querySelectorAll('.home-imgs');

sobreImg.forEach(function(imgs) {

  // RANDOM POSITION INSIDE "IMGS-SPACE" 
  let imgsSpaceSobre = document.querySelector('.imgs-space');
  let widthSpaceSobre = imgsSpaceSobre.offsetWidth;
  let heightSpaceSobre = imgsSpaceSobre.offsetHeight;
    
  imgs.style.left= Math.random() * widthSpaceSobre + "px"; // 👈🏼 Horizontally

  imgs.style.bottom = Math.random() * heightSpaceSobre + "px" ; // 👈🏼 Vertically

  // RANDOM ROTATION
  const getRandomRotation = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

  imgs.style.transform= 'rotate(' + getRandomRotation(-10,10) + 'deg)'; //(entre -10deg e 10deg)

  // MOVMENT WITH SCROLL Y 
  document.addEventListener("scroll", (event) => {
    //console.log(window.scrollY);

    if (window.scrollY<100) {
      imgs.style.left= Math.random() * widthSpaceSobre + "px"; // 👈🏼 Horizontally

    } else {
      imgs.style.left= "-100px";
    }
  });

});

//ROTATE IMAGES (PERFIL + LOGOS) ON SCROLL
window.onscroll = function() {
  let theta = document.documentElement.scrollTop / -8000 % Math.PI;

  // foto de perfil
  document.getElementById('foto-perfil').style.transform ='rotate(' + theta + 'rad)';

  // logos
  document.getElementById('logo-1').style.transform ='rotate(' + theta + 'rad)';

  document.getElementById('logo-2').style.transform ='rotate(' + -theta + 'rad)';

  document.getElementById('logo-3').style.transform ='rotate(' + theta + 'rad)';
}

// CONTACTOS
// TEXT TYPING
let n = 0;
let o = 0;
let p = 0;
let q = 0;
let txtEmail = 'ines_sd_costa@hotmail.com';
let txtVimeo = '.com/inesxcosta';
let txtBehance = '.net/inesscosta';
let txtInstagram = '.com/inesxcostax';
let speed = 150;

function typeEmail() {
  if (n < txtEmail.length) {
    document.getElementById("txtEmail").innerHTML += txtEmail.charAt(n);
    n++;
    setTimeout(typeEmail, 150);
  }
}

function typeVimeo() {
  if (o < txtVimeo.length) {
    document.getElementById("txtVimeo").innerHTML += txtVimeo.charAt(o);
    o++;
    setTimeout(typeVimeo, 150);
  }
}

function typeBehance() {
  if (p < txtBehance.length) {
    document.getElementById("txtBehance").innerHTML += txtBehance.charAt(p);
    p++;
    setTimeout(typeBehance, 150);
  }
}

function typeInstagram() {
  if (q < txtInstagram.length) {
    document.getElementById("txtInstagram").innerHTML += txtInstagram.charAt(q);
    q++;
    setTimeout(typeInstagram, 150);
  }
}


// ILUSTRACAO -------------------------------------------
// SCROLL HORIZONTAL
let sectionIlustracao = document.querySelector("#ilustracao");

window.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    sectionIlustracao.scrollLeft += evt.deltaY; 
});