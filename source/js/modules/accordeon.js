const addClickHandler = (e) => {
  const $btn = $(e.currentTarget);
  $btn.toggleClass('acc-button--close');
  const $block = $btn.parent().find('.acc-body');
  $block.slideToggle();
};

export const initAccToggle = () => {
  const $accButtons = $('.acc-button');

  $accButtons.each((i) => {
    const $btn = $accButtons.eq(i);
    $btn.on('click', addClickHandler);
  });
};

export const removeAccToggle = () => {
  const $accButtons = $('.acc-button');
  $accButtons.each((i) => {
    const $btn = $accButtons.eq(i);
    $btn.off('click', addClickHandler);
  });
};

// export const hideAccs = ($items) => {
//   $items.each((i) => {
//     console.log($items.eq(i));
//     $items.eq(i).find('.acc-body').hide();
//   });
// };
