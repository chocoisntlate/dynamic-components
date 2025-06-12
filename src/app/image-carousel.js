class Carousel {
    static initialise() {
        let elements = document.querySelectorAll(".image-carousel");
        for (let element of elements) {
            element.setAttribute('data-index', '0')
        }        
    }

    static next(element) {
        let slides = element.querySelector('.slides')
        let slidePosition = parseInt(element.getAttribute('data-index'))
        if (slidePosition == 2) {
            slidePosition = 0
        } else {
            slidePosition++
        }

        element.setAttribute('data-index', slidePosition)
        this.moveSlide(slides, slidePosition)

    }

    static previous(element) {

    }

    static moveSlide(slides, index) {
        let value = index*300
        slides.style.transform = `translateX(-${value}px)`
    }
}

export {Carousel}