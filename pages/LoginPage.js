const BasePage = require("../core/ui/BasePage")
const InputField = require("../core/ui/controls/InputField");
const Button = require("../core/ui/controls/Button");
const Element = require("../core/ui/Element")

const username = new InputField('//input[@id="username"]', "Name InputField");
const password = new InputField('//input[@id="password"]', "Password InputField");
const loginButton = new Button('//button[@class="radius"]');
const logoutButton = new Button('//a[@class="button secondary radius"]');
const errorMessage = new Element('//div[@id="flash"]', "error message")

class LoginPage extends BasePage{
    setInputFieldValue(usernameValue, passwordValue){
        username.addValue(usernameValue);
        password.addValue(passwordValue);
        loginButton.click();
    }
    loginCheck(){
        logoutButton.isDisplayed();
    }
    errorMessageCheck(){
        errorMessage.isDisplayed();
    }
   
}

module.exports = new LoginPage();