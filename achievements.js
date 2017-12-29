/* Achievements */

// Framework

function achievement(name){
	iziToast.show({
	id: 'info',
	title: 'Achievment Get!',
	message: name,
	theme: 'dark',
	image: 'award.png',
	position: 'topRight',
	timeout: 5000,
	progressBarColor: 'lime',
	layout: 2,
	});
}

// List of takens

var achievement_dpc100 = 0;
var achievement_mon1000 = 0;
// var achievement_yourAchievement = 0;

// Default achievements

function achievement_test(){
	if(money >= 1000){
		if(achievement_mon1000 != 1){
			achievement("1000$!");
			achievement_mon1000 = 1;
		}
	}
	else if(dpc >= 100){
		if(achievement_dpc100 != 1){
			achievement("Month of work!");
			achievement_dpc100 = 1;
		}
	}
}

// Custom Achievements

/*
1) Create function
2) Create setInterval for function
3) Create variable for achievement (// List of takens)
4) Enjoy!

FUNCTION CAN GET(Default):
* Money: money
* DPC: dpc
* Admin Mode: isadmin
(!) You can modify game.js and make own variables. But be accurate! One wrong action may broke everything.

Function Example:

function achievement_money50000(){ // function name
	if(money >= 50000){ // if money higher or equal 50.000
		if(achievement_money50000 != 1){ // if achievement isn't complete
			achievement("You got 50k!"); // message
			achievement_money50000 = 1; // completing the achievement
		} // closing
	} // closing
} // closing
*/

/* setIntervals */

setInterval(achievement_test, 50);
// setInterval(yourFunctionName, 50);