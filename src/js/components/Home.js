import { templates } from '../settings.js';

class Home {
  constructor(element) {
    const thisHome = this;

    thisHome.render(element);
    thisHome.initCarousel();
  }

  render(element) {
    const thisHome = this;

    const generatedHTML = templates.homePageWidget();

    thisHome.dom = [];
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
  }

  initCarousel() {
    const elem = document.querySelector('.carousel');
    const flkty = new Flickity(elem, {
      cellAlign: 'left',
      contain: true,
      autoPlay: 3000,
      imagesLoaded: true,
      prevNextButtons: false,
    });
  }
}

export default Home;
