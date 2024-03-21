import Swiper from 'swiper/bundle';
function swiper() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 4.5,
    spaceBetween: 12,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dinamicBullets: true,
    },
    breakpoints: {
      840: {
        spaceBetween: 24,
      },
    },
  });
}

export default swiper;
