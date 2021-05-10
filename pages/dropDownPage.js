const BasePage = require("../core/ui/BasePage");
const Element = require("../core/ui/Element");

const selectBox = new Element('//select[@id="dropdown"]');
const firstOption = new Element('//option[@value="1"]');
const secondOption = new Element('//option[@value="2"]');

class DropdownList extends BasePage{
    selectFirstOption(){
        selectBox.element.selectByAttribute('value', '1');
        expect(firstOption.element).toHaveAttribute('selected', 'true');
        expect(secondOption.element).not.toHaveAttribute('selected', 'true');
    }
    selectSecondOption(){
        selectBox.element.selectByAttribute('value', '2');
        expect(firstOption.element).not.toHaveAttribute('selected', 'true');
        expect(secondOption.element).toHaveAttribute('selected', 'true');
    }
}

module.exports = new DropdownList();