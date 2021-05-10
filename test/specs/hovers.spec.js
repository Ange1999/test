const hoverUrl = "http://the-internet.herokuapp.com/hovers";
const hoverPage = require('../../pages/hoversPage');

describe('Testing hovers', () => {
    it('Additional information at second user block should appear', () => {
        hoverPage.open(hoverUrl);
        hoverPage.checkAppearHover();
    });
});