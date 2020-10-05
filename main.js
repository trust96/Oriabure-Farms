
/* NavBar
=============================================================== */
let btn = document.querySelector('.menu');
btn.onclick = function () {
    let nav = document.querySelector('.nav__list');
    let navLink = document.querySelectorAll('.nav__item a');
    let navItem = document.querySelectorAll('.nav__item');

    btn.classList.toggle('menu--active'); // menu hamburger

    nav.classList.toggle('nav__list--active'); // Nav sliding

        for (let i = 0; i < 4; i++) { // per animazione delle singole <a>

            if (navLink[i].style.animation) {
                navLink[i].style.animation = '';
            } else {

            navLink[i].style.animation = `navigation ease-in-out 0.5s ${i/10}s`;
            }
            console.log(i/5);
            
        }
    }

/* End__NavBar
==============================================================================*/
/* TABS
==============================================================================*/

for (let i =0; i < 3; i++ ) {
    let tabsButton = document.querySelectorAll('.tabs__button');
    let tabsContent= document.querySelectorAll('.tabs__content');
    tabsButton[i].addEventListener("click", function (){
        let tabNumber = tabsButton[i].dataset.tabFor;
        let tabToActivate = document.querySelector(`.tabs__content[data-tab-content="${tabNumber}"]`);
/* posso usare i anche nel espressione sotto perchè è un block statement. */
        for (let i=0; i<3; i++){
            tabsButton[i].classList.remove('tabs__button--active');
            tabsContent[i].classList.remove('tabs__content--active');
        }
        tabsButton[i].classList.add('tabs__button--active');
        tabToActivate.classList.add('tabs__content--active');


});
}
// to have a default click on my first button
document.querySelectorAll('.tabs__button')[1].click();

/* END TABS
================================================================================================*/

/* ACCORDION
================================================================================================= */
let accordionButton = document.querySelectorAll('.accordion__button');
for (let i=0; i<accordionButton.length; i++){
    accordionButton[i].addEventListener('click', function () {
    let accordionContent = document.querySelectorAll('.accordion__content');
    let accordionIconItem1 = document.querySelectorAll('.accordion__icon-item1');
    let accordionIconItem2 = document.querySelectorAll('.accordion__icon-item2');
    for (let i=0; i<accordionButton.length; i++){
        accordionContent[i].classList.remove('accordion__content--active');
        accordionIconItem1[i].classList.remove('accordion__icon-item1--active');
        accordionIconItem2[i].classList.remove('accordion__icon-item2--active'); 
    }
    console.log(accordionContent[i].contains('accordion__content--active'));
    accordionContent[i].classList.add('accordion__content--active');
    accordionIconItem1[i].classList.add('accordion__icon-item1--active');
    accordionIconItem2[i].classList.add('accordion__icon-item2--active'); 
    
})
}

/* END ACCORDION
==========================================================================================*/

/* CAROUSEL
==========================================================================================*/
//GOAL: at the end of the slide, we will make a clone (so it has a nice flow), and start all over.
let carousel = document.querySelector('.carousel');
let carouselContainer = document.querySelector('.carousel__container');
let carouselSlide = document.querySelectorAll('.carousel__slide');

// for my if statement, at startSlide function
const carouselSlideLength = carouselSlide.length;

// create the clone that will occupy respectivly the first and the last position of the carousel
let firstClone = carouselSlide[0].cloneNode(true);
let lastClone = carouselSlide[carouselSlide.length - 1].cloneNode(true);
carouselContainer.append(firstClone);
carouselContainer.prepend(lastClone);
firstClone.id = firstClone;
lastClone.id = lastClone; 
carouselSlide = document.querySelectorAll('.carousel__slide'); // this is the updated version of carouselSlide, so that it will have included the cloned elements
// translate the slide by one so it will be on the first image
let i=0; 
let slideWidth = carouselSlide[i].clientWidth;
carouselContainer.style.transform = `translatex(${- slideWidth}px)`;
// i=1; // cosi che lo moltiplico per slideWidth (quindi si gestisci da solo i valori del translate)
// let's create the function for the image slide
console.log(i);
const startSlide = function () {
        setInterval(() => {
             //ad ogni intervallo aumenta, cosi da aumentare il valore del translate
             i++;
            carouselContainer.style.transform = `translatex(${- slideWidth * i}px)`;
            carouselContainer.style.transition = `.7s`;
            console.log(firstClone.id);
            console.log(carouselSlide[i].id);
            console.log(i);
        }, 4000);
    }

    carouselContainer.addEventListener('transitionend', function(){
        // se gli id sono uguali, non ci sarà animazione e i = 1 (perchè i non cambi subito a 2, facciamo scorrere lo slider prima che venga eseguito la funzione)
        if (carouselSlide[i].id === firstClone.id){
        carouselContainer.style.transition = "none";
        i = 1;
        carouselContainer.style.transform = `translatex(${- slideWidth * i}px)`;
        }
    });
startSlide();
/* END CAROUSEL
============================================================================================*/
