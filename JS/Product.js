class Product{
    productImgs = [];
    productName;
    description;
    features = [];
    parameters = [];
    filePath;

    create(){

    }
    #showProducts() {
        this.#productItems.forEach(item => {
            item.style.width = `${this.#productItemWidth}px`;
        });
        setInterval(() => { this.changeProduct(1); }, 3000);
    }
    #changeProduct(n) {
        this.#offset -= n * this.#productItemWidth;
        if (this.#offset < -(this.#productItemWidth * (this.#productItems.length - 1))) {
            this.#offset = 0;
        }
        else if (this.#offset > 0) {
            this.#offset = -(this.#productItemWidth * (this.#productItems.length - 1));
        }
        this.#productList.style.transform = `translateX(${this.#offset}px)`;
    }
}
class Feature{
    title;
    items;
}
class CarouselChart
{
    #slideIndex = 0;
    #slides = document.querySelectorAll('.carousel-image');
    #slideWidth = this.#slides[0].clientWidth;
    #carouselSlide = document.querySelector('.carousel-slide');
    #leftButton = document.querySelector('.carousel-button.left');
    #rightButton = document.querySelector('.carousel-button.right');
    #slideInterval = setInterval(nextSlide, 3000); // Change image every 3 seconds  
    #sliding = false;

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

    create()
    {
        this.#leftButton.addEventListener('click', prevSlide);
        this.#rightButton.addEventListener('click', nextSlide);
    
        // Optionally, clear the interval on carousel hover to pause the slideshow  
        carouselContainer = document.querySelector('.carousel-container');
        carouselContainer.addEventListener('mouseenter', function () {
          clearInterval(this.#slideInterval);
        });
        carouselContainer.addEventListener('mouseleave', function () {
          this.#slideInterval = setInterval(nextSlide, 3000); // Restart the slideshow on mouse leave  
        });
        // 添加缩略图点击事件处理函数  
        let thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails.forEach(function (thumbnail) {
          thumbnail.addEventListener('click', function () {
            let slideIndex = parseInt(this.getAttribute('data-slide-index'), 10);
            this.#carouselSlide.style.transform = 'translateX(-' + (this.#slideWidth * this.#slideIndex) + 'px)';
          });
        });
    }
}