/**
 * @author mike
 */
Ti.include('../js/legFunctions.js');
Ti.include('../js/mikesUtilFunctions.js');
var win = Titanium.UI.currentWindow;
createDummyLegsDB();

var lbl_numLegs = Titanium.UI.createLabel({
	color:'#000',
	text:'Select # of legs:',
	font:{fontSize:14,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	height:14,
	width:'auto',
	left:236,
	top:33
});

win.add(lbl_numLegs);




var numOfLegs_btn = Titanium.UI.createButton({
    title: getLegInfo.numOfLegs(),
    width:150,
    height:35,
    top:25,
    left:365
});

win.add(numOfLegs_btn);

numOfLegs_btn.addEventListener('click', function() {

	 var dataForPop = createTableViewForPop(36);
	 var popover = createPopOver(dataForPop);
     popover.show({
        view:numOfLegs_btn,
        animated:true
    	});
    
 	popover.addEventListener('click', function(e) {

		//write the value to App Property
		Ti.App.Properties.setInt('numOfLegs', parseInt(e.rowData.title));

		numOfLegs_btn.title = getLegInfo.numOfLegs();
       
	});
 
   
});