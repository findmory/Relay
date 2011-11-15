/**
 * @author mike
 */

//create a tableView to add to the popOver with 'num' number of rows
function createTableViewForPop(num){
	var data = [];
	for (var i=1; i <= num; i++) {
		data.push({title:i+""}); // concatinating "" on end because title MUST be a string!!

	};
	
	var dataForPop = Ti.UI.createTableView({
                    data:data
                    });

	
	//this returns a whole tableView loaded up with data
	return dataForPop;
};



//create a popover with data: obj

function createPopOver(obj){
  // appreciate code review by @pecdev where he indicated in earlier posting
    // i was creating the pop over every time, i have addressed the issue
    if (popover == null) {
        var popover = Ti.UI.iPad.createPopover({
            width:100,
            height:250,
            arrowDirection:Ti.UI.iPad.POPOVER_ARROW_DIRECTION_ANY,
            navBarHidden:true,
        });

        // add navigationGroup to popOver
        /*
        var navigationGroup = createPopOverNavigationGroup( win.popover );
        win.popover.add(navigationGroup);
        */
    } else {
        Ti.API.debug("using existing window.popover");
    }
    
    var dataForPop = obj;
    popover.add(dataForPop);
    


    return popover;
};