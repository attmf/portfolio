let btnHamb = document.getElementById('hamburguer');
let menuLateral = document.getElementById('lateral-menu');
let navLink = document.querySelectorAll('.nav-link');
let jobCard = document.querySelectorAll('.job-card');
let jobResume = document.getElementsByClassName('job-resume');
let bgFocus = document.getElementsByClassName('.job-resume');
let btnClose = document.getElementById('btnClose');
let click = false;
let jobCardFocus;

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

for(i = 0; i < jobCard.length;i++) {
    jobCard[i].addEventListener('click', function(){
        this.classList.add('job-card-active');
        jobCardFocus = this;
        jobResume[0].classList.add('d-block');
    });
}

btnClose.addEventListener("click", function(e) {
    jobResume[0].classList.remove('d-block');
    jobCardFocus.classList.remove('job-card-active');
});

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



