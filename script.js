let burger = true; 

var animation_burger = anime({
    targets: '.burger-menu-button',
    duration: 500,
    easing: 'easeInOutSine',
    rotate: 90,
    autoplay: false
})

var animation_burger_back = anime({
    targets: '.burger-menu-button',
    duration: 500,
    easing: 'easeInOutSine',
    rotate: 0,
    autoplay: false
})

$('.burger-menu-button').on('click', function() {
    if (burger) {
        $('.burger').css('display', 'flex');
        animation_burger.play()
    } else {
        $('.burger').css('display', 'none');
        animation_burger_back.play()
    }
    burger = !burger;
});

anime({
    targets: '.heading-main',
    opacity: 1,
    duration: 1000,
    easing: 'easeInOutSine',
    translateX: 200
})

anime({
    targets: '.paragraph-main',
    delay: 200,
    opacity: 1,
    duration: 1000,
    easing: 'easeInOutSine',
    translateX: 200
})

var animation = anime({
    targets: '.sphere',
    translateX: -300,
    duration: 200,
    easing: 'easeInOutSine',
    autoplay: false
});

var animation_low = anime({
    targets: '.sphere-low',
    delay: 200,
    translateX: -300,
    duration: 200,
    easing: 'easeInOutSine',
    autoplay: false
});

var animation_1 = anime({
    targets: '.third-info-a-part-paragraph-1',
    translateX: -300,
    duration: 1000,
    opacity: 1,
    easing: 'easeInOutSine',
    autoplay: false
});

var animation_2 = anime({
    targets: '.third-info-a-part-paragraph-2',
    delay: 200,
    translateX: -300,
    duration: 1000,
    opacity: 1,
    easing: 'easeInOutSine',
    autoplay: false
});

var animation_3 = anime({
    targets: '.third-info-a-part-paragraph-3',
    delay: 400,
    translateX: -300,
    duration: 1000,
    opacity: 1,
    easing: 'easeInOutSine',
    autoplay: false
});

function checkScroll() {
    const targetElement = document.querySelector('.sphere');
    if (!targetElement) return;
    const elementPosition = targetElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (elementPosition.top < windowHeight && elementPosition.bottom > 0) {
        animation.play();
        animation_low.play();
        window.removeEventListener('scroll', checkScroll);
    }
};

function checkScroll_1() {
    const targetElement_1 = document.querySelector('.third-info-a-part-paragraph-1');
    if (!targetElement_1) return;
    const elementPosition = targetElement_1.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (elementPosition.top < windowHeight && elementPosition.bottom > 0) {
        animation_1.play();
        animation_2.play();
        animation_3.play();
        window.removeEventListener('scroll', checkScroll_1);
    }
};

window.addEventListener('scroll', checkScroll);

checkScroll();

window.addEventListener('scroll', checkScroll_1);

checkScroll_1();


$('.information').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
});