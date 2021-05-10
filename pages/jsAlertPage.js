const { Browser } = require("selenium-webdriver");
const BasePage = require("../core/ui/BasePage");
const Button = require("../core/ui/controls/Button");
const Element = require("../core/ui/Element");

const alertBtn = new Button('//button[@onclick = "jsAlert()"]');
const confirmBtn = new Button('//button[@onclick = "jsConfirm()"]');
const promptbtn = new Button('//button[@onclick = "jsPrompt()"]');
const resultMessage = new Element('//p[@id="result"]');

class JsAlert extends BasePage{
  checkAlert(){
    alertBtn.click();
    expect(resultMessage.element).toHaveText("You successfully clicked an alert");
  }
  checkConfirm(){
    confirmBtn.click();
    browser.acceptAlert();
    expect(resultMessage.element).toHaveText("You clicked: Ok");
  }
  checkDismissConfirm(){
    confirmBtn.click();
    browser.dismissAlert();
    expect(resultMessage.element).toHaveText("You clicked: Cancel");
  }
  checkPrompt(message){
    promptbtn.click();
    browser.sendAlertText(message);
    browser.acceptAlert();
    expect(resultMessage.element).toHaveText(`You entered: ${message}`);
  }
}

module.exports = new JsAlert();