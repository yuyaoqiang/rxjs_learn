function Producer() {
    if (!(this instanceof Producer)) {
        throw new Error('請用 new Producer()!')
    }
    this.listeners = []
}
Producer.prototype.addListener = function (listener) {
    if (typeof listener === 'function') {
        this.listeners.push(listener)
    } else {
        throw new Error('listener 必須是 function')
    }
}
Producer.prototype.removeListener = function (listener) {
    this.listeners.splice(this.listeners.indexOf(listener), 1)
}
Producer.prototype.notify = function (message) {
    this.listeners.forEach(listener => listener(message))
}