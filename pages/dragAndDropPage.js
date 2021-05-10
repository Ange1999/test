const { assert } = require("chai");
const BasePage = require("../core/ui/BasePage");
const Element = require("../core/ui/Element");

const objectA = new Element('//div[@id="column-a"]');
const objectB = new Element('//div[@id="column-b"]');
const objectAHeader = new Element('//div[@id="column-a"]/header');
const objectBHeader = new Element('//div[@id="column-b"]/header'); 

class DragAndDrop extends BasePage {

  dragObgAToObjB() {
    objectA.isDisplayed();
    objectA.element.dragAndDrop(objectB.element);
    browser.pause(3000);
    assert.equal("A", objectBHeader.element.getText());
    assert.equal("B", objectAHeader.element.getText());
  }

}

module.exports = new DragAndDrop();