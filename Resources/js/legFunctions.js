
var getLegInfo = (function() {
	
	//call getLegInfo.distance(id) to get distance associated with leg #
	//call getLegInfo.database() to return the whole DB for reading / writing
	
	return {
		
		legNum: function(id) {
			var legDB =  Ti.App.Properties.getList('allLegs');
			//need error control here for empty runners
			return legDB[id].num;
		},
		database: function (){
			var legDB =  Ti.App.Properties.getList('allLegs');
			return legDB;
		},
		distance: function(id) {
			var legDB = Ti.App.Properties.getList('allLegs');
			return legDB[id].distance;
		},
		runner: function(id) {
			var legDB = Ti.App.Properties.getList('allLegs');
			return legDB[id].runner;
		},
		numOfLegs: function(){
			var numLegs = Ti.App.Properties.getInt('numOfLegs', 0);
			return numLegs;
		},
		exPace: function(id){
			var legDB = Ti.App.Properties.getList('allLegs');
			return legDB[id].exPace;
		}
	}

}) ();


var setLegInfo = (function() {
	
	//call setLegInfo.legNum(id,number) to set num associated with leg #
	//call setLegInfo.distance(id,legDist) to set distance associated with leg #

	return {
		legNum: function(id,number) {
			var legDB =  Ti.App.Properties.getList('allLegs');
			legDB[id].num = number;
			Ti.App.Properties.setList('allLegs',legDB);
		},
		distance: function (id,legDist) {
			var legDB =  Ti.App.Properties.getList('allLegs');
			legDB[id].distance = legDist;
			Ti.App.Properties.setList('allLegs',legDB);
		},
		runner: function (id,nm){
			var legDB = Ti.App.Properties.getList('allLegs');
			Ti.API.info('before writing prop = ' + legDB[id].runner);
			legDB[id].runner = nm;
			Ti.API.info('and after writing prop = ' + legDB[id].runner);
			Ti.App.Properties.setList('allLegs',legDB);
		},
		exPace: function(id,ep){
			var legDB = Ti.App.Properties.getList('allLegs');
			legDB[id].exPace = ep;
			Ti.App.Properties.setList('allLegs',legDB);
		}
	}
}) ();


function createDummyLegsDB() {
	if (!Ti.App.Properties.getList('allLegs')){
		var tempArray = [
		{num:'1', dist:'1', runner:'runner', exPace:480},
		{num:'2', dist:'1', runner:'runner', exPace:480},
		{num:'3', dist:'1', runner:'runner', exPace:480},
		{num:'4', dist:'1', runner:'runner', exPace:480},
		{num:'5', dist:'1', runner:'runner', exPace:480},
		{num:'6', dist:'1', runner:'runner', exPace:480},
		{num:'7', dist:'1', runner:'runner', exPace:480},
		{num:'8', dist:'1', runner:'runner', exPace:480},
		{num:'9', dist:'1', runner:'runner', exPace:480},
		{num:'10', dist:'1', runner:'runner', exPace:480},
		{num:'11', dist:'1', runner:'runner', exPace:480},
		{num:'12', dist:'1', runner:'runner', exPace:480},
		{num:'13', dist:'1', runner:'runner', exPace:480},
		{num:'14', dist:'1', runner:'runner', exPace:480},
		{num:'15', dist:'1', runner:'runner', exPace:480},
		{num:'16', dist:'1', runner:'runner', exPace:480},
		{num:'17', dist:'1', runner:'runner', exPace:480},
		{num:'18', dist:'1', runner:'runner', exPace:480},
		{num:'19', dist:'1', runner:'runner', exPace:480},
		{num:'20', dist:'1', runner:'runner', exPace:480},
		{num:'21', dist:'1', runner:'runner', exPace:480},
		{num:'22', dist:'1', runner:'runner', exPace:480},
		{num:'23', dist:'1', runner:'runner', exPace:480},
		{num:'24', dist:'1', runner:'runner', exPace:480},
		{num:'25', dist:'1', runner:'runner', exPace:480},
		{num:'26', dist:'1', runner:'runner', exPace:480},
		{num:'27', dist:'1', runner:'runner', exPace:480},
		{num:'28', dist:'1', runner:'runner', exPace:480},
		{num:'29', dist:'1', runner:'runner', exPace:480},
		{num:'30', dist:'1', runner:'runner', exPace:480},
		{num:'31', dist:'1', runner:'runner', exPace:480},
		{num:'32', dist:'1', runner:'runner', exPace:480},
		{num:'33', dist:'1', runner:'runner', exPace:480},
		{num:'34', dist:'1', runner:'runner', exPace:480},
		{num:'35', dist:'1', runner:'runner', exPace:480},
		{num:'36', dist:'1', runner:'runner', exPace:480},
		];
	
		Ti.App.Properties.setList('allLegs', tempArray);
		
		Ti.UI.createAlertDialog({
			title: 'Debug',
			message: 'Dummy LegDB Created...'
		}).show();

	};
	
	
};
