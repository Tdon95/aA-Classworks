class DOMNodeCollection {
    constructor (array) {
        this.array = array;
    }

    each(callback) {
        this.array.forEach(callback);
    };

    html(string) {
        if (typeof string === "string") {
            this.forEach (node => {
                node.innerHTML = string;
            });
        } else {
            return this[0].innerHTML;
        }
    }

    empty () {
        this.html(" ");
    }

    append (collection) {
        this.each(node => {
            node.innerHTML += collection;
        });
    }

    addClass(newClass) {
        this.each(ele => ele.classList.add(newClass));
    }
    
    removeClass(oldClass) {
        this.each(ele => ele.classList.remove(oldClass));
    }

    toggleClass(toggleClass) {
        this.each(ele => ele.classList.toggle(toggleClass));
    }

    attr () {
        return this.array[0];
    }

    children () {
        let arr = [];

        this.each (ele => {
            const list = ele.children;
            arr = arr.concat(Array.from(list));
        });
        return new DOMNodeCollection(arr);
    }

    parent() {
        const arr = [];

        this.each(({ parent }) => {
            if (parent.visited) {
                arr.push(parent);
            } else {
                parent.visited = true;
            }
        });

        arr.forEach(ele => {
            ele.visited = false;
        });
        return new DomNodeCollection(arr);
    }

    find(selector) {
        let arr = [];
        this.each(ele => {
            const nodes = ele.querySelectorAll(selector);
            arr = arr.concat(Array.from(nodes));
        });
        return new DomNodeCollection(arr);
    }
    remove() {
        this.each(ele => ele.parentNode.removeChild(ele));
    }
}

module.exports = DOMNodeCollection;