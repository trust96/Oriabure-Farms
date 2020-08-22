
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