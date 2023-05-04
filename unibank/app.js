let buttons = document.querySelectorAll(".banking-options button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

let mode_button = document.querySelector(".mode-button");
let body = document.querySelector("body");
let header = document.querySelector("header")

mode_button.addEventListener("click", () => {
  mode_button.classList.toggle("dark-mode");
  body.classList.toggle("night-mode")
  
  let moon = document.querySelector(".moon");
  let sun = document.querySelector(".sun");

  if (moon.classList.contains("d-none")) {
    moon.classList.remove("d-none");
    sun.classList.add("d-none");
  } else {
    moon.classList.add("d-none");
    sun.classList.remove("d-none");
  }
 
});

let search_button = document.querySelector(".search-button");
let searching_div = document.querySelector(".searching");

search_button.addEventListener("click", () => {
  searching_div.classList.toggle("d-none");
  body.classList.toggle("overflow-hidden");
});

let close_button = document.querySelector(".close-button")

close_button.addEventListener("click", () => {
    searching_div.classList.add("d-none")
    body.classList.remove("overflow-hidden")
  });

  document.addEventListener("DOMContentLoaded", function(event) { 
    let count = 2;
    document.getElementById("radio1").checked = true;
  
    setInterval(function(){
      document.getElementById("radio" + count).checked = true;
      count++;
      if(count>5)
      {
          count=1;
      }
    }, 5000);
  });
  
  let dropdowns = document.querySelectorAll(".exchange-dropdown")
    

dropdowns.forEach(dropdown =>{
    let caret = dropdown.querySelector(".caret")
    let options = dropdown.querySelectorAll(".exchange-menu li")
    let selected = dropdown.querySelector(".selected")
    let menu = dropdown.querySelector(".exchange-menu")
    let select = dropdown.querySelector(".exchange-select")

    select.addEventListener('click', () => {
        caret.classList.toggle("caret-rotate")
        menu.classList.toggle("exchange-menu-open")
    })

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerHTML = option.innerHTML;
            select.classList.remove("select-clicked");
            caret.classList.remove("caret-rotate");
            menu.classList.remove("exchange-menu-open");

            options.forEach(option=>{
                option.classList.remove("active-currency")
            })
            option.classList.add('active-currency');
        })
    })
    document.addEventListener('click', function(e) {
        var isClickInsideMenu = menu.contains(e.target);
        var isClickInsideSelect = select.contains(e.target);
    
        if (!isClickInsideMenu && !isClickInsideSelect) {
            menu.classList.remove("exchange-menu-open");
            caret.classList.remove("caret-rotate");
        }
    });
})

let brOps = document.querySelectorAll('.br-ops');

brOps.forEach((brOp) => {
  brOp.addEventListener('click', () => {
    brOps.forEach((brOp) => {
      brOp.classList.remove('active-br-option');
      brOp.querySelectorAll('div').forEach((div) => {
        div.classList.add('d-none');
      });
    });
    brOp.classList.add('active-br-option');

    let divs = brOp.querySelectorAll('div');
    divs.forEach((div) => {
      div.classList.remove('d-none');
    });
    divs[0].classList.add('full-triangle');
    divs[1].classList.add('border-triangle');
  });
});

let branches = document.querySelectorAll('.branches');

branches.forEach((branch) => {
  branch.addEventListener('click', () => {
    branches.forEach((branch) => {
      branch.classList.remove('clicked-branch');
    });
    branch.classList.add('clicked-branch');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});


let burger = document.querySelector(".burger-menu");
let opened_menu = document.querySelector(".opened-menu");

burger.addEventListener("click", () => {
  opened_menu.classList.toggle("d-none");
});











 



