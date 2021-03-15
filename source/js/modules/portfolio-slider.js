// import {removeAccToggle, initAccToggle} from './accordeon';

// export default function initPortfolioSlider() {
//   $(function () {
//     const mainOptions = {

//       responsive: {
//         0: {
//           margin: 10,
//           nav: false,
//           dots: false,
//           autoWidth: true,
//         },
//         768: {
//           mouseDrag: false,
//         },
//       },
//     };

//     // const galleryOptions = {
//     //   loop: true,
//     //   margin: 10,
//     //   dots: false,
//     //   responsive: {
//     //     0: {
//     //       items: 1,
//     //       nav: true,
//     //       navClass: [
//     //         'nav-button nav-button--left nav-button--blur',
//     //         'nav-button nav-button--right nav-button--blur'
//     //       ],
//     //       navText: [
//     //         '<svg><use xlink:href="#nav-left"></use></svg>',
//     //         '<svg><use xlink:href="#nav-right"></use></svg>'
//     //       ],
//     //     },
//     //     992: {
//     //       items: 3,
//     //       nav: false,
//     //     },
//     //   },
//     // };

//     function postsCarousel() {
//       const checkWidth = $(window).width();
//       const $portfolioSlider = $('.portfolios__list');
//       if (checkWidth > 767) {
//         if (typeof $portfolioSlider.data('owl.carousel') !== 'undefined') {
//           $portfolioSlider.data('owl.carousel').destroy();
//         }
//         $portfolioSlider.removeClass('owl-carousel');
//       } else if (checkWidth < 768) {
//         $portfolioSlider.addClass('owl-carousel');
//         $portfolioSlider.owlCarousel(mainOptions);
//       }
//     }

//     postsCarousel();
//     // $(window).on('resize', postsCarousel);
//   });

// }
