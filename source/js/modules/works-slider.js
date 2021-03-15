import {removeAccToggle, initAccToggle} from './accordeon';

export default function initWorksSlider() {
  $(function () {
    const prevBtnHTML = '<button class="nav-button nav-button--left"><svg><use xlink:href="#nav-left"></use></svg></button>';
    const nextBtnHTML = '<button class="nav-button nav-button--right"><svg><use xlink:href="#nav-right"></use></svg></button>';

    const $worksSlider = $('.works__container');

    $worksSlider.each(function () {
      const $nav = $(this).next();
      $(this).slick({
        infinite: true,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        arrows: true,
        appendArrows: $nav,
        prevArrow: prevBtnHTML,
        nextArrow: nextBtnHTML,
        dots: true,
        swipe: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              dots: false,
              centerMode: false,
            },
          }
        ],
      });
    });

    $('.gallery-minor')
        .on('mousedown touchstart', () => {
          $worksSlider.slick('slickSetOption', 'swipe', false);
        })
        .on('mouseup touchend', () => {
          $worksSlider.slick('slickSetOption', 'swipe', true);
        });

    $worksSlider
        .on('beforeChange', function () {
          $(this).next().find('.nav-button').addClass('nav-button--hide');
        })
        .on('afterChange', function () {
          $(this).next().find('.nav-button').removeClass('nav-button--hide');
        })
        .on('init afterChange', function () {
          removeAccToggle();
          initAccToggle();
        });
  });
}
