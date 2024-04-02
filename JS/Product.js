class Feature {
  title;
  items;
}
class CarouselChart {
  #slideIndex;
  #slides = [];
  #slideWidth;
  #carouselSlide;
  #sliding;
  constructor()
  {
    this.#slideIndex = 0;
    this.#sliding = false;
  }
  nextSlide() {
    if (this.#sliding) return;
    this.#sliding = true;
    this.#slideIndex++;
    if (this.#slideIndex >= this.#slides.length) {
      this.#slideIndex = 0;
    }
    this.#carouselSlide.style.transform = 'translateX(-' + (this.#slideWidth * this.#slideIndex) + 'px)';
    this.#sliding = false;
  }

  prevSlide() {
    if (this.#sliding) return;
    this.#sliding = true;
    this.#slideIndex--;
    if (this.#slideIndex < 0) {
      this.#slideIndex = this.#slides.length - 1;
    }
    this.#carouselSlide.style.transform = 'translateX(-' + (this.#slideWidth * this.#slideIndex) + 'px)';
    this.#sliding = false;
  }

  create(imgPaths) {
    let carouselContainer = document.createElement("div");
    carouselContainer.style.position = "relative";
    carouselContainer.style.width = "30%";
    carouselContainer.style.height = "60%";
    carouselContainer.style.overflow = "hidden";

    this.#carouselSlide = document.createElement("div");
    this.#carouselSlide.style.display = "flex";
    this.#carouselSlide.style.transition = "transform 0.5s ease-in-out";
    carouselContainer.appendChild(this.#carouselSlide);

    for (let i = 0; i < imgPaths.length; i++) {
      const imgPath = imgPaths[i];
      let slide = document.createElement("img");
      slide.style.width = "100%";
      slide.style.flexShrink = "0";
      slide.src = imgPath;
      this.#carouselSlide.appendChild(slide);
      this.#slides.push(slide);
    }
    setTimeout(() => {  
      if (this.#slides.length > 0) {  
        this.#slideWidth = this.#slides[0].clientWidth;   
      }  
    }, 0);


    let thumbnailContainer = document.createElement("div");
    thumbnailContainer.style.display = "flex";
    thumbnailContainer.style.justifyContent = "center";
    thumbnailContainer.style.marginTop = "10px";
    carouselContainer.appendChild(thumbnailContainer);

    for (let i = 0; i < imgPaths.length; i++) {
      const imgPath = imgPaths[i];
      let thumbnail = document.createElement("img");
      thumbnail.style.width = "10%";
      thumbnail.style.height = "5%";
      thumbnail.style.margin = "0 5px";
      thumbnail.style.cursor = "pointer";
      thumbnail.setAttribute('data-slide-index', i);
      thumbnail.src = imgPath;
      thumbnail.addEventListener('click', () => {
        let slideIndex = parseInt(thumbnail.getAttribute('data-slide-index'), 10);
        this.#carouselSlide.style.transform = 'translateX(-' + (this.#slideWidth * slideIndex) + 'px)';
      });
      thumbnailContainer.appendChild(thumbnail);
    }
    document.body.appendChild(carouselContainer);
  }
}