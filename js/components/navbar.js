const header = document.querySelector('.header');
const toggleButton = document.querySelector('.toggle-button');
const navbarList = document.querySelector('.navbar__list');

toggleButton.addEventListener('click', () => {
  navbarList.classList.toggle('navbar__list-show');
});

// window.addEventListener('scroll', () => {
//   console.log(window.screenY, typeof window.screenY);
//   if (window.screenY > 20) {
//     header.classList.add('header-scroll');
//     toggleButton.classList.add('toggle-button-scroll');
//   } else {
//     header.classList.remove('header-scroll');
//     toggleButton.classList.remove('toggle-button-scroll');
//   }
// });
