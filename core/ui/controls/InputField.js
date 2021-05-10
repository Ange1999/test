const Element = require('../Element');

class InputField extends Element {
    constructor(selector, name = "InputField") {
        super(selector, name)
    }

    addValue(value) {
        this.element.waitForDisplayed();
        return this.element.setValue(value);
    }

    isEnabled() {
        return this.element.isEnabled();
    }

}

module.exports = InputField;