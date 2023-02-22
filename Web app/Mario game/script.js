var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
let playerJump = 0;
let maxHeight = -90;
let minHeight = 0;
let enemyPos = canvas.width - 90
let names = '';
var button =  document.getElementById('button')
const backGround = new Image(0,0);
backGround.src = 'background.jpg';
function prints(text){
    console.log(text);
}

window.onload = function(){
    ctx.font = "35px Arial";
    ctx.fillText("Groden World",0 , 50);
    Player()
    enemy()
}


function start(){
    var start = setInterval(function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
       
        
        enemyPos -= 10;
        if(enemyPos == 0){
            enemyPos = canvas.width
        }
        Player();
        enemy()
        gameRule(start);
       
    }, 24)
    
    button.innerHTML = "<button onclick="+"jump()"+"; class="+"btn"+">Lompat</button>"
}



function enemy(){
    ctx.beginPath();
    ctx.rect(enemyPos, 200, 20, -20);
    ctx.stroke();
    ctx.fill();
}


function Player(){
    ctx.beginPath();
    ctx.rect(90, 200 + playerJump, 20, -50)
    ctx.stroke();
    ctx.fill()
}

const fallSpeed = 24;
const jumpSpeed = 24;

function jump(){
var jumpInterval = setInterval(function(){
    playerJump -= 15;
    if (playerJump == maxHeight){
    clearInterval(jumpInterval);
    setTimeout(() => {
        console.log("asd")
        var fallInterval = setInterval(function(){
            playerJump += 5;
            if (playerJump == minHeight){ clearInterval(fallInterval)}
        }, fallSpeed)
    }, 24);
   }
}, jumpSpeed)
}
let point = 0;
function gameRule(stp){
    if(enemyPos == 100 && playerJump == 0){
        console.log("yes")
        clearInterval(stp)
        gameOver()
       
    }else{
        ctx.font = "30px Arial";
        ctx.fillText("Score: "+point, 10, 50);
        point += 1;
    }
}
function gameOver(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    enemyPos = canvas.width - 90
    ctx.font = "35px Arial";
    ctx.fillText("Permainan Selesai",150 , 90);
    ctx.font = "30px Arial";

    ctx.fillText("Skor Anda: "+point,200 , 140);

    point = 0;    
    button.innerHTML = "<button onclick="+"start()"+"; class="+"btn"+">Ulangi</button>"

    
}

