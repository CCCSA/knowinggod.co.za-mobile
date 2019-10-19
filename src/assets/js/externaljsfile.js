const headerLogo = document.getElementsByClassName('header__logo')[0];
headerLogo.removeAttribute('href');
headerLogo.setAttribute('aria-hidden', 'true');

const currentLink = document.getElementsByClassName('header__nav__item is-active')[0];
currentLink.querySelector('a').setAttribute('aria-hidden', 'true');

document.getElementsByClassName('header__nav__item__link  js-dropdown-button')[0].setAttribute('role', 'navigation');
document.getElementsByClassName('header__nav__item__link  js-dropdown-button')[0].setAttribute('aria-label', 'My Account Menu');
