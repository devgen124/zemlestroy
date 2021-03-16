// import 'magnific-popup';

export default function initModalForm() {
  $(function () {
    $('.promo__button').magnificPopup({
      type: 'inline',
      showCloseBtn: false,
    });

    $('.modal__close-btn').on('click', () => {
      $.magnificPopup.close();
    });
  });
}
