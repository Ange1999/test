const dropDownUrl = "http://the-internet.herokuapp.com/dropdown";
const dropDownPage = require('../../pages/dropDownPage');

describe('Testing Dropdown List', () => {
    it('Select first option and verify', () => {
        dropDownPage.open(dropDownUrl);
        dropDownPage.selectFirstOption();
    });
    // it('Select second option and verify', () => {
    //     dropDownPage.open(dropDownUrl);
    //    dropDownPage.selectSecondOption();
    // });
});