class Styler {
    el = document.getElementById('widget-custom-style')
    constructor() {
        this.style = {}
    }
    set(key, value) {
        this.style[key] = value
        this.buildStyle()
    }
    buildStyle() {
        let str = ''
        for (let key in this.style) {
            str += this.style[key]
        }
        this.el.innerHTML = str
    }
}