export default function initAccToggle() {
  const $accButtons = $('.grades-card__toggle');
  $accButtons.each(function () {
    const $btn = $(this);
    const $block = $btn.next();
    $btn.on('click', () => {
      $btn.toggleClass('grades-card__toggle--close');
      $block.slideToggle();
    });
  });
}
