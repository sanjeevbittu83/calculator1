function calculate(string){
	document.querySelector("#display").innerHTML = eval(string);
}
var string;
function disp(cur){
	if(cur == "=")
		calculate(string);
	else if(cur == "sqrt")
		document.querySelector("#display").innerHTML = Math.sqrt(string);
	else if(cur == "clear")
		document.querySelector("#display").innerHTML = "";
	else
		string = document.querySelector("#display").innerHTML += cur;
};
document.addEventListener("keypress", function(){
	if(event.key == "1")
		disp("1");
	if(event.key == "2")
		disp("2");
	if(event.key == "3")
		disp("3");
	if(event.key == "4")
		disp("4");
	if(event.key == "5")
		disp("5");
	if(event.key == "6")
		disp("6");
	if(event.key == "7")
		disp("7");
	if(event.key == "8")
		disp("8");
	if(event.key == "9")
		disp("9");
	if(event.key == "0")
		disp("0");
	if(event.key == "+")
		disp("+");
	if(event.key == "-")
		disp("-");
	if(event.key == "*")
		disp("*");
	if(event.key == "/")
		disp("/");
	if(event.key == "%")
		disp("%");
	if(event.key == ".")
		disp(".");
	if(event.key == "=")
		disp("=");
	if(event.key == "c")
		disp("clear");
	if(event.key == "s")
		disp("sqrt");
});
document.querySelector("#one").addEventListener("click", function(){
	disp("1");
});
document.querySelector("#two").addEventListener("click", function(){
	disp("2");
});
document.querySelector("#three").addEventListener("click", function(){
	disp("3");
});
document.querySelector("#four").addEventListener("click", function(){
	disp("4");
});
document.querySelector("#five").addEventListener("click", function(){
	disp("5");
});
document.querySelector("#six").addEventListener("click", function(){
	disp("6");
});
document.querySelector("#seven").addEventListener("click", function(){
	disp("7");
});
document.querySelector("#eight").addEventListener("click", function(){
	disp("8");
});
document.querySelector("#nine").addEventListener("click", function(){
	disp("9");
});
document.querySelector("#zero").addEventListener("click", function(){
	disp("0");
});
document.querySelector("#add").addEventListener("click", function(){
	disp("+");
});
document.querySelector("#subtract").addEventListener("click", function(){
	disp("-");
});
document.querySelector("#multiply").addEventListener("click", function(){
	disp("*");
});
document.querySelector("#divide").addEventListener("click", function(){
	disp("/");
});
document.querySelector("#decimal").addEventListener("click", function(){
	disp(".");
});
document.querySelector("#equals").addEventListener("click", function(){
	disp("=");
});
document.querySelector("#percent").addEventListener("click", function(){
	disp("%");
});
document.querySelector("#sqrt").addEventListener("click", function(){
	disp("sqrt");
});
document.querySelector("#clear").addEventListener("click", function(){
	disp("clear");
});