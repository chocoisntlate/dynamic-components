class Carousel {
    static initialise() {
        let elements = document.querySelectorAll(".image-carousel");
        for (let element of elements) {
            element.setAttribute('data-index', '0')
            this.attachNextButton(element)
            this.attachPreviousButton(element)
        }        
    }

    static attachNextButton(element) {
        let nextButton = element.querySelector('.next-button')
        nextButton.addEventListener('click', function(e) {
            Carousel.next(element)
        })
    }

    static attachPreviousButton(element) {
        let nextButton = element.querySelector('.previous-button')
        nextButton.addEventListener('click', function(e) {
            Carousel.previous(element)
        })
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
        let slides = element.querySelector('.slides')
        let slidePosition = parseInt(element.getAttribute('data-index'))
        if (slidePosition == 0) {
            slidePosition = 2
        } else {
            slidePosition--
        }

        element.setAttribute('data-index', slidePosition)
        this.moveSlide(slides, slidePosition)
    }

    static moveSlide(slides, index) {
        let value = index*300
        slides.style.transform = `translateX(-${value}px)`
    }
}

export {Carousel}