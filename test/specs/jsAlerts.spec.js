const alertsPage = require("../../pages/jsAlertPage");
const alertsUrl = "http://the-internet.herokuapp.com/javascript_alerts";

describe('Testing JS alert', () => {
    it('Cheking alert message', () => {
        alertsPage.open(alertsUrl);
        alertsPage.checkAlert();

    });
    it('Cheking confirm', () => {
        alertsPage.checkConfirm();
        alertsPage.checkDismissConfirm();

    });
    it('Cheking prompt', () => {
        alertsPage.checkPrompt("Use you mind");
    });
});