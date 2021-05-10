const add_removeElems = require("../../pages/addRemoveElemPage");
const addRemoveElemsUrl = "http://the-internet.herokuapp.com/add_remove_elements/";

describe('Testing Add/Remove Elements', () => {
    it('Should add Element (button)', () => {
        add_removeElems.open(addRemoveElemsUrl);
        add_removeElems.addElement();
    });
    it('Should remove Element (button)', () => {
        add_removeElems.deleteElement();  
    });
});