import 'owl.carousel';

export default function initCelebritiesSlider() {
  $(function () {
    const $celebSlider = $('.celebrities__slider');
    const celebOptions = {
      items: 1,
      loop: true,
      dots: false,
      mouseDrag: false,
      nav: true,
      URLhashListener: true,
      navContainer: '.celebrities__nav',
      navClass: [
        'nav-button nav-button--left nav-button--blur',
        'nav-button nav-button--right nav-button--blur'
      ],
      navText: [
        '<svg><use xlink:href="#nav-left"></use></svg>',
        '<svg><use xlink:href="#nav-right"></use></svg>'
      ],
      animateOut: 'fadeOut',
      // smartSpeed: '100',
    };
    const $tilesSlider = $('.celebrities-tiles');
    const tilesOptions = {
      loop: 1,
      dots: false,
      margin: 20,
    };
    $celebSlider.owlCarousel(celebOptions);
    $tilesSlider.owlCarousel(tilesOptions);
  });
}
