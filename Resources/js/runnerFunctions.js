var getRunnerInfo = (function() {
	
	//call getRunnerInfo.runnerName(id) to get name associated with runner #
	//call getRunnerInfo.database() to return the whole DB for reading / writing
	
	return {
		
		runnerName: function(id) {
			var runnerDB =  Ti.App.Properties.getList('allRunners');
			//need error control here for empty runners
			return runnerDB[id].name;
		},
		database: function (){
			var runnerDB =  Ti.App.Properties.getList('allRunners');
			return runnerDB;
		},
		pace: function(id) {
			var runnerDB = Ti.App.Properties.getList('allRunners');
			return runnerDB[id].pace;
		},
		numOfRunners: function(){
			var numRunners = Ti.App.Properties.getInt('numRunners', 1);
			return numRunners;
		}
	}

}) ();




var setRunnerInfo = (function() {
	
	//call setRunnerInfo.runnerName(id,runner) to set name associated with runner #

	return {
		runnerName: function(id,runner) {
			var runnerDB =  Ti.App.Properties.getList('allRunners');
			runnerDB[id].name = runner;
			Ti.App.Properties.setList('allRunners',runnerDB);
		},
		pace: function (id,runPace) {
			var runnerDB =  Ti.App.Properties.getList('allRunners');
			runnerDB[id].pace = runPace;
			Ti.App.Properties.setList('allRunners',runnerDB);
		}
	}
}) ();



function createDummyRunnerDB() {
	if (!Ti.App.Properties.getList('allRunners')){
		var tempArray = [
		{name:'Runner', pace:'8:00'},
		{name:'Runner', pace:'8:00'},
		{name:'Runner', pace:'8:00'},
		{name:'Runner', pace:'8:00'},
		{name:'Runner', pace:'8:00'},
		{name:'Runner', pace:'8:00'},
		{name:'Runner', pace:'8:00'},
		{name:'Runner', pace:'8:00'},
		{name:'Runner', pace:'8:00'},
		{name:'Runner', pace:'8:00'},
		{name:'Runner', pace:'8:00'},
		{name:'Runner', pace:'8:00'},
		{name:'Runner', pace:'8:00'}
		];
	
		Ti.App.Properties.setList('allRunners', tempArray);
		
		Ti.UI.createAlertDialog({
			title: 'Debug',
			message: 'Dummy DB Created...'
		}).show();

	};
	
	
};

/// putting this here temporarily
function tableOfRunners(){
	var tempDataForTable = [];
		
	for (var i = 0; i<getRunnerInfo.numOfRunners(); i++){
		var runName = getRunnerInfo.runnerName(i);
		tempDataForTable.push({title:runName}); 
	};

	
	var tableView = Ti.UI.createTableView({
		data: tempDataForTable
	});
	
	return tableView; 
};

