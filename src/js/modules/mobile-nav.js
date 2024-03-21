function mobileNav() {
  // Mobile nav button
  const navBtnOpen = document.querySelector('#mobile-nav-btn');
  const navBtnClose = document.querySelector('#close-mobile-nav');
  const nav = document.querySelector('.mobile-nav');
  const mobileNavFade = document.querySelector('.mobile-nav-fade')

  // Открыть мобильную навигацию

  navBtnOpen.onclick = openMobileNav;

  // Закрыть мобильную навигацию по кнопке

  navBtnClose.onclick = closeMobileNav;

  // Закрыть мобильную навигацию по оверлею

  mobileNavFade.onclick = closeMobileNav;


  function openMobileNav() {
    nav.classList.add('mobile-nav--open');
    mobileNavFade.classList.add('mobile-nav-fade--open')
    document.body.classList.add('no-scroll');
  }

  function closeMobileNav() {
    nav.classList.remove('mobile-nav--open');
    mobileNavFade.classList.remove('mobile-nav-fade--open')
    document.body.classList.remove('no-scroll');
  }
}

export default mobileNav;