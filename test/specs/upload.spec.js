const path = require('path');
const fileName = "city.jpg";
const filePath = path.join(__dirname, `../../additionalFiles/${fileName}`);
const fileUploaderUrl = "http://the-internet.herokuapp.com/upload";
const fileUploaderPage = require("../../pages/uploadPage");

describe('Testing File Uploader', () => {
    it('Should load picture', () => {
        fileUploaderPage.open(fileUploaderUrl);
        const remoteFilePath = browser.uploadFile(filePath);
        fileUploaderPage.loadPucture(remoteFilePath, fileName); 
    });
});