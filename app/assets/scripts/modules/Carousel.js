
class Carousel {
    constructor(){
        this.carousel1 = document.getElementsByClassName('carousel');
        this.events();
    }
    
    events(){
        this.myCarousel();
    }
    
    myCarousel(){
        console.log('hi')
        this.carousel1.carousel({
          interval: 2000
        })
    }
}

export default Carousel;