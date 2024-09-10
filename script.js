var timer=6;
var score=0;
var hitNum=0;

function incScore(){
    score+=10;
    document.querySelector('.scoreval').textContent = score;
}

function changehit(){
    hitNum = Math.floor(Math.random()*10);
    document.querySelector('.hitval').textContent = hitNum;
}

function runTimer(){
    var timeR = setInterval(function(){
        if(timer>0){  
            timer--;
            document.querySelector('.timerval').textContent=timer;
        }
        else {
            clearInterval(timeR);
            document.querySelector('.panelbot').innerHTML = `<h1>Game Over</h1>`;
        }
    },1000);
}

function bubbleform(){
    var cluster = "";

for(var i=1;i<=119;i++){
    var num = Math.floor(Math.random()*10);
    cluster += `<div class="bubble">${num}</div>` ;
}

document.querySelector('.panelbot').innerHTML = cluster;
}

document.querySelector('.panelbot').addEventListener("click", function(dets){
    var clickNum = Number(dets.target.textContent);
    console.log(clickNum);
    if(hitNum === clickNum){
        incScore();
        bubbleform();
        changehit();
    }
})

runTimer();
bubbleform();
changehit();