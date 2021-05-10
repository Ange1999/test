const { Browser } = require('selenium-webdriver');
const dragAndDropPage = require('../../pages/dragAndDropPage')
const urlDragAndDrop = "http://the-internet.herokuapp.com/drag_and_drop";

describe('Testing Drag and Drop', () => {
    it('Should drag object A to Object B', () => {
        dragAndDropPage.open(urlDragAndDrop);
        dragAndDropPage.dragObgAToObjB();

    });


});