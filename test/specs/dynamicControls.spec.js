const dynamicControlsUrl = "http://the-internet.herokuapp.com/dynamic_controls";
const dynamicControlsPage = require('../../pages/dynamicControlsPage');

describe('Testing Dynamic Controls', () => {
    it('Checking Remove/add', () => {
        dynamicControlsPage.open(dynamicControlsUrl);
        dynamicControlsPage.workingWithRemoveAdd();
    });
    it('Checking Enable/disable', () => {
        dynamicControlsPage.open(dynamicControlsUrl);
        dynamicControlsPage.workingWithEnableDisable();
    });
});