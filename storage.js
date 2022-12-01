class Storage {
    constructor() {
        this.stored = localStorage?.stored
        this.stored = this.stored ? JSON.parse(this.stored) : {}
    }
    set(key, value) {
        this.stored[key] = value
        localStorage.stored = JSON.stringify(this.stored)
    }
    get(key) {
        return this.stored[key]
    }
}