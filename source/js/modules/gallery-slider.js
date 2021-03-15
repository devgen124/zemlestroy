export default function initgallerySlider() {
  const $majorSlider = $('.gallery__major-row');
  const $minorSlider = $('.gallery__minor-row');

  $majorSlider.owlCarousel({
    items: 1,
    responsive: {
      768: {
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
    },
  });

  $minorSlider.owlCarousel({
    margin: 20,
    slideSpeed: 2000,
    smartSpeed: 200,
    responsive: {
      0: {
        items: 3,
        slideBy: 3,
      },
      768: {
        items: 4,
        slideBy: 4,
      },
      992: {
        items: 6,
        slideBy: 6,
      },
    },
  });

  $minorSlider.on('initialized.owl.carousel', () => {
    $minorSlider.find('.gallery__minor-row-item').eq(0).addClass('active');
  });

  $majorSlider.on('changed.owl.carousel', (e) => {
    const current = e.item.index;
    $minorSlider.find('.gallery__minor-row-item').removeClass('active').eq(current).addClass('active');
    const onscreen = $minorSlider.find('.owl-item.active').length - 1;
    let start = $minorSlider.find('.owl-item.active').first().index();
    let end = $minorSlider.find('.owl-item.active').last().index();

    if (current > end) {
      $minorSlider.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      $minorSlider.data('owl.carousel').to(current - onscreen, 100, true);
    }
  });

  $majorSlider.on('changed.owl.carousel', (e) => {
    const number = e.item.index;
    $majorSlider.data('owl.carousel').to(number, 300, true);
  });

  $minorSlider.on('click', '.owl-item', function (e) {
    e.preventDefault();
    let number = $(this).index();
    $majorSlider.data('owl.carousel').to(number, 300, true);
  });
}
