var bet_story = [];
var betID;
var roll;
function stop(){
	clearInterval(mySIFunc);
};
function bet_story_add(){
	roll = document.getElementsByClassName('grid__item one-eighth')[14].firstChild.innerHTML;
	if (roll > 49.5) {
		bet_story[bet_story.length] = false;
	}
	else {
		bet_story[bet_story.length] = true;
	}
};
function bet_story_info(){
	var bet_win = 0;
	var bet_loss = 0;
	var bet_win_perc;
	var bet_loss_perc;
	for (var i = 0; i < bet_story.length; i++){
		if (bet_story[i]) {
			bet_win++;
		}
		else {
			bet_loss++;
		}
	}
	bet_win_perc = bet_win * 100 / bet_story.length;
	bet_win_perc = bet_win_perc.toFixed(2);
	bet_loss_perc = bet_loss * 100 / bet_story.length;
	bet_loss_perc = bet_loss_perc.toFixed(2);
	console.clear()
	console.log("Win: ", + bet_win_perc + "% (" + bet_win + ") | Loss: " + bet_loss_perc + "% (" + bet_loss + ") | Total bet: " + bet_story.length);
}
var mySIFunc = setInterval(function(){
	if (document.getElementsByClassName('link')[0].innerHTML != betID){
		betID = document.getElementsByClassName('link')[0].innerHTML;

		bet_story_add();

	/*	$("#spinner").click();  */

		bet_story_info();
	}
}, 100);