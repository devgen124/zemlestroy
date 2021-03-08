export default function initMobileMenu() {
  const $btn = $('.burger');
  const $menu = $('.js-mobile-menu');
  const $blockToCover = $('.promo__main');
  const height = $blockToCover.outerHeight();
  console.log($blockToCover, height);
  $btn.on('click', (e) => {
    const $this = $(e.target);
    $this.toggleClass('burger--close');
    $menu.toggle(() => {
      $menu.animate({height}, 100);
    });
  });
}
