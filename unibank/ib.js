let lang_buttons = document.querySelectorAll(".ib-langs button");

lang_buttons.forEach((lang_button) => {
  lang_button.addEventListener("click", () => {
    lang_buttons.forEach((lng_btn) => lng_btn.classList.remove("selected-lang"));
    lang_button.classList.add("selected-lang");
  });
});



let dot1 = document.querySelector('.dot1');
let dot2 = document.querySelector('.dot2');
let slide1 = document.querySelector('.slide-menu1');
let slide2 = document.querySelector('.slide-menu2');

window.onload = function() {
    dot1.click();
  };

dot1.addEventListener('click', function() {
    slide1.style.transform = "translateX(80%)";
    slide1.style.visibility = "visible";
    slide1.style.opacity = "1";
    
    slide2.style.transform = "translateX(0)";
    slide2.style.visibility = "hidden";
    slide2.style.opacity = "0";
    
    dot1.style.color = '#ff6400'; 
    dot2.style.color = '#d0cdcd';
  });
  
  dot2.addEventListener('click', function() {
    slide2.style.transform = "translateX(80%)";
    slide2.style.visibility = "visible";
    slide2.style.opacity = "1";
      
    slide1.style.transform = "translateX(0)";
    slide1.style.visibility = "hidden";
    slide1.style.opacity = "0";
      
    dot2.style.color = '#ff6400'; 
    dot1.style.color = '#d0cdcd';
  });

let pin_code = document.querySelector('.pin-code');
let asan_sign = document.querySelector('.asan-sign');


pin_code.addEventListener('click', function() {

  asan_sign.classList.remove('act-div');

  pin_code.classList.add('act-div');
});

asan_sign.addEventListener('click', function() {

    pin_code.classList.remove('act-div');

    asan_sign.classList.add('act-div');
});


let inputDivs = document.querySelectorAll('.input-div');


inputDivs.forEach(inputDiv => {
  inputDiv.addEventListener('click', function() {

    inputDivs.forEach(div => {
      div.classList.remove('orange-border');
    });

    inputDiv.classList.add('orange-border');
  });
});




  

