var str = 0,dex=0,int=0,con=0,app=0,pow=0,siz=0,edu=0,luck=0;
window.onload=function() {
	PC_Dice_Refresh();
}
function Get_RandomNum(Min,Max) {
	var Range = Max - Min;
	var Rand = Math.random();
	return(Min + Math.round(Rand * Range));
}
function PC_Dice_Refresh () {
	var dicepanel = document.getElementById("dicepanel");
	var dices = dicepanel.getElementsByTagName("span");
	var dice = 0;
	for (var i = 0; i < dices.length; i++) {
		dice = (Get_RandomNum(1, 6) + Get_RandomNum(1, 6) +Get_RandomNum(1, 6))*5
	    dices[i].innerText = dice;
	}
}
function Imput_PC_Random_Dice() {
	
}