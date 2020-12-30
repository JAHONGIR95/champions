var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // slidesPerView: 3,
    spaceBetween: 25,
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