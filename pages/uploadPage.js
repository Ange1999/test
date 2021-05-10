const BasePage = require("../core/ui/BasePage");
const Element = require("../core/ui/Element");
const Button = require("../core/ui/controls/Button");
const { Browser } = require("selenium-webdriver");

const fileUpload = new Element('//input[@id="file-upload"]');
const uploadBtn = new Button('//input[@id="file-submit"]');
const uploadedFile = new Element('//div[@id="uploaded-files"]');

class FileUploader extends BasePage{
        loadPucture(remoteFilePath, fileName){
            fileUpload.element.setValue(remoteFilePath);
            uploadBtn.element.click(); 
            expect($('//h3')).toHaveText("File Uploaded!");
            expect(uploadedFile.element).toHaveText(`${fileName}`)
        }
}

module.exports = new FileUploader();
