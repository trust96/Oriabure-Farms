
/* NavBar
=============================================================== */

let btn = document.querySelector('.hamburger-content');
btn.onclick = function () {
    let nav = document.querySelector('.nav-content');
    let navLink = document.querySelectorAll('.nav-item a');
    let navItem = document.querySelectorAll('.nav-item');

    btn.classList.toggle('hamburger-content--active'); // menu hamburger

    nav.classList.toggle('nav-content--active'); // Nav sliding

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