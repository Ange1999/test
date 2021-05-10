const Element = require("../Element")

module.exports = class Button extends Element {
    constructor(selector, name = "button") {
        super(selector, name)
    }

    click() {
        this.element.waitForDisplayed();
        return this.element.click();
    }

}

