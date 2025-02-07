var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // slidesPerView: 3,
    spaceBetween: 27,
    centeredSlides: true,

    
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
        //   spaceBetween: 32,
        },
        1088: {
          slidesPerView: 3,
        //   spaceBetween: 30,
        },
      }
  })

//   **************************************************

var swiper = new Swiper('.swiper-container-advise', {
    // slidesPerView: 1,
    spaceBetween: 10,
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1310: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    }
  });
//   ********************************************************

var swiper = new Swiper('.swiper-container-champions', {
    // slidesPerView: 5,
    // spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    // centeredSlides: true,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
    }
  });

//   ********************* overlay *****************************

var kabinet = document.querySelector('#kabinet');
var overlay = document.querySelector('#overlay');
var close = document.querySelector('#close');
var body = document.querySelector('body');
var hamburger = document.querySelector('#hamburger');
var headerRes = document.querySelector('#header-res');

kabinet.addEventListener('click', function(){
    overlay.classList.add('opened');
    body.classList.add('unscrolling');
});

close.addEventListener('click', function(){
    overlay.classList.remove('opened');
    body.classList.remove('unscrolling');

})

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('clicked');
    headerRes.classList.toggle('down');
})

