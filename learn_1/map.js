

/**
 *  Map的实现
 */
Array.prototype.map = function (callback) {
    let result = [];
    this.forEach(function (element, index) {
        result.push(callback(element, index))
    })
}

/**
 *  Filter的实现
 */
Array.prototype.filter = function (callback) {
    let result = [];
    this.forEach(function (element, index) {
        if (callback(element, index)) {
            result.push(element)
        }
    })
}

/**
 * 
 * concatAll 实现
 */
Array.prototype.concatAll = function () {
    let result = [];
    this.forEach(array => result.push.apply(result, array))
    return result;
}