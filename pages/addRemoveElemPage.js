const BasePage = require("../core/ui/BasePage");
const Button = require("../core/ui/controls/Button")

const addElemBtn= new Button('//div[@class="example"]/button');
const removeElemBnt = new Button('//div[@id="elements"]/child::button')

class AddRemoveElems extends BasePage{
    
    addElement(){
        addElemBtn.click();
        removeElemBnt.isDisplayed();
    }
    deleteElement(){
        removeElemBnt.click();
        expect($('//div[@id="elements"]')).not.toHaveChildren(); 
    }

}

module.exports = new AddRemoveElems();