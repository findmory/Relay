Ti.include('../js/functions.js');
Ti.include('../js/runnerFunctions.js');

var win = Titanium.UI.currentWindow;

//pass in the currRunner var from calling window!
var currRunner = parseInt(win.currRunner);

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
    value:getRunnerInfo.runnerName(currRunner),
    height:35,
    width:300,
    left:332,
    top:20,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
   
    keyboardToolbarColor: '#999', 
   	keyboardToolbarHeight: 40,
});



win.add(tf_runnerName);
win.add(lbl_runnerName);



tf_runnerName.addEventListener('blur', function(e) {

		setRunnerInfo.runnerName(currRunner,tf_runnerName.value);
		
	});
	
	


