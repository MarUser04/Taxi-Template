var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
slides[currentSlide].className= "slide showing";
var slideInterval = setInterval(nextSlide,3000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}