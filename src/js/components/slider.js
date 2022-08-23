import Swiper, { Navigation, Scrollbar } from 'swiper';

Swiper.use([Navigation, Scrollbar]);

const swiper = new Swiper('.crypto-news__content', {
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    nextEl: '.crypto-news__slider-btn--next',
    prevEl: '.crypto-news__slider-btn--prev',
  },
});
