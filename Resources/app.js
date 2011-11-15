
Ti.include('js/functions.js');

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//ipad dimensions 1024x768

//
// create base UI tab and root window
//
var win_race = Titanium.UI.createWindow({  
    title:'Race!',
    backgroundColor:'#fff',
    url:'main_windows/win_race.js'
});
var tab_race = Titanium.UI.createTab({  
    icon:'63-runner.png',
    title:'RACE!',
    window:win_race
});



//
// create controls tab and root window
//
var win_setupRunners = Titanium.UI.createWindow({  
    title:'Setup Runners',
    backgroundColor:'#fff',
    url:'main_windows/win_setupRunners.js'
});


var tab_setupRunners = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Setup Runners',
    window:win_setupRunners
});




//
// create controls tab and root window
//
var win_setupLegs = Titanium.UI.createWindow({  
    title:'Setup Legs',
    backgroundColor:'#fff',
    url:'main_windows/win_setupLegs.js'
});
var tab_setupLegs = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Setup Legs',
    window:win_setupLegs
});


//
//  add tabs
//
tabGroup.addTab(tab_race);  
tabGroup.addTab(tab_setupRunners);
tabGroup.addTab(tab_setupLegs);

// open tab group
tabGroup.open();
