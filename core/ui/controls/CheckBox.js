const Element = require("../Element");

module.exports = class CheckBox extends Element {
    constructor(selector, name = "CheckBox") {
        super(selector, name);
    }

    setChecked() {
        const element = this.element
        if (!this.isSelected()) {
            element.click();
        }
    }
    setUnchecked() {
        const element = this.element;
        if (this.isSelected()) {
            element.click();
        }
    }
    isSelected() {
        return this.element.isSelected();
    }
    isExisting(){
        return this.element.isExisting();
    }
}