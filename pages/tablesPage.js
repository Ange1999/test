const BasePage = require("../core/ui/BasePage");
const Table = require('../core/ui/controls/Table');
const chaiExpect = require('chai').expect;
const table = new Table('//table[@id="table2"]');

class DataTables extends BasePage {
    sortTableColumn(numColumn,nedeedNameColumn) {
        table.isDisplayed();
        const sortArr={
            "Last Name" : ["Bach","Conway","Doe","Smith"],
            "First Name":[ 'Frank', 'Jason', 'John', 'Tim' ],
            "Email" : ['fbach@yahoo.com',
            'jdoe@hotmail.com',
            'jsmith@gmail.com',
            'tconway@earthlink.net'],
        }
        const xPathArr = $$(table.getColumnParamsFromRowIndex(numColumn));
        const textArr = xPathArr.map((item)=>{
            return item.getText(); 
        })
        chaiExpect(textArr.sort()).to.deep.equal(sortArr[nedeedNameColumn]);
    }
}

module.exports = new DataTables();