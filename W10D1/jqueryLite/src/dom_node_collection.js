class DOMNodeCollection {
    constructor(htmlElements) {
        this.elements = htmlElements;
    }
    html(str) {
        if (str) {
            this.elements.forEach(el => {
                el.innerHTML = str;
            });
        } else {
            return this.elements[0].innerHTML;
        }
    }
    empty() {
        this.elements.forEach(el => {
            el.innerHTML = "";
        });
    }

    append(arg) {
        if (arg instanceof HTMLElement){
            this.elements.forEach(el => {
                el.innerHTML = arg.outerHTML;
            });
        } else if (arg instanceof String) {
            this.elements.forEach(el => {
                el.innerHTML = arg;
            });
        } else if (arg instanceof DOMNodeCollection) {
            arg.elements.forEach(el => {
                this.elements.forEach(el2 => {
                    el2.innerHTML = el.outerHTML;
                });
            });
        }
    }

    addClass(name) {
        this.elements.forEach(el => {
            el.classList.add(name);
        });
    }

    removeClass(name) {
        this.elements.forEach(el => {
            el.classList.remove(name);
        })
    }

    attr(arg) {
        this.elements.forEach(el => {
            el.getAttribute(arg);
        })
    }
}

module.exports = DOMNodeCollection
