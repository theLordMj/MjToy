var player1=prompt("Enter the first player names");
var player2=prompt("Enter the second player names");
document.getElementById("player1Name").innerHTML=player1;
document.getElementById("player2Name").innerHTML=player2;
var player="player1"
var theList=["0","1","2","3","4","5","6","7","8"]
document.getElementById("player1").style.background="green";

function oneTes(){
  alert("HOLA")
}
function oneeo(){
  oneTes()
}

function winner(){
  if(theList[0]===theList[1] &&theList[0]===theList[2]){
    setTimeout(function(){
      alert("The "+theList[0]+" is win the game !!!")
    },200)
  }else if(theList[3]==theList[4] && theList[3]==theList[5]){
    setTimeout(function(){
      alert("The "+theList[3]+" is win the game !!!")
    },200)
  }else if(theList[6]==theList[7] && theList[6]==theList[8]){
    setTimeout(function(){
      alert("The "+theList[6]+" is win the game !!!")
    },200)
  }else if(theList[0]==theList[3] && theList[0]==theList[6]){
    setTimeout(function(){
      alert("The "+theList[0]+" is win the game !!!")
    },200)
  }else if(theList[1]==theList[4] && theList[1]==theList[7]){
    setTimeout(function(){
      alert("The "+theList[1]+" is win the game !!!")
    },200)
  }else if(theList[2]==theList[5] && theList[2]==theList[8]){
    setTimeout(function(){
      alert("The "+theList[2]+" is win the game !!!")
    },200)
  }else if(theList[0]==theList[4] && theList[0]==theList[8]){
    setTimeout(function(){
      alert("The "+theList[0]+" is win the game !!!")
    },200)
  }else if(theList[2]==theList[4] && theList[2]==theList[6]){
    setTimeout(function(){
      alert("The "+theList[2]+" is win the game !!!")
    },200)
  }
}

function card1(){
  if(player=="player1"){
    document.getElementById("card1").style.background="green";
    document.getElementById("name1").innerHTML=player1
    document.getElementById("player1").style.background="white";
    document.getElementById("player1Name").style.color="black"
    document.getElementById("player2").style.background="red";
    document.getElementById("player2Name").style.color="white"
    theList[0]=player1
    winner()
    player="player2"
  }else if(player=="player2"){
    document.getElementById("card1").style.background="red";
    document.getElementById("name1").innerHTML=player2
    document.getElementById("player2").style.background="white";
    document.getElementById("player2Name").style.color="black"
    document.getElementById("player1").style.background="green";
    document.getElementById("player1Name").style.color="white"
    theList[0]=player2
    winner()
    player="player1"
  }
}
function card2(){
  if(player=="player1"){
    document.getElementById("card2").style.background="green";
    document.getElementById("name2").innerHTML=player1
    document.getElementById("player1").style.background="white";
    document.getElementById("player1Name").style.color="black"
    document.getElementById("player2").style.background="red";
    document.getElementById("player2Name").style.color="white"
    theList[1]=player1
    winner()
    player="player2"
  }else if(player=="player2"){
    document.getElementById("card2").style.background="red";
    document.getElementById("name2").innerHTML=player2
    document.getElementById("player2").style.background="white";
    document.getElementById("player2Name").style.color="black"
    document.getElementById("player1").style.background="green";
    document.getElementById("player1Name").style.color="white"
    theList[1]=player2
    winner()
    player="player1"
  }
}
function card3(){
  if(player=="player1"){
    document.getElementById("card3").style.background="green";
    document.getElementById("name3").innerHTML=player1
    document.getElementById("player1").style.background="white";
    document.getElementById("player1Name").style.color="black"
    document.getElementById("player2").style.background="red";
    document.getElementById("player2Name").style.color="white"
    theList[2]=player1
    winner()
    player="player2"
  }else if(player=="player2"){
    document.getElementById("card3").style.background="red";
    document.getElementById("name3").innerHTML=player2
    document.getElementById("player2").style.background="white";
    document.getElementById("player2Name").style.color="black"
    document.getElementById("player1").style.background="green";
    document.getElementById("player1Name").style.color="white"
    theList[2]=player2
    winner()
    player="player1"
  }
}
function card4(){
  if(player=="player1"){
    document.getElementById("card4").style.background="green";
    document.getElementById("name4").innerHTML=player1
    document.getElementById("player1").style.background="white";
    document.getElementById("player1Name").style.color="black"
    document.getElementById("player2").style.background="red";
    document.getElementById("player2Name").style.color="white"
    theList[3]=player1
    winner()
    player="player2"
  }else if(player=="player2"){
    document.getElementById("card4").style.background="red";
    document.getElementById("name4").innerHTML=player2
    document.getElementById("player2").style.background="white";
    document.getElementById("player2Name").style.color="black"
    document.getElementById("player1").style.background="green";
    document.getElementById("player1Name").style.color="white"
    theList[3]=player2
    winner()
    player="player1"
  }
}
function card5(){
  if(player=="player1"){
    document.getElementById("card5").style.background="green";
    document.getElementById("name5").innerHTML=player1
    document.getElementById("player1").style.background="white";
    document.getElementById("player1Name").style.color="black"
    document.getElementById("player2").style.background="red";
    document.getElementById("player2Name").style.color="white"
    theList[4]=player1
    winner()
    player="player2"
  }else if(player=="player2"){
    document.getElementById("card5").style.background="red";
    document.getElementById("name5").innerHTML=player2
    document.getElementById("player2").style.background="white";
    document.getElementById("player2Name").style.color="black"
    document.getElementById("player1").style.background="green";
    document.getElementById("player1Name").style.color="white"
    theList[4]=player2
    winner()
    player="player1"
  }
}
function card6(){
  if(player=="player1"){
    document.getElementById("card6").style.background="green";
    document.getElementById("name6").innerHTML=player1
    document.getElementById("player1").style.background="white";
    document.getElementById("player1Name").style.color="black"
    document.getElementById("player2").style.background="red";
    document.getElementById("player2Name").style.color="white"
    theList[5]=player1
    winner()
    player="player2"
  }else if(player=="player2"){
    document.getElementById("card6").style.background="red";
    document.getElementById("name6").innerHTML=player2
    document.getElementById("player2").style.background="white";
    document.getElementById("player2Name").style.color="black"
    document.getElementById("player1").style.background="green";
    document.getElementById("player1Name").style.color="white"
    theList[5]=player2
    winner()
    player="player1"
  }
}
function card7(){
  if(player=="player1"){
    document.getElementById("card7").style.background="green";
    document.getElementById("name7").innerHTML=player1
    document.getElementById("player1").style.background="white";
    document.getElementById("player1Name").style.color="black"
    document.getElementById("player2").style.background="red";
    document.getElementById("player2Name").style.color="white"
    theList[6]=player1
    winner()
    player="player2"
  }else if(player=="player2"){
    document.getElementById("card7").style.background="red";
    document.getElementById("name7").innerHTML=player2
    document.getElementById("player2").style.background="white";
    document.getElementById("player2Name").style.color="black"
    document.getElementById("player1").style.background="green";
    document.getElementById("player1Name").style.color="white"
    theList[6]=player2
    winner()
    player="player1"
  }
}
function card8(){
  if(player=="player1"){
    document.getElementById("card8").style.background="green";
    document.getElementById("name8").innerHTML=player1
    document.getElementById("player1").style.background="white";
    document.getElementById("player1Name").style.color="black"
    document.getElementById("player2").style.background="red";
    document.getElementById("player2Name").style.color="white"
    theList[7]=player1
    winner()
    player="player2"
  }else if(player=="player2"){
    document.getElementById("card8").style.background="red";
    document.getElementById("name8").innerHTML=player2
    document.getElementById("player2").style.background="white";
    document.getElementById("player2Name").style.color="black"
    document.getElementById("player1").style.background="green";
    document.getElementById("player1Name").style.color="white"
    theList[7]=player2
    winner()
    player="player1"
  }
}
function card9(){
  if(player=="player1"){
    document.getElementById("card9").style.background="green";
    document.getElementById("name9").innerHTML=player1
    document.getElementById("player1").style.background="white";
    document.getElementById("player1Name").style.color="black"
    document.getElementById("player2").style.background="red";
    document.getElementById("player2Name").style.color="white"
    theList[8]=player1
    winner()
    player="player2"
  }else if(player=="player2"){
    document.getElementById("card9").style.background="red";
    document.getElementById("name9").innerHTML=player2
    document.getElementById("player2").style.background="white";
    document.getElementById("player2Name").style.color="black"
    document.getElementById("player1").style.background="green";
    document.getElementById("player1Name").style.color="white"
    theList[8]=player2
    winner()
    player="player1"
  }
}
