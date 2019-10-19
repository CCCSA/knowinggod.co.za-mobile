function externalJsFunction() {
    alert("The external link works!");
}

console.log('HERE I AM');

const headerLogo = document.getElementsByClassName('header__logo')[0];
headerLogo.removeAttribute('href');
headerLogo.setAttribute('aria-hidden', 'true');

headerLogo.addEventListener('click', (event) => {
    event.preventDefault();
    externalJsFunction();
});
