function IteratorFromArray(array) {
    if (!(this instanceof IteratorFromArray)) {
        throw new Error('請用 new IteratorFromArray()!')
    }
    this._array = array;
    this._cursor = 0;
}
IteratorFromArray.prototype.next = function () {
    return this._cursor < this._array.length ? {
        value: this._array[this._cursor++], done: false
    } : { value: undefined, done: true }
}