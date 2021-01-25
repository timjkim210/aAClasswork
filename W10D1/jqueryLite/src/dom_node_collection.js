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

    append() {
        
    }
}
module.exports = DOMNodeCollection
