
// ^ ========== menu list ============

const menuBtn = document.getElementById("menu-btn");
const menuList = document.getElementById("menu-ul")

menuBtn.addEventListener("click" , ()=>{
    if (menuList.classList.contains("hidden")) {
        menuList.classList.remove("hidden");
        menuList.classList.add("block");
    } else {
        menuList.classList.remove("block");
        menuList.classList.add("hidden");
    }
})
// ^ =========== scroll top ==============

const up = document.querySelector(".up");

document.addEventListener("scroll" , ()=>{
    let windowHieight = window.innerHeight
    let windowScrollTop = window.scrollY

    if (windowScrollTop >= windowHieight){
        up.style.opacity = "1"
    } else {
        up.style.opacity = "0"
    }
})


// ^ ============= click ane where to close the menu list ==============

window.addEventListener("click" , (e)=>{
    if(!menuBtn.contains(e.target) && !menuList.contains(e.target)) {
        if (menuList.classList.contains("block")){
            menuList.classList.add("hidden")
        }
    }
    
})


// ^ ============= typed js ================

const typed = new Typed('.food', {
    strings: ['Food'], 
    typeSpeed: 200, 
    backSpeed: 200, 
    loop: true, 
    showCursor : false
  });




  ScrollReveal().reveal('.h1-home', { 
    origin: 'left', 
    distance: '30px', 
    duration: 1000, 
    delay: 200,
    reset: true 
  });

  ScrollReveal().reveal('.p-home ', { 
    origin: 'left', 
    distance: '30px', 
    duration: 1000, 
    delay: 400,
    reset: true 
  });


  
  ScrollReveal().reveal('#home button', { 
    origin: 'left', 
    distance: '30px', 
    duration: 1000, 
    delay: 600,
    reset: true 
  });


  ScrollReveal().reveal('.info-about, .img-about', { 
    origin: 'left', 
    distance: '30px', 
    duration: 1000, 
    delay: 200,
    reset: true 
  });


  ScrollReveal().reveal('.items .item-one', { 
    origin: 'bottom', 
    distance: '35px', 
    duration: 1000, 
    interval: 200,
    reset: true 
  });


  ScrollReveal().reveal('.menu-items .menu-item ', { 
    origin: 'left', 
    distance: '30px', 
    duration: 1000, 
    interval: 200,
    reset: true 
  });



  ScrollReveal().reveal('.right-contact', { 
    origin: 'right', 
    distance: '30px', 
    duration: 1100, 
    delay: 300,
    reset: true 
  });

  ScrollReveal().reveal('.left-contact', { 
    origin: 'left', 
    distance: '30px', 
    duration: 1100, 
    delay: 300,
    reset: true 
  });


  ScrollReveal().reveal('.footer-col', { 
    origin: 'bottom', 
    distance: '30px', 
    duration: 1000, 
    interval: 200,
    reset: true 
  });
  
