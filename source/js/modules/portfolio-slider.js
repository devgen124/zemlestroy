import {removeAccToggle, initAccToggle} from './accordeon';

export default function initPortfolioSlider() {
  $(function () {
    const mainOptions = {
      mobileFirst: true,
      arrows: false,
      dots: false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 768,
          settings: 'unslick',
        }
      ],
    };

    const $portfoliosList = $('.portfolios__list');

    $portfoliosList.slick(mainOptions);

    $('.gallery-minor')
        .on('mousedown touchstart', () => {
          $portfoliosList.slick('slickSetOption', 'swipe', false);
        })
        .on('mouseup touchend', () => {
          $portfoliosList.slick('slickSetOption', 'swipe', true);
        });

    $portfoliosList
        .on('init afterChange', function () {
          removeAccToggle();
          initAccToggle();
        });
  });

}
