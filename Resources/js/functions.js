Ti.include('../js/mikesUtilFunctions.js');
Ti.include('../js/runnerFunctions.js');
Ti.include('../js/legFunctions.js');




function buildTable(){
//create a table
	Ti.API.info("building the table...");
	var tempDataForTable = [];
	
	for (var i = 0; i<getLegInfo.numOfLegs(); i++){
		var row = Ti.UI.createTableViewRow();
		
		var leg = Ti.UI.createLabel({
			width:30,
			left:0,
			text:getLegInfo.legNum(i)
		});
		

		var name = Ti.UI.createLabel({
			width:100,
			left:31,
			text:getLegInfo.runner(i)
		});
		
		var exPace = Ti.UI.createLabel({
			width:100,
			left:132,
			text:getLegInfo.exPace(i)
		});
		
		row.add(leg);
		row.add(name);
		Ti.API.info('runner ' + i + ' ' + getLegInfo.runner(i));
		row.add(exPace);
		row.hasChild = true;
		
		//you can create custom properties for the row, like this:
		row.runnerPage = '../main_windows/runners.js';
		row.runnerName = name.text;
		row.number = leg.text;
		
		tempDataForTable.push(row);
		
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
			Ti.API.info('**DEBUG INFO FOR TABLE**');
			Ti.API.info('e.rowFata.runnerName = ' + e.row.runnerName);

			
			
			winRunnerInfo = Titanium.UI.createWindow({
				url:row.runnerPage,
				title:'Leg # ' + e.row.number,
				backgroundColor:'#fff',
				barColor:'#111'
			});
	
			//pass current Runner to next window
			winRunnerInfo.currRunner = e.index;
	
			Titanium.UI.currentTab.open(winRunnerInfo,{animated:true});
		}
	});

};
