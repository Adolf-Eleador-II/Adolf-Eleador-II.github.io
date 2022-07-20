
var needTime = 10 * 1000;

function timerCard(element){
    element.setAttribute("onclick", "useCow(this)");
    element.innerHTML = "Send to the meadow";
    increment();
    var elementTime=element.closest("div").querySelector(".cardTimer");
    var countDownDate = new Date().getTime();
    countDownDate+=needTime;

    var countdownfunction = setInterval(function() {

        var now = new Date().getTime();
        var distance = countDownDate - now;
        findMinTimer(distance);
        elementTime.innerHTML = timeConvector(distance);
        
        if (distance < 0) {
            clearInterval(countdownfunction);
            elementTime.innerHTML = "Click now!";
            element.innerHTML = "Click me";
            element.setAttribute("onclick", "timerCard(this)");
        }
    }, 250);
}

function timeConvector(time){
    if(time<=0 || time > needTime)
        return "Click now!";
    var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((time % (1000 * 60)) / 1000);
    var text = hours + "h " + minutes + "m " + seconds + "s";
    return text;
}

function useCow(element){
    var elementCow = element.closest("div.column.cardWoodContent").querySelector(".cardCow");
    var headerCow = document.getElementById("clickHeaderCow");
    headerCow.src = elementCow.src;
    var pastureYourCow = document.getElementById("yourCow");
    pastureYourCow.src = elementCow.src;
}

var countTimer = needTime+1;
var countMooney = 1;
var countClick = 0;
var countClickWeek = 0;

setInterval(function (){
    var statTimerText = timeConvector(countTimer);
    statTimer = document.getElementById("statTimer");
    statTimer.innerHTML = statTimerText;
    statHeaderTimer = document.getElementById("headerTimer");
    statHeaderTimer.innerHTML = statTimerText;
    statMooney = document.getElementById("statMooney");
    statMooney.innerHTML = countMooney;
    statClick = document.getElementById("statClick");
    statClick.innerHTML = countClick;
    statClickWeek = document.getElementById("statClickWeek");
    statClickWeek.innerHTML = countClickWeek;
}, 250)

function findMinTimer(newTime){
    var timerArray = document.getElementsByClassName("cardTimer");
    var clickTime=false;
    var i;
    for (i = 0; i < timerArray.length; i++) {
        if(timerArray[i].innerHTML == "Click now!"){
            countTimer = needTime+1;
            clickTime = true;
        }
    }
    if(!clickTime){
        if(countTimer > newTime){
            countTimer = newTime;
        }
        if(countTimer == 0){
            countTimer = needTime+1;
            clickTime=true;
        }
    }
}

function increment(){
    ++countMooney;
    ++countClick;
    ++countClickWeek;
}

function allowBuy(element, cost, id){
    if(countMooney>=cost){
        countMooney = countMooney-cost;
        var cardWood = document.getElementById("barn" + id);
        cardWood.setAttribute("onclick", "timerCard(this)");
        cardWood.innerHTML="Click me";
        var elementTime = cardWood.closest("div").querySelector(".cardTimer");
        elementTime.innerHTML = "Click now!";
        var elementCow = cardWood.closest("div.column.cardWoodContent").querySelector(".cardCow");
        elementCow.setAttribute("onclick", "clickCowImg(this)");
        removeCardId("buy" + id)
        document.getElementById("barnOpen").click();
    }
    else{
        var buyText = element.closest("div").querySelector(".costCow");
        buyText.style.color="red";
        setTimeout(function(){buyText.style = "none";},5000)
    }
}

function clickCowImg(element){
    var button = element.closest("div.column.cardWoodContent").querySelector(".buttonWood");
    button.click();
}

function buyGo(id){
    document.getElementById("buyOpen").click();
    var element = document.getElementById("buy" + id);
    element.style.border = "3px solid green";
    setTimeout(function(){element.style.border = "1px solid black";},10000)
}

