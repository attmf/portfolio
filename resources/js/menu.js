let btnHamb = document.getElementById('hamburguer');
let menuLateral = document.getElementById('lateral-menu');
let navLink = document.querySelectorAll('.nav-link');
let click = false;

// document.addEventListener("click", function(e) {
//     if (!menuLateral == e.target && !btnHamb == e.target && click == true) {
//         menuLateral.classList.remove('anim');
//         menuLateral.classList.remove('open');
//         click = false;
//         console.log('oi hide');
//     }
//     if(navLink == e.target){
//         menuLateral.classList.remove('anim');
//         menuLateral.classList.remove('open');
//         click = false;
//     }
// });

for(i = 0; i < navLink.length;i++) {
    navLink[i].addEventListener('click', function(){
        menuLateral.classList.remove('anim');
        btnHamb.classList.remove('open');
        click = false;
    });
  }

btnHamb.addEventListener("click", function(e) {
    if(click == false){
        menuLateral.classList.add('anim');
        btnHamb.classList.add('open');
        click = true;
        console.log('oi show');
    }
    else{
        menuLateral.classList.remove('anim');
        btnHamb.classList.remove('open');
        click = false;
    }
});



