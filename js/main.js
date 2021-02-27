$(document).ready(function(){
  if ($('.block__our--partners')) {
    $('.block__our--partners').slick({
      autoplay: true,
      cssEase: 'linear',
      autoplaySpeed: 0,
      speed: 8000,
      variableWidth: true,
      arrows: false,
    });
  }
  if ($('.block__our--clients')) {
    $('.block__our--clients').slick({
      rtl: true,
      autoplay: true,
      cssEase: 'linear',
      autoplaySpeed: 0,
      speed: 8000,
      variableWidth: true,
      arrows: false,
    });
  }
  if ($('.block__mails--wrapper')) {
    $('.block__mails--wrapper').slick({
      autoplay: true,
      infinite: true,
      cssEase: 'linear',
      autoplaySpeed: 0,
      speed: 9000,
      variableWidth: true,
      pauseOnHover: true,
      arrows: true,
      prevArrow: $('.arrow-right'),
      nextArrow: $('.arrow-left'),
    });
  }

  $('.block__main-slider--inner').slick({
    centerMode: true,
    centerPadding: '205px',
    slidesToShow: 1,
    arrows: true,
    dots: true,
    prevArrow: $('.block__main-slider--arrow.prev'),
    nextArrow: $('.block__main-slider--arrow.next'),
    appendDots: $('.block__main-slider--dots'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '180px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 1
        }
      }
    ]
  });
  // $('.block__services--slider-wrap').slick({
  //   arrows: false,
  //   slidesToShow: 1,
  //   dots: true,
  //   speed: 2000,
  //   infinite: false,
  //   appendDots: $('.block__services--slider-dots'),
  // })
  // Страница "Сайты"
  // $('.sites__process--slider-inner').slick({
  //   arrows: false,
  //   slidesToShow: 1,
  //   dots: true,
  //   speed: 2000,
  //   infinite: false,
  //   appendDots: $('.sites__process--dots'),
  // });
  $('.sites__examples--slider').slick({
    arrows: false,
    centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    variableWidth: true,
    infinite: true,
  });
  //Страница "Лидогенерация (внутренняя)"
  $('.block__reviews--slider').slick({
    arrows: true,
    slidesToShow: 3,
    speed: 2000,
    slidesToScroll: 3,
    infinite: true,
    variableWidth: true,
    prevArrow: $('.block__main-slider--arrow.prev'),
    nextArrow: $('.block__main-slider--arrow.next'),
    appendDots: $('.block__main-slider--dots'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  });
  //Страница "Переводы"
  $('.tarifs .row').slick({
    slidesToShow:4,
    infinite: false,
    variableWidth: true,
    dots: false,
    arrows: false,
    speed: 2000,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      }
    }]
  })
});
sal();

//Слайдер "Как работает"
// инициализируется при при полной прокуртке блока
if ($('.block__our--clients-partners')) {
  const sliderHowWorksScroller = scrollama();
  sliderHowWorksScroller
    .setup({
      step: '.block__our--clients-partners',
      offset: 1,
    })
    .onStepEnter( (response) => {
      const howWorksSlider = $('.block__how-works--wrapper');
      howWorksSlider.slick({
        adaptiveHeight: true,
        fade: false,
        infinite: false,
        swipeToSlide: true,
        variableWidth: true,
        arrows: true,
        centerMode: true,
        nextArrow: $('.arrow-slide-next'),
        prevArrow: false,
      })
      // let scrollCount = null;
      // let scroll= null;
      // let currentSlider = 1;
      // // let sliderWrapper = $('.block__how-works--wrapper');
      // $('.block__how-works').on('wheel', scrollHandler);
      // function scrollHandler(e) {
      //   // console.log(currentSlider);
      //   // if (currentSlider > 4 && e.originalEvent.deltaY > 0) {
      //   //   return;
      //   // } else if ( currentSlider < 1 && e.originalEvent.deltaY < 0) {
      //   //   return;
      //   // }
      //   e.preventDefault();
      //   // for Mac
      //   clearTimeout(scroll);
      //   scroll = setTimeout(function(){scrollCount=0;}, 200);
      //   if(scrollCount) return 0;
      //   scrollCount=1;
      //   if (e.originalEvent.deltaY < 0) {
      //     howWorksSlider.slick('slickPrev');
      //     currentSlider--;
      //   } else {
      //     howWorksSlider.slick('slickNext');
      //     currentSlider++;
      //   }
      // };

    })
}


// Анимация при скролее для блока "Наши партнеры.." и послденего экрана
if ($('animation')) {
  const scroller = scrollama();
  const mainContact = document.querySelector('.block__main-contact--bg')
  scroller
    .setup({
      step: ".animation",
      offset: 1,
      progress: true,
    })
    .onStepEnter((response) => {
      if(response.index === 2 ) {
        response.element.style.backgroundImage = `url(./img/bgp.png)`;
      } else if (response.index === 0 || response.index === 1 ) {
        response.element.classList.add('_active');
      }
    })
    .onStepProgress((response) => {
      let scroll = response.progress / 10;
      if (response.index === 2 ) {
        mainContact.style.transform = `translate3d(0px, 0px, 1px) matrix(${1 + scroll}, 0, 0, ${1 + scroll}, 0, 0)`;
      }
    });
}


// Анимация блока "Что вы получите бесплатно"
if ($('block__how-works')) {
  const listFeaturesScroller = scrollama();
  const listFeatures = document.querySelector('.list__features');
  listFeaturesScroller
    .setup({
      step: '.block__how-works',
      offset: 1,
      progress: true,
    })
    .onStepProgress( (response) => {
      let scroll = response.progress * 300;
      if (response) {
        listFeatures.style.transform = `translateY(-${scroll}px)`;
      }
    });
}


