/**
 * @author mike
 */

Ti.include('../js/runnerFunctions.js');
Ti.include('../js/mikesUtilFunctions.js');

var win = Titanium.UI.currentWindow;
createDummyRunnerDB();


var label2 = Titanium.UI.createLabel({
	color:'#000',
	text:'Select # of runners:',
	font:{fontSize:14,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	height:14,
	width:'auto',
	left:236,
	top:33
});

win.add(label2);



var numOfRunners_btn = Titanium.UI.createButton({
    title: getRunnerInfo.numOfRunners(),
    width:150,
    height:35,
    top:25,
    left:365
});

win.add(numOfRunners_btn);



numOfRunners_btn.addEventListener('click', function() {

	 var dataForPop = createTableViewForPop(12);
	 var popover = createPopOver(dataForPop);
     popover.show({
        view:numOfRunners_btn,
        animated:true
    	});
    
 	popover.addEventListener('click', function(e) {

		//write the value to App Property
		Ti.App.Properties.setInt('numRunners', e.rowData.title);

		numOfRunners_btn.title = getRunnerInfo.numOfRunners();
		runnerTable();
       
	});
 
   
});



function runnerTable(){
//create a table
	Ti.API.info("building the table...");
	var tempDataForTable = [];
	
	for (var i = 0; i<getRunnerInfo.numOfRunners(); i++){
		var row = Ti.UI.createTableViewRow({
			hasChild:true,
			title:getRunnerInfo.runnerName(i),
			runnerPage:'setupRunnersDetail.js'
		});
		
		tempDataForTable.push(row);
		
		Ti.API.info("pushed row #" + i);
	};
	
	
	
	var tableView = Ti.UI.createTableView({
		top:100,
		data: tempDataForTable
	});
	
	win.add(tableView);

	tableView.addEventListener('click', function(e)
	{
		if (e.rowData.runnerPage)
		{
			var winRunnerInfo = null;
			
			winRunnerInfo = Titanium.UI.createWindow({
				url:e.rowData.runnerPage,
				title:e.rowData.title,
				backgroundColor:'#fff',
				barColor:'#111'
			});
	
			//pass current Runner to next window
			winRunnerInfo.currRunner = e.index;
	
			Titanium.UI.currentTab.open(winRunnerInfo,{animated:true});
		}
	});

};

win.addEventListener('focus',function(e){
	//alert('got focus!!');
	runnerTable();
	
});



