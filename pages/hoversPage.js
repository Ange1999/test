const BasePage = require("../core/ui/BasePage");
const Element = require("../core/ui/Element");

const user2 = new Element('//div[@class="figure"][2]');
const additionalInf = new Element('//div[@class="figure"][2]/div');

class Hovers extends BasePage {
    checkAppearHover(){
        user2.isDisplayed();
        user2.element.moveTo();
        additionalInf.isDisplayed();
    }
}

module.exports = new Hovers();
