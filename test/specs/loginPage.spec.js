const LoginPage = require("../../pages/LoginPage");
const loginPageUrl = 'http://the-internet.herokuapp.com/login';
const forEach = require('mocha-each');

describe('Should login at LoginPage', () => {
    forEach([
    ["TOMsmith","SuperSecretPassword!"],
    ["tomsmith","Alohomora"]])
    .it('Input wrong username/password', (username,password) => {
        LoginPage.open(loginPageUrl);
        LoginPage.setInputFieldValue(username,password);
        LoginPage.errorMessageCheck();
    });
    it('Input valid data', () => {
        LoginPage.open(loginPageUrl);
        LoginPage.setInputFieldValue("tomsmith","SuperSecretPassword!");
        LoginPage.loginCheck();
    });
s
});