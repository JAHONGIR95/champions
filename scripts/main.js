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
        //   spaceBetween: 20,
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
    // spaceBetween: 10,
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
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    }
  });