const fetchapiUrl = 'https://fakestoreapi.com/products';
const slider = document.querySelector('.slides');

fetch(fetchapiUrl)
  .then(response => response.json())
  .then(products => {
    products.forEach(product => {
      const slide = document.createElement('div');
      slide.classList.add('slide');
      slide.innerHTML = `<img src="${product.image}" alt="${product.title}">`;
      slider.appendChild(slide);
    });

    const slides = document.querySelectorAll('.slide');
    let index = 0;

    function nextSlide() {
      index = (index + 1) % slides.length;
      updateSlider();
    }

    function prevSlide() {
      index = (index - 1 + slides.length) % slides.length;
      updateSlider();
    }

    function updateSlider() {
      const offset = -index * slides[0].offsetWidth;
      slider.style.transform = `translateX(${offset}px)`;
    }

    setInterval(nextSlide, 1000);
  })
  .catch(er => {
    console.error('error:', er);
  });