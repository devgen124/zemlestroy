import {removeAccToggle, initAccToggle} from './accordeon';

export default function initGalleryMinorSlider() {
  $(function () {
    const prevBtnHTML = '<button class="nav-button nav-button--left"><svg><use xlink:href="#nav-left"></use></svg></button>';
    const nextBtnHTML = '<button class="nav-button nav-button--right"><svg><use xlink:href="#nav-right"></use></svg></button>';

    const $galleryInner = $('.gallery-minor');

    $galleryInner.each(function () {
      const $galleryMain = $(this).find('.gallery-minor__main');
      const $galleryRow = $(this).find('.gallery-minor__row');
      const $nav = $galleryMain.next();

      $galleryMain.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              arrows: true,
              appendArrows: $nav,
              prevArrow: prevBtnHTML,
              nextArrow: nextBtnHTML,
            },
          }
        ],
      });

      $galleryRow.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        asNavFor: '.gallery-minor__main',
        arrows: false,
        focusOnSelect: true,
      });
    });
  });
}
