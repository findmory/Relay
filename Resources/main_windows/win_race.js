/**
 * @author mike
 */


Ti.include('../js/mikesUtilFunctions.js');
Ti.include('../js/functions.js');

createDummyLegsDB();
createDummyRunnerDB;

var win = Titanium.UI.currentWindow;


buildTable();

win.addEventListener('focus',function(e){
	//alert('got focus!!');
	buildTable();
	
});