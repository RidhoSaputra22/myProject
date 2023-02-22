//createdBy: Ridho Saputra

var numberDisplay = "";
var consoleDisplay = "";
function displayNumber(num){
   
   numberDisplay += num;
   consoleDisplay += num;
   document.getElementById('num-display').innerHTML = numberDisplay;
   document.getElementById('test').innerHTML = consoleDisplay;
}

function AC(){

    numberDisplay = ""
    consoleDisplay = ""
    document.getElementById('num-display').innerHTML = "0";
    document.getElementById('test').innerHTML = "0";
}

function sum(){
    numberDisplay = ""
    consoleDisplay += " + "
    document.getElementById('num-display').innerHTML = "0";
    document.getElementById('test').innerHTML = consoleDisplay;
}

function sub(){

    numberDisplay = ""
    consoleDisplay += " - "
    document.getElementById('num-display').innerHTML = "0";
    document.getElementById('test').innerHTML = consoleDisplay;
}

function div(){

    numberDisplay = ""
    consoleDisplay += " / "
    document.getElementById('num-display').innerHTML = "0";
    document.getElementById('test').innerHTML = consoleDisplay;
}

function mul(){

    numberDisplay = ""
    consoleDisplay += " * "
    document.getElementById('num-display').innerHTML = "0";
    document.getElementById('test').innerHTML = consoleDisplay;
}

function equal(){
    let ans = eval(consoleDisplay);
    numberDisplay = ""
    numberDisplay += ans;
    consoleDisplay += " = " + numberDisplay;
    
    document.getElementById('num-display').innerHTML = numberDisplay
    document.getElementById('test').innerHTML = consoleDisplay
}

