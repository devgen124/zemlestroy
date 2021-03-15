export default function initgallerySlider() {
  const prevBtnHTML = '<button class="nav-button nav-button--blur nav-button--left"><svg><use xlink:href="#nav-left"></use></svg></button>';
  const nextBtnHTML = '<button class="nav-button nav-button--blur nav-button--right"><svg><use xlink:href="#nav-right"></use></svg></button>';
  const $majorSlider = $('.gallery__major-row');
  const $minorSlider = $('.gallery__minor-row');
  const $nav = $majorSlider.parent().find('.gallery__major-row-nav');


  $majorSlider.slick({
    arrows: true,
    appendArrows: $nav,
    prevArrow: prevBtnHTML,
    nextArrow: nextBtnHTML,
    asNavFor: '.gallery__minor-row',
    fade: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      }
    ],
  });

  $minorSlider.slick({
    arrows: false,
    slidesToShow: 6,
    asNavFor: '.gallery__major-row',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      }
    ],
  });

  // $minorSlider.on('initialized.owl.carousel', () => {
  //   $minorSlider.find('.gallery__minor-row-item').eq(0).addClass('active');
  // });

  // $majorSlider.on('changed.owl.carousel', (e) => {
  //   const current = e.item.index;
  //   $minorSlider.find('.gallery__minor-row-item').removeClass('active').eq(current).addClass('active');
  //   const onscreen = $minorSlider.find('.owl-item.active').length - 1;
  //   let start = $minorSlider.find('.owl-item.active').first().index();
  //   let end = $minorSlider.find('.owl-item.active').last().index();

  //   if (current > end) {
  //     $minorSlider.data('owl.carousel').to(current, 100, true);
  //   }
  //   if (current < start) {
  //     $minorSlider.data('owl.carousel').to(current - onscreen, 100, true);
  //   }
  // });

  // $majorSlider.on('changed.owl.carousel', (e) => {
  //   const number = e.item.index;
  //   $majorSlider.data('owl.carousel').to(number, 300, true);
  // });

  // $minorSlider.on('click', '.owl-item', function (e) {
  //   e.preventDefault();
  //   let number = $(this).index();
  //   $majorSlider.data('owl.carousel').to(number, 300, true);
  // });
}
