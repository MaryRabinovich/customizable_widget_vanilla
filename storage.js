class Storage {
    constructor(defaultObj) {
        this.stored = localStorage?.stored
        this.stored = this.stored ? JSON.parse(this.stored) : defaultObj
    }
    set(key, value) {
        this.stored[key] = value
        localStorage.stored = JSON.stringify(this.stored)
    }
    get(key) {
        return this.stored[key]
    }
}