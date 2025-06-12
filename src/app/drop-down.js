class DropDown {
    constructor() {

    }

    static initialise() {
        let elements = document.querySelectorAll('.drop-down')
        for (let element of elements) {
            this.attachListener(element)
        }
    }

    static attachListener(element) {
        let button = element.children[0]
        let menu = element.children[1]
        button.addEventListener('mouseover', () => {
            menu.classList.add('visible')
        })
        button.addEventListener('mouseout', () => {
            menu.classList.remove('visible')
        })
        menu.addEventListener('mouseover', () => {
            menu.classList.add('visible')
        })
        menu.addEventListener('mouseout', () => {
            menu.classList.remove('visible')
        })

    }
}

export { DropDown }