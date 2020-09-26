
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
document.querySelector('.tabs__button').click();

/* END TABS
================================================================================================*/

/* ACCORDION
================================================================================================= */
for (let i=0; i<2; i++){
    let accordionButton = document.querySelectorAll('.accordion__button')
accordionButton[i].addEventListener('click', function () {
    let accordionContent = document.querySelectorAll('.accordion__content');
    accordionContent[i].classList.toggle('accordion__content--active');
    let accordionIconItem1 = document.querySelectorAll('.accordion__icon-item1');
    let accordionIconItem2 = document.querySelectorAll('.accordion__icon-item2');
    accordionIconItem1[i].classList.toggle('accordion__icon-item1--active');
    accordionIconItem2[i].classList.toggle('accordion__icon-item2--active');
    console.log(accordionIcon);
 
})
}