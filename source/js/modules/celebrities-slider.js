export default function initCelebritiesSlider() {
  $(function () {
    const prevBtnHTML = '<button class="nav-button nav-button--blur nav-button--left"><svg><use xlink:href="#nav-left"></use></svg></button>';
    const nextBtnHTML = '<button class="nav-button nav-button--blur nav-button--right"><svg><use xlink:href="#nav-right"></use></svg></button>';

    const $celebSlider = $('.celebrities__slider');
    const $nav = $celebSlider.parent().find('.celebrities__nav');
    const celebOptions = {
      infinite: true,
      dots: false,
      draggable: false,
      arrows: true,
      appendArrows: $nav,
      prevArrow: prevBtnHTML,
      nextArrow: nextBtnHTML,
      fade: true,
      asNavFor: '.celebrities-tiles',
    };
    const $tilesSlider = $('.celebrities-tiles');
    const tilesOptions = {
      dots: false,
      slidesToShow: 3,
      asNavFor: '.celebrities__slider',
      focusOnSelect: true,
    };
    $celebSlider.slick(celebOptions);
    $tilesSlider.slick(tilesOptions);
  });
}
