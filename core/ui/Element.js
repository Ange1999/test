module.exports = class Element {

    constructor(selector, name = "Element") {
        this.selector = selector;
        this.name = name;
    }

    get element() {
        return $(this.selector)
    }

    get elements() {
        return $$(this.selector)
    }

    isDisplayed() {
        this.element.waitForDisplayed();
        return this.element.isDisplayed();
    }
    isNotDisplayed() {
        return this.element.not.isDisplayed();
    }

}
