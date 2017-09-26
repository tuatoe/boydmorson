/*import $ from "jquery";
class SlideShow{
    
    constructor(){
        //configuration
        this.width = 1200;
        this.animationSpeed = 1000;
        this.pause = 3000;
        this.currentSlide = 1;
        
        //cache DOM
        this.heroSlider = $('#slider');
        this.sliderContainer = this.heroSlider.find('.slides');
        this.heroSlides = this.sliderContainer.find('.slide');
        
        this.prev = $(".prev");
        this.next = $(".next"); 
        this.dots = $('.dot');
        
        this.interval;
        this.startSlider();
        this.events();
        
    }
    
    events(){
         this.heroSlider
            .on('mouseenter', this.stopSlider)
            .on('mouseleave', this.startSlider);
    
    }
    
   startSlider() {
        this.interval = setInterval(function(){
            //animate margin-left
            this.heroSlides.animate({'margin-left': '-=' + this.width}, this.animationSpeed,function(){
                this.currentSlide++;
                if(this.currentSlide === this.heroSlides.length){
                    this.currentSlide = 1;
                    this.heroSlides.css('margin-left', '0');
                }
            })
        }, this.pause);
    }
    
   stopSlider(){
       clearInterval(this.interval);
   }
    
}

export default SlideShow;*/

/*




 //configuration
    var width = 1200;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;
    
    //cache DOM
    var $heroSlider = $('#hero-slider');
    var $slideContainer = $heroSlider.find('.hero-slides');
    var $heroSlides = $slideContainer.find('.hero-slide')
    
    var interval;
    
    function startSlider(){
        interval = setInterval(function(){
            //animate margin-left
            $slideContainer.animate({'margin-left': '-=' +width}, animationSpeed,function(){
                currentSlide++;
                 //if it's last slide, go to position 1(0px)
                if(currentSlide === $heroSlides.length){
                    currentSlide = 1;
                    $slideContainer.css('margin-left', '0');
                }
            });
        }, pause);
    }
    
    function stopSlider(){
        clearInterval(interval);
    }
   
    $heroSlider
     //listen for mouseenter and pause  
        .on('mouseenter', stopSlider)
    //resume on mouseleave
        .on('mouseleave', startSlider);
    
    startSlider();



var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
*/

/*
 events(){
        prev.on('click',plusSlides(-1));
        next.on('click',plusSlides(1));
        
        dot.on('click',currentSlide(1));
        dot.on('click',currentSlide(2));
        dot.on('click',currentSlide(3));
    }
    
    showSlides(n) {
        var i;
        for (i = 0; i < slides.length; i++) {
           slides[i].style.display = "none";  
        }
        
        slideIndex++;
        
        if (slideIndex> slides.length) {
            slideIndex = 1
        } 
        
        for (i = 0; i < dots.length; i++) {
            dots[i].className = this.dots[i].className.replace(" active", "");
        }
        
        slides[slideIndex-1].style.display = "block";  
        
        dots[slideIndex-1].className += " active";
        
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
    
    
    plusSlides(n) {
      showSlides(slideIndex += n);
    }

    currentSlide(n) {
      showSlides(slideIndex = n);
    }
*/