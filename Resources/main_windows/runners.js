Ti.include('../js/functions.js');
Ti.include('../js/runnerFunctions.js');

var win = Titanium.UI.currentWindow;

//pass in the currRunner var from calling window!
var currRunner = parseInt(win.currRunner);

Ti.API.debug("current runner # " + currRunner);

var lbl_runnerName = Titanium.UI.createLabel({
	text:'Runner Name:',
	top:18,
	left:174,
	height:36,
	width:135,
	textAlign:'right'
});


var tf_runnerName = Titanium.UI.createTextField({
    color:'#336699',
    value:getLegInfo.runner(currRunner),
    height:35,
    width:300,
    left:332,
    top:20,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
   
    keyboardToolbarColor: '#999', 
   	keyboardToolbarHeight: 40,
});



var lbl_expectedPace = Titanium.UI.createLabel({
	text:'Expected Pace (m:ss/mile):',
	top:54,
	left:63,
	height:36,
	width:246,
	textAlign:'right'
});

var tf_expectedPace = Titanium.UI.createTextField({
    color:'#336699',
    value:getLegInfo.exPace(currRunner),
    height:35,
    width:300,
    left:332,
    top:57,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    keyboardType:Titanium.UI.KEYBOARD_NUMBER_PAD,
    keyboardToolbarColor: '#999', 
    keyboardToolbarHeight: 40,
});


win.add(tf_runnerName);
win.add(lbl_runnerName);
win.add(tf_expectedPace);
win.add(lbl_expectedPace);


tf_runnerName.addEventListener('focus', function(e){
//	alert('clicked');
	
	 //create a popover of the table of runners to select one
	var tor = tableOfRunners();
	Ti.API.info('**DEBUG**');
	Ti.API.info('table view = ' + tor);
	var runNamePopOver = createPopOver(tor);
	
	runNamePopOver.show({
        view:tf_runnerName,
        animated:true
    	});
    
 	runNamePopOver.addEventListener('click', function(e) {
		tf_runnerName.value = e.rowData.title;
		//write the value to App Property
		setLegInfo.runner(currRunner,e.rowData.title); 
	});

	 
});


/*
tf_runnerName.addEventListener('blur', function(e) {

		setRunnerInfo.runnerName(currRunner,tf_runnerName.value);
		
	});
	*/
	
tf_expectedPace.addEventListener('blur', function(e) {
	
		var ms = tf_expectedPace.value;
		var sep = ms.search(':');
		var min = 60 * parseInt(ms.substring(0,sep));
		var sec = parseInt(ms.substring(sep+1,ms.len));
		var totSec = min + sec;
		
		//where is the colon in ms?
		Ti.API.info("the runners pace in sec = " + totSec);
		setLegInfo.exPace(currRunner,totSec);	
	});
	


