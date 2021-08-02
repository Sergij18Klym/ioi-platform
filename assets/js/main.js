const btnLink = document.querySelectorAll('.splide__arrow');
const p3title = document.getElementsByClassName('part3-title');
const p3img = document.getElementsByClassName('part3-img');

var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,
    focus  : 'center',
    padding: {
        left : '1.7rem',
        right: '1.7rem',
    },
    pagination: false,
    classes: {
        arrows: 'splide__arrows my-arrows',
        arrow : 'splide__arrow my-arrow',
        prev  : 'splide__arrow--prev my-prev',
        next  : 'splide__arrow--next my-next',
    },
});

splide.on( 'mounted active', function () {
    var activeSlide = document.getElementsByClassName('is-active');
    var child = activeSlide[1].children[0];
    var idpic = child.id;
    
    switch (idpic) {
        case 'elon':
            p3img[0].src = "assets/img/elon1.png";
            p3title[0].innerHTML = "Elon Musk has the most enormous social life of all human beings."
            break;
        case 'bowie':
            p3img[0].src = "assets/img/bowie1.png";
            p3title[0].innerHTML = "Starman's wondering whether there's Life On Mars?"
            break;
        case 'keanu':
            p3img[0].src = "assets/img/keanu1.png";
            p3title[0].innerHTML = "Keanu is more popular than Starman, but he's still far from Elon Musk."
            break;
    }
} );

splide.on( 'mounted move', function () {
    var w = window.outerWidth;
    var h = window.outerHeight;
    if (w < 968 || h > 768) {
        splide.options = {
            perPage: 1,
        };
    }
});

splide.mount();
