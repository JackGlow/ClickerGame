var clickerTitle = 0; // will Title Update, like: "1000$ | Clicker". 0 - NO, 1 - YES, 2 - ???
var nameTitle = "Clicker Example";
var Currency = "$"; // Currency Symbol
var sB = 0; // start Balance

/* 
   DO NOT EDIT ANYTHING BELOW THIS WARNING
   EDIT ONLY IF YOU KNOW WHAT IS JS AND CANT MAKE EVERYTHING WITHOUT BUGS
*/

window.onload=function(){
     document.body.style.display='block';
}

var money = sB;
dpc = 1;
var isadmin = 0;
function moneyDisplay(){
	var money1 = document.getElementById("money");
	var money2 = document.getElementById("dpc");
	money1.innerHTML = money+Currency;
	money2.innerHTML = "DPC: "+dpc+Currency;
}

setInterval(moneyDisplay, 50);

function grant(){
	money += dpc;
}

function buycpu(){
	if(money >= 100){
		dpc++;
		money -= 100;
		cart("CPU Level 1");
	}
} 

function buygpu(){
	if(money >= 500){
		dpc += 5;
		money -= 500;
		cart("GPU Level 1");
	}
}
function buyserv(){
	if(money >= 1500){
		dpc += 50;
		money -= 1500;
		cart("Server");
	}
}
function buyfriends(){
	if(money >= 3000){
		dpc += 130;
		money -= 3000;
		cart("SMS Flooder");
	}
}
function buygpul2(){
	if(money >= 5000){
		dpc += 250;
		money -= 5000;
		cart("GPU Level 2");
	}
}
if(money >= 100000000000000000000){
	document.location.href = "congrats.html";
}
else if(dpc >= 100000000000000000000){
	document.location.href = "congrats.html";
}
function aboutDev(){
	console.clear();
	console.warn("%cDeveloped by JackGlow", "font: normal 45px/1 'Trebuchet MS', Helvetica, sans-serif; color: rgba(195,0,255,0.89); text-align: center; -o-text-overflow: ellipsis; text-overflow: ellipsis; text-shadow: 5px 3px 6px rgba(0,0,0,0.89) ;");
	console.log();
	console.log("You can edit everything. But its isn't good!");
	cart("Developer");
}

function cb_grant(mon){
	money += mon;
}
function cb_take(mon){
	money -= mon;
}
function cb_dpcadd(mon){
	dpc += mon;
}
function cb_dpctake(mon){
	dpc -= mon;
}
function logbuy(item){
	console.log("Player bought "+item+"!");
}
function moneyTitle(){
	if(clickerTitle == 1){
		document.title = money+"$ | "+nameTitle;
	}
	else if(clickerTitle == 2){
		document.body.innerHTML = "";
		document.title = "no_title_sorry";
	}
	else {
		document.title = nameTitle;
	}
}
setInterval(moneyTitle, 50);

function cart(name){
	iziToast.show({
	id: 'info',
	title: 'You successfully bought',
	message: name,
	theme: 'dark',
	image: 'cart.png',
	position: 'topRight',
	timeout: 3000,
	progressBarColor: 'lime',
	layout: 2,
	});
}