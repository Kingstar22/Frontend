import './scss/main.scss';

// Menu
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".header").style.top = "0";
    } else {
        document.querySelector(".header").style.top = "-100px";
    }

    prevScrollpos = currentScrollPos;
}
function shareDynamicColor() {
    const share = document.querySelector('.sidepanel');

    window.addEventListener("scroll", scroll, false);

    function scroll() {
        if (window.pageYOffset > 150  && window.pageYOffset < 3700 || window.pageYOffset > 4320) {
            share.classList.add('sidepanel_dark');
        } else {
            share.classList.remove('sidepanel_dark');
        }
    }
}
shareDynamicColor();
//Burger
const hamburger = document.querySelector('.header__burger'),
      menu = document.querySelector('.header__mobile-wrapper'),
      fixedMenu = document.querySelector('body'),
      blur = document.querySelector('.header__mobile-overlay');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
        fixedMenu.classList.toggle('lock');
        blur.classList.toggle('active');
    });
    menu.addEventListener('click', () => {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
        fixedMenu.classList.remove('lock');
        blur.classList.remove('active');
    });
//leng
let language = document.querySelectorAll( '.header__language-link');
language.forEach((a) => {
    a.addEventListener("click", () => {
        const oldActive = document.querySelector(".current-lang");
        oldActive && oldActive.classList.remove("current-lang");
        a.classList.add("current-lang");
    });
});
//Slider
let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const container = document.querySelector('.frontend__slider');
const track = document.querySelector('.frontend__slider-track');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const items = document.querySelectorAll('.frontend__slider-item');
const dots = document.querySelectorAll('.frontend__slider-dot');
const itemCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});
function onActiveSlide(items, dots) {
    items.forEach((item, index) => {
        if (!item.getBoundingClientRect().left) {
            item.classList.add("active");
            dots[index].classList.add("active");
        } else {
            item.classList.remove("active");
            dots[index].classList.remove("active");
        }
    })
}
dots.forEach((item, index) => {
    item.addEventListener('click', () => {
        position = -(index * itemWidth);
        track.style.transform = `translateX(${position}px)`;
        onActiveSlide(items, dots)
    })
})
 const nextSlide = () => {
     if (position === -(itemCount - slidesToShow) * itemWidth) {
         position = 0;
     } else {
         position -= itemWidth;
     }
     setPosition();
     checkBtns();
 }
btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', () => {
    if (position === 0) {
        position = -(itemCount - slidesToShow) * itemWidth;
    } else {
        position += itemWidth;
    }
    setPosition();
    checkBtns();
});
let interval = setInterval(nextSlide, 2500);
const checkActive = document.getElementById('check');

checkActive.addEventListener('click', () => {
    if (checkActive.checked ) {
        clearInterval(interval);
    }
    else {
        interval = setInterval(nextSlide, 2500);
    }
})
const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};
const checkBtns = () => {
    onActiveSlide(items, dots);
};
checkBtns();
//Animate
function animateOnScroll() {
    const elements = document.querySelectorAll('*[data-animate]');

    for (let element of elements) {
        window.addEventListener("scroll", scrolling, false);

        function scrolling(e) {

            if (isVisible(element)) {
                element.classList.add("animate");
            }
        }

        function isVisible(el) {
            const elementBoundary = el.getBoundingClientRect();

            let top = elementBoundary.top;
            let bottom = elementBoundary.bottom;

            return ((top >= 0) && (bottom <= window.innerHeight));
        }
    }
}
animateOnScroll();
//AnimationHeaderLink
$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1500);
    }

});
