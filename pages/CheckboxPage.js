const { Browser } = require("selenium-webdriver");
const BasePage = require("../core/ui/BasePage");
const CheckBox = require("../core/ui/controls/CheckBox");

const firstCheckBox = new CheckBox('//form[@id="checkboxes"]/input[1]');
const secondCheckBox = new CheckBox('//form[@id="checkboxes"]/input[2]');

class CheckBoxPage extends BasePage{
     selectOneCheckbox(){
        firstCheckBox.setChecked();
        secondCheckBox.setUnchecked();
        expect(firstCheckBox).toBeChecked();
        expect(secondCheckBox).not.toBeChecked();
     }
     ucheckedAllCheckboxes(){
        firstCheckBox.setUnchecked();
        secondCheckBox.setUnchecked();
        expect(firstCheckBox).not.toBeChecked();
        expect(secondCheckBox).not.toBeChecked();
     }
}

module.exports = new CheckBoxPage();