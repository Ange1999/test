const tablesPage = require("../../pages/tablesPage");
const dataTablesUrl = "http://the-internet.herokuapp.com/tables";


describe('Testing Data Tables', () => {
    it('Sort by LastName, can check any column', () => {
        const columsName=["Last Name", "First Name", "Email"];
        const nedeedNameColumn = "Last Name";
        const numColumn = columsName.findIndex((item)=>item===nedeedNameColumn)
        tablesPage.open(dataTablesUrl);
        tablesPage.sortTableColumn(numColumn+1,nedeedNameColumn);
    });
});