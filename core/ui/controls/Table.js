const Element = require('../Element');

module.exports = class Table extends Element {
    constructor(selector, name = "Table") {
        super(selector, name)
    }

    getColumnParamsFromRowIndex(index) {
        return (`${this.selector}/tbody/tr/td[${index}]`)
    }
}