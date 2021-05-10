const framePage = require('../../pages/framePage');
const frameUrl = 'http://the-internet.herokuapp.com/tinymce';

describe('Testing An iFrame containing the TinyMCE WYSIWYG Editor', () => {
    it('Should input value "Magic" and add bold style', () => {
        framePage.open(frameUrl);
        framePage.inputTextIntoTexteditor("Magic!");
    });
    it('Should have position center check bold style', () => {
        framePage.addPositionStyle();
    });


});