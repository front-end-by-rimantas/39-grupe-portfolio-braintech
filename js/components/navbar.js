const headerBG = document.querySelector('.header-background');
const toggleButton = document.querySelector('.toggle-button');
const headerLogo = document.querySelector('.header__logo');
const navbar = document.querySelector('.navbar');

toggleButton.addEventListener('click', () => {
  navbar.classList.toggle('navbar-show');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    headerBG.classList.add('header-background-scrolled');
    toggleButton.classList.add('toggle-button-scrolled');
    headerLogo.src = './assets/logos/main-logo-dark.png';
  } else {
    headerBG.classList.remove('header-background-scrolled');
    toggleButton.classList.remove('toggle-button-scrolled');
    headerLogo.src = './assets/logos/main-logo-light.png';
  }
});

// const fetchData = async () => {
//   const response = await fetch('./data.json');
//   const data = await response.json();
//   const { services } = data;
//   console.log(services);
// };

// fetchData();
