const BasePage = require("../core/ui/BasePage");
const Element = require("../core/ui/Element");
const Button = require("../core/ui/controls/Button");
const CheckBox = require('../core/ui/controls/CheckBox');
const InputField = require('../core/ui/controls/InputField');

const swapCheckboxBtn = new Button('//button[@onclick="swapCheckbox()"]');
const checkBox = new CheckBox('//input[@label="blah"]');
const checkboxAfterRemove = new CheckBox('//input[@id="checkbox"]');
const swapInputBtn = new Button('//button[@onclick="swapInput()"]');
const inputField = new InputField('//input[@type="text"]');
const message = new Element('//p[@id="message"]');

class DynamicControl extends BasePage{
    workingWithRemoveAdd(){
        swapCheckboxBtn.click();
        checkBox.setChecked();
        checkBox.isSelected();
        message.isDisplayed(); 
        expect(message.element).toHaveText("It's gone!");
        swapCheckboxBtn.click(); 
        checkboxAfterRemove.isDisplayed();   
    }
    workingWithEnableDisable(){
        swapInputBtn.click();
        message.isDisplayed();  
        inputField.addValue("Hello");
        swapInputBtn.click();
        message.isDisplayed();  
        expect(message.element).toHaveText("It's disabled!");
        expect(inputField.element).toBeDisabled();
    }
}

module.exports = new DynamicControl();