const BasePage = require("../core/ui/BasePage");
const Button = require("../core/ui/controls/Button");
const InputField = require("../core/ui/controls/InputField");

const inputText = new InputField('//body[@id="tinymce"]/p');
const alignCenterBtn = new Button('//button[@aria-label="Align center"]');
const boldBtn = new Button('//button[@aria-label="Bold"]');

class FramePage extends BasePage{

    inputTextIntoTexteditor(text){
        browser.switchToFrame($('//iframe[@class="tox-edit-area__iframe"]'));
        inputText.element.clearValue();
        browser.switchToParentFrame();
        boldBtn.click();
        browser.switchToFrame($('//iframe[@class="tox-edit-area__iframe"]'));
        inputText.element.addValue(text);
        expect(inputText.element).toHaveText(text);
    }
    addPositionStyle(){
        browser.switchToParentFrame();
        alignCenterBtn.click();
        browser.switchToFrame($('//iframe[@class="tox-edit-area__iframe"]'));
        expect(inputText.element).toHaveAttributeContaining('data-mce-style', 'text-align: center;');
        $('//body[@id="tinymce"]/p/strong').isExisting();
    }
}

module.exports = new FramePage();