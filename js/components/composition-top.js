// function slider (selector, data, childRenderer) {
//   const DOM = document.querySelector(selector);
//   let HTML = '';
//   for (const item of data) {
//       HTML += childRenderer(item);
//   }
//   DOM.innerHTML = HTML;
// }

// function logo() {
//   return 'LOGO';
// }

// function testimonial() {
//   return 'TESTIMONIAL';
// }

// slider('#a', [], logo)
// slider('#b', [], testimonial)

const imageList = [
  './assets/companies/1.png',
  './assets/companies/2.png',
  './assets/companies/3.png',
  './assets/companies/4.png',
  './assets/companies/5.png',
  './assets/companies/6.png',
  './assets/companies/7.png',
  './assets/companies/8.png',
];

function slider(selector, data, childRender) {
  const sliderContainer = document.querySelector(`.${selector}`);
  const composition = sliderContainer.closest('.composition');

  composition.addEventListener('mousedown', () => {
    composition.style.cursor = 'grabbing';
  });

  composition.addEventListener('mouseup', () => {
    composition.style.cursor = 'grab';
  });

  for (const imgSrc of data) {
    let html = `
          <div class="composition__slide">
            <img src=${imgSrc} alt="company" />
          </div>
    `;

    sliderContainer.innerHTML += html;
  }
}

slider('composition__slider', imageList);
