const checkBoxUrl  = "http://the-internet.herokuapp.com/checkboxes";
const checkBoxPage = require('../../pages/CheckboxPage');


describe('Testing checkbox', () => {
    it('Cheked first and second unchecked', () => {
        checkBoxPage.open(checkBoxUrl);
        checkBoxPage.selectOneCheckbox();
    });
    it('All unchecked', () => {
        checkBoxPage.open(checkBoxUrl);
        checkBoxPage.ucheckedAllCheckboxes();
    });
    
});