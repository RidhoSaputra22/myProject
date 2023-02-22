


function printThis(){
    document.getElementById('status-a').innerHTML = 
    "No. Rek: " + id[0] + "<br>" +
    "Saldo: " + balance[0] + "<br><br>" + "<button class="+"btn border border-dark; "+" onclick="+"andySend()"+">Send</button>";
    document.getElementById('status-s').innerHTML = 
    "No. Rek: " + id[1] + "<br>" +
    "Saldo: " + balance[1]+ "<br><br>" + "<button class="+"btn border border-dark; "+"onclick="+"sarahSend()"+">Send</button>";
    document.getElementById('status-g').innerHTML = 
    "No. Rek: " + id[2] + "<br>" +
    "Saldo: " + balance[2]+ "<br><br>" + "<button class="+"btn border border-dark; "+"onclick="+"geraldSend()"+">Send</button>";

}
// Data Base : )
var id = ["001", "002", "003"];
var balance = [100, 200, 300]
var names = ["Andy", "Sarah", "Gerald"]
let message = '';
let msgIndex = 0;
function messageLog(command){
    message += command;
    document.getElementById('list').innerHTML = message;
    if (msgIndex == 8) {message = ''; msgIndex = 0}
}
let x = 0;
function refresh(){
    messageLog((x == 0) ? '<li> Start </li>' : '<li> Refresh </li>')
    printThis()
    document.getElementById('start').innerHTML = "Refresh";
    msgIndex += 1;
    x += 1;
    chartUpdate()
}

let i, send;
function findUser(idThis,index){
    if(id[index] != idThis) {
        switch (idThis) {
            case "001":
                send = prompt("tujuan: Andy;\nJumlah?")
                i = 0;
                break;
            case "002":
                send = prompt("tujuan: Sarah;\nJumlah?")
                i = 1;
                break;
            case "003":
                send = prompt("tujuan: Gerald;\nJumlah?")
                i = 2;
                break;
            default:
                messageLog("<li>User not Found!!")
                break;
        }
    }else{
        window.alert("Rekening tak boleh sama!");
        messageLog("<li> Same Id </li>");
        msgIndex += 1;

    } 
}
function teller(userIndex, findUserIndex){
    
    if (send == undefined) send = 0;
    if(balance[userIndex] < Number(send)){
        window.alert("Insuficient Balance"); 
        messageLog("<li> Insuficient Balance </li>");
    }else{    
        balance[findUserIndex] += Number(send);
        balance[userIndex] -= Number(send);
        messageLog("<li> "+send+"$ has been Sent into "+names[i]+" account </li>");
    }
    printThis();
}
let andyPoint = 0, sarahPoint = 0, geraldPoint = 0;

function andySend(){
    let idSend = prompt("Masukkan No. Rek tujuan ");
    if (idSend != '' && idSend != null){
        findUser(idSend, 0);
        messageLog("<li> Andy is sending "+send+"$ into "+names[i]+" account </li>")
        teller(0, i);
        andyPoint += 1;
        chartUpdate()
    }else{
        messageLog("<li> No Input!! </li>")
    }
    
   
}

function sarahSend(){
    let idSend = prompt("Masukkan No. Rek tujuan ");
    if (idSend != '' && idSend != null){
    findUser(idSend, 1);
    messageLog("<li> Sarah is sending "+send+"$ into "+names[i]+" account </li>")
    teller(1, i);
    sarahPoint += 1;
    chartUpdate()
    }else{
        messageLog("<li> No Input!! </li>")
    }
    
}

function geraldSend(){
    let idSend = prompt("Masukkan No. Rek tujuan ");
    if (idSend != '' && idSend != null){
    findUser(idSend, 2);
    messageLog("<li> Gerald is sending "+send+"$ into "+names[i]+" account </li>")
    teller(2, i);
    geraldPoint += 1;
    chartUpdate()
    }else{
        messageLog("<li> No Input!! </li>")
    }
}

function clearLog(){
    message = '';
    msgIndex = 0;
    document.getElementById('list').innerHTML = message;
   
}
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Andy', 'Sarah', 'Gerald'],
    datasets: [{
      label: 'Highest transaction',
      data: [0, 0, 0],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

let buttonId = '';

function transactionChart(){
    buttonId = 't';
    chartUpdate()
}

function balanceChart(){
    buttonId = 'b';
    chartUpdate()
}


function chartUpdate(){
  switch (buttonId) {
    case 't':
        myChart.data.datasets[0] = 
        {   label: 'Highest transaction',
            data: [andyPoint, sarahPoint, geraldPoint],
            borderWidth: 1
        }
        break;
    case 'b':
        myChart.data.datasets[0] = 
        {   label: 'Highest Balance',
            data: [balance[0], balance[1], balance[2]],
            borderWidth: 1
        }
    default:
        break;
  }
myChart.update()
}

