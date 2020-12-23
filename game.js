let correctNum =getRandomNmuber();
let guesses=[];

window.onload =function(){
document.getElementById("submit").addEventListener("click",playGame);
document.getElementById("restart").addEventListener("click",initGame);
}

function playGame(){
    let guessNum = document.getElementById("number-guess").value;
    displayresult(guessNum);
    SaveHistory(guessNum);
    Displayhistory();
}

function initGame(){
// reset the correct number
//reset the result display
//reset the guesses array
//reset the guess history display
correctNum=getRandomNmuber();
document.getElementById("result").innerHTML="";
guesses=[];
Displayhistory();
}

function getRandomNmuber(){
    let randomNum = Math.random();
    let whooleNumber = Math.floor(randomNum*100)+1;
    return whooleNumber;

}

function displayresult(guessNum){
    if(correctNum<guessNum){
        AboveNum();
    }
    else if(correctNum > guessNum) {
        BelowNum();
    }
    else{
        ShowNumWOn();
    }
}
function getDialog(dialogType,text){
    let dialog;
    switch(dialogType){
        case  'won':
            dialog = '<div class="alert alert-success" role ="alert">'
            break;
        case 'warning' :
            dialog ='<div class="alert alert-warning" role="alert">'
            break;
    }
    dialog +=text;
    dialog +="</div>";
    return dialog;
}
function ShowNumWOn(){
  const text = "You got it!";
  let dialog =getDialog('won',text);
  document.getElementById("result").innerHTML= dialog;
}
function AboveNum(){
    const text = "your guess is Too High";
    let dialog =getDialog('warning',text);
    document.getElementById("result").innerHTML=dialog;

}
function BelowNum(){
    const text = "Your guess is Too low";
    let dialog = getDialog('warning', text);
    document.getElementById("result").innerHTML=dialog;
}

function SaveHistory(guess){
    guesses.push(guess);
}

function Displayhistory(){
    let index=(guesses.length)-1;
    let list= "<ul class ='list-group'>";
    while(index>=0){
     list+="<li class= 'list-group-item'>you guessed "+guesses[index]+"</li>";
     index--;
    }
    list+='</ul>';
    document.getElementById("history").innerHTML=list; 
}      