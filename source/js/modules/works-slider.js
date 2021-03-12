import 'owl.carousel';
import {removeAccToggle, initAccToggle} from './accordeon';

export default function initWorksSlider() {
  $(function () {
    const mainOptions = {
      loop: true,
      autoWidth: true,
      navContainerClass: 'owl-nav owl-main-nav',
      navClass: [
        'nav-button nav-button--left',
        'nav-button nav-button--right'
      ],
      navText: [
        '<svg><use xlink:href="#nav-left"></use></svg>',
        '<svg><use xlink:href="#nav-right"></use></svg>'
      ],
      responsive: {
        0: {
          margin: 10,
          nav: false,
          dots: false,
        },
        768: {
          margin: 90,
          center: true,
          nav: true,
          dots: true,
        },
      },
    };

    const galleryOptions = {
      loop: true,
      margin: 10,
      dots: false,
      responsive: {
        0: {
          items: 1,
          nav: true,
          navClass: [
            'nav-button nav-button--left nav-button--blur',
            'nav-button nav-button--right nav-button--blur'
          ],
          navText: [
            '<svg><use xlink:href="#nav-left"></use></svg>',
            '<svg><use xlink:href="#nav-right"></use></svg>'
          ],
        },
        992: {
          items: 3,
          nav: false,
        },
      },
    };

    const $mainSlider = $('.works__container');
    const $gallerySlider = $('.works-gallery__row');

    $mainSlider.owlCarousel(mainOptions);

    $('.works-gallery__row').owlCarousel(galleryOptions);

    $gallerySlider.on('mousedown.owl.core touchstart.owl.core', (e) => {
      e.stopPropagation();
    });

    const $navBtns = $('.owl-main-nav').find('.nav-button');

    const showNav = () => {
      $navBtns.each((i) => {
        if ($navBtns.eq(i).hasClass('nav-button--hide')) {
          $navBtns.eq(i).removeClass('nav-button--hide');
        }
      });
    };

    const hideNav = () => {
      $navBtns.each((i) => {
        if (!$navBtns.eq(i).hasClass('nav-button--hide')) {
          $navBtns.eq(i).addClass('nav-button--hide');
        }
      });
    };

    $mainSlider.on('translate.owl.carousel', hideNav);
    $mainSlider.on('translated.owl.carousel', showNav);
    $mainSlider.on('changed.owl.carousel', () => {
      removeAccToggle();
      initAccToggle();
      // const $inactiveItems = $mainSlider.find('.owl-item:not(.active)');
      // hideAccs($inactiveItems);
    });
  });
}


