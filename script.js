var valueOne = "";
var valueTwo = "";
var pairsCount = 0;
var mistakesCount = 0;
var textP1 = "";
var textP2 = "";
var p1 = "";
var p2 = "";
var cardsPicked = 0;
var cardNum = [];
var scoreP1 = 0;
var scoreP2 = 0;
var playerTurn = 1;
var timeBegin;
var timeEnd;
var playersTotal;
var newCardNum;
var numOfCards;
var cardMode;
function loadBoxes(){
	playersTotal = localStorage.getItem("players");
	timeBegin = new Date();
		var flip = document.getElementById("flip");
		flip.className+="flip";
		flip.innerHTML= "<span>" + "Flip" + "</span>";
		if(playersTotal==1){
			var not=document.getElementById("notPairs");
			not.classList.add("notPairs");
			document.getElementById("notPairs").innerHTML="Not Pairs" + "  " +mistakesCount;
		}else if (playersTotal==2){
			var c = document.getElementById("p1");
			c.classList.add("p1");
			var c = document.getElementById("p2");
			c.classList.add("p2")
		var nameOne = localStorage.getItem("inputOne");
			document.getElementById("p1").innerHTML=nameOne + "\'s Score"
	 + "<br>" +scoreP1;
	var nameTwo = localStorage.getItem("inputTwo");
	 document.getElementById("p2").innerHTML= nameTwo + "\s Score"
	 + "<br>" +scoreP2;
			showPlayer1();
		}
		if(window.location.href=="http://localhost/boxes24.html"){
			shuffle(24);
			cardMode=24;
		}else if(window.location.href=="http://localhost/boxes10.html"){
			shuffle(10);
			cardMode=10;
		}else if(window.location.href=="http://localhost/boxes52.html"){
			shuffle(52);
			cardMode=52;
		}

}
function getVal(playerNum){
	playersTotal = playerNum;
if(playerNum==1){
	 var inputOne=document.getElementById("name1Input");
	 var inputTwo=document.getElementById("name2Input");
	 valueOne=inputOne.value;
	 valueTwo=inputTwo.value;
	 if(valueOne===""){
		 alert("Please enter P1 Name");
		 document.getElementById("name1Input").className+="redBg";
	 }else{
		localStorage.setItem("valueOne", valueOne);
		localStorage.setItem("players", 1);
		var x =-1;
		x=prompt("How many cards: 10, 24, or 52?");
		if(x!=10&&x!=24&&x!=52){
			x=-1;
		}else if(x==24){
			window.location.href = "boxes24.html";
		}else if(x==10){
			window.location.href = "boxes10.html";
		}else if(x==52){
			window.location.href = "boxes52.html";
		}
		
	 }
}else if(playerNum==2){
	 playerTurn=1;
	 var inputOne=document.getElementById("name1Input");
	 var inputTwo=document.getElementById("name2Input");
	 valueOne=inputOne.value;
	 valueTwo=inputTwo.value;
	 if(valueOne=="" && valueTwo==""){
		 alert("Please enter both names");
		 inputOne.classList.add("redBg");
		 inputTwo.classList.add("redBg");
	 } else if(valueOne==""){
		alert("Please enter player 1's name");
		inputOne.classList.add("redBg");
	 } else if(valueTwo==""){
		alert("Please enter player 2's name");
		inputTwo.classList.add("redBg");
	 }
	 else{
		localStorage.setItem("players", 2);
		localStorage.setItem("inputOne", valueOne);
		localStorage.setItem("inputTwo", valueTwo);
		var x =-1;
		x=prompt("How many cards: 10, 24, or 52?");
		if(x!=10&&x!=24&&x!=52){
			x=-1;
		}else if(x==24){
			window.location.href = "boxes24.html";
		}else if(x==10){
			window.location.href = "boxes10.html";
		}else if(x==52){
			window.location.href = "boxes52.html";
		}
	 }
 }

}

 // function updatePlayerScore(){
	//  document.getElementById("p1").innerHTML="Player 1 Score"
	//  + "<br>" +scoreP1;
	//  document.getElementById("p2").innerHTML="Player 2 Score"
	//  + "<br>" +scoreP2;
 // }
 function changeBg(x){
	var bg=document.getElementById("bg1");

				 bg.classList.remove("bg1");
// 			}
// 		
				bg.classList.remove("bg2");
// 		 	}
// 			if (hasClass(bg, "bg3")){
				bg.classList.remove("bg3");
// 			}
			bg.classList.add(x);
		}
 function hideHome(){
	var element=["Title","label1", "label2", "name1Input", "name2Input", "HighScore","Rules","OnePlayer", "TwoPlayer"];
for (var i=0;i<element.length;i++){
		var ay=document.getElementById(element[i]);
		ay.classList.add("hid");
	}
}
function hasClass(element, clas){
	return (element.className).indexOf(clas) > -1;
}
function shuffle(x){
	if(x==24){
		for(var i=1;i<=12;i++){
			if(i==1){
				cardNum.push("Ace");
			}else if(i==11){
				cardNum.push("Jack");
			}else if(i==12){       
			cardNum.push("Queen");
			}else if(i==13){
				cardNum.push("King");
			}else{
			cardNum.push(i);
			}
		}
		cardNum = cardNum.concat(cardNum);
		newCardNum = cardNum;
		numOfCards = newCardNum.length;        
	}else if(x==10){
		for(var i=1;i<=5;i++){
			if(i==1){
				cardNum.push("Ace");
			}else if(i==11){
				cardNum.push("Jack");
			}else if(i==12){       
			cardNum.push("Queen");
			}else if(i==13){
				cardNum.push("King");
			}else{
			cardNum.push(i);
			}
		}
		cardNum = cardNum.concat(cardNum);
		newCardNum = cardNum;
		numOfCards = newCardNum.length; 
	}else if(x==52){
		for(var i=1;i<=13;i++){
			if(i==1){
				cardNum.push("Ace");
			}else if(i==11){
				cardNum.push("Jack");
			}else if(i==12){       
			cardNum.push("Queen");
			}else if(i==13){
				cardNum.push("King");
			}else{
			cardNum.push(i);
			}
		}
		cardNum = cardNum.concat(cardNum);
		cardNum = cardNum.concat(cardNum);
		newCardNum = cardNum;
		numOfCards = newCardNum.length; 
	}
	//newCardNum, cardNum both equal 1-10 
	cardNum=[];
	for (var i=0;i<numOfCards;i++){//0-19
		var newone=[];//temp array
		var rand=Math.floor(Math.random()*newCardNum.length);//random number 
		var x=false;
		cardNum[i]=newCardNum[rand];//add a random number from temp array to the perm array
		for(var b=0;b<newCardNum.length-1;b++){//0 to the index of the temp array -1 (excludes the random card picked)
			  if(b!=rand){//if you're on the index of the random card then skip it
				if(x){//if you've already been on the index of rand
					  newone[b]=newCardNum[b+1];
				}
				else{//if you haven't been on index of rand add the card
					  newone[b]=newCardNum[b];
					}
			  }else{ 
				if(newCardNum.length>0){//skip the card
					newone[b]=newCardNum[b+1];
					x=true;
				}
				}
			}
			newCardNum=newone;// update the temp array
  }
   console.log(cardNum);
}
function switcho(y){
	var num=0;
	switch(y){
			case "box1":
				num=0;
			break;
			case "box2":
				num=1;
			break;
			case "box3":
				num=2;
			break;
			case "box4":
				num=3;
			break;
			case "box5":
				num=4;
			break;
			case "box6":
				num=5;
			break;
			case "box7":
				num=6;
			break;
			case "box8":
				num=7;
			break;
			case "box9":
				num=8;
			break;
			case "box10":
				num=9;
			break;
			case "box11":
				num=10;
			break;
			case "box12":
				num=11;
			break;
			case "box13":
				num=12;
			break;
			case "box14":
				num=13;
			break;
			case "box15":
				num=14;
			break;
			case "box16":
				num=15;
			break;
			case "box17":
				num=16;
			break;
			case "box18":
				num=17;
			break;
			case "box19":
				num=18;
			break;
			case "box20":
				num=19;
			break;
			case "box21":
				num=20;
			break;
			case "box22":
				num=21;
			break;
			case "box23":
				num=22;
			break;
			case "box24":
				num=23;
			break;
			case "box25":
				num=24;
			break;
			case "box26":
				num=25;
			break;
			case "box27":
				num=26;
			break;
			case "box28":
				num=27;
			break;
			case "box29":
				num=28;
			break;
			case "box30":
				num=29;
			break;
			case "box31":
				num=30;
			break;
			case "box32":
				num=31;
			break;
			case "box33":
				num=32;
			break;
			case "box34":
				num=33;
			break;
			case "box35":
				num=34;
			break;
			case "box36":
				num=35;
			break;
			case "box37":
				num=36;
			break;
			case "box38":
				num=37;
			break;
			case "box39":
				num=38;
			break;
			case "box40":
				num=39;
			break;
			case "box41":
				num=40;
			break;
			case "box42":
				num=41;
			break;
			case "box43":
				num=42;
			break;
			case "box44":
				num=43;
			break;
			case "box45":
				num=44;
			break;
			case "box46":
				num=45;
			break;
			case "box47":
				num=46;
			break;
			case "box48":
				num=47;
			break;
			case "box49":
				num=48;
			break;
			case "box50":
				num=49;
			break;
			case "box51":
				num=50;
			break;
			case "box52":
				num=51;
			break;
		}
		var x=document.getElementById(y);
		x.innerHTML=cardNum[num];
}
function check(x){
  if (cardsPicked<2){
	if (cardsPicked===0){
		switcho(x);
	  if (textP1!=x){
		p1 = document.getElementById(x).innerHTML;
		textP1 = x;
		cardsPicked = cardsPicked+1;
	  }
	}
	else if((cardsPicked==1)){
		switcho(x);
	  if (textP1!=x){
		p2 = document.getElementById(x).innerHTML;
		textP2 = x;
		cardsPicked = cardsPicked+1;
	  }
	}
  }
}
function hideBoxes(){
			var one= document.getElementById(textP1);
			var two= document.getElementById(textP2);
			two.classList.remove(textP2);
			two.classList.add("hidO");
			one.classList.remove(textP1);
			one.classList.add("hidO");		
	}
	function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
	 end = new Date().getTime();
  }
}
function flip(){
	if (cardsPicked==2){
		if (p1==p2){
			if(playersTotal==2){
				if(playerTurn==1){
					scoreP1+=1;
				}else if (playerTurn=2){
					scoreP2+=1;
				}
				// updatePlayerScore(); 
	 document.getElementById("p1").innerHTML="Player 1 Score"
	 + "<br>" +scoreP1;
	 document.getElementById("p2").innerHTML="Player 2 Score"
	 + "<br>" +scoreP2;
			}	
			hideBoxes();
			cardsPicked = 0;
			textP1 = "";
			textP2 = "";
			p1 = "";
			p2 = "";
			pairsCount = pairsCount+1;
			if(window.location.href=="http://localhost/boxes24.html"){
				if (pairsCount==12){
					if(playersTotal==1){
						var newDate = new Date();
						timeEnd=Math.round((newDate-timeBegin)/1000);
						alert("You win!");
						window.location.href="index.php?w1=" + localStorage.getItem("valueOne") + "&w2=" + timeEnd +"&w3=" + cardMode;
					}else{
						if(scoreP1>scoreP2){
							alert("Player 1 wins");
						}else if(scoreP2>scoreP1){
							alert("Player 2 wins"); 
						}else{
							alert("Tie"); 
						}
						window.location.href="index.php";                                                
					}
					reset();           
				}
			}else if(window.location.href=="http://localhost/boxes10.html"){
				if (pairsCount==5){
					if(playersTotal==1){
						var newDate = new Date();
						timeEnd=Math.round((newDate-timeBegin)/1000);
						alert("You win!");                                            
						reset();           
						window.location.href="index.php?w1=" + localStorage.getItem("valueOne") + "&w2=" + timeEnd +"&w3=" + cardMode;
					}else{
						if(scoreP1>scoreP2){
							alert("Player 1 wins");
						}else if(scoreP2>scoreP1){
							alert("Player 2 wins"); 
						}else{
							alert("Tie"); 
						}                                          
						window.location.href="index.php";   
					}
						reset();                             
				}  
			}else if(window.location.href=="http://localhost/boxes52.html"){
				if (pairsCount==26){
					if(playersTotal==1){
						var newDate = new Date();
						timeEnd=Math.round((newDate-timeBegin)/1000);
						alert("You win!");
						window.location.href="index.php?w1=" + localStorage.getItem("valueOne") + "&w2=" + timeEnd +"&w3=" + cardMode;
					}else{
						if(scoreP1>scoreP2){
							alert("Player 1 wins");
						}else if(scoreP2>scoreP1){
							alert("Player 2 wins"); 
						}else{
							alert("Tie"); 
						}
						window.location.href="index.php";                                                
					}
					reset();           
				}    
			}
		}else{
			var elementArr=["box1","box2","box3","box4","box5","box6","box7","box8","box9","box10","box11","box12","box13","box14",
			"box15","box16","box17","box18","box19","box19","box20","box21","box22","box23","box24","box25","box26","box27","box28",
			"box29","box30","box31","box32","box33","box34","box35","box36","box37","box38","box39","box40","box41","box42","box43","box44","box45",
			"box46", "box47","box48","box49","box50","box51","box52"];
			try{
				for (var i=0;i<elementArr.length;i++){
					 var ay=document.getElementById(elementArr[i]);
					 ay.innerHTML="";
				}
			}catch(error){}
			if(playersTotal==1){
				mistakesCount = mistakesCount+1;
			document.getElementById("notPairs").innerHTML="Not Pairs" + "  " +mistakesCount;
			}
			cardsPicked = 0;
			textP1 = "";
			textP2 = "";
			p1 = "";
			p2 = "";
		if(playersTotal==2){
			if(playerTurn==1){
				showPlayer2();
				playerTurn=2;				
			}else{
				showPlayer1();
				playerTurn=1				
			}
		}
   //      else{
   //          if(window.location.href=="http://localhost/boxes24.html"){
   //              if (mistakesCount==16){
   //              alert("You lose :(");
   //              window.location.href="index.php";
   //              reset();
   //              }
   //          }else if(window.location.href=="http://localhost/boxes10.html"){
   //              if (mistakesCount==4){
   //              alert("You lose :(");
   //              window.location.href="index.php";
   //              reset();
   //              }
   //          }else if(window.location.href=="http://localhost/boxes52.html"){
   //              if (mistakesCount==40){
   //              alert("You lose :(");
   //              window.location.href="index.php";
   //              reset();
   //              }
   //          }
			// }
		}
	}
}
function back(){
	reset();
	window.location.href="index.php";
}
function rules(){
	hideHome();
	var x = document.getElementById("bg1");
	x.classList.remove("bg1");
	x.classList.add("bg3");
	var dd=document.getElementById("new");
	dd.classList.add("new");
	dd.innerHTML="Rules";
		var b= document.getElementById("instructions");
		b.classList.add("instructions");
		b.innerHTML = "Match cards in pairs! "
+ "You can click up to two cards a time. " + "<br>"
// + "For single player, when you pick the wrong pair, a Not Pair is added. " + "<br>"
+ "After getting a set number of \"not pairs,\" the game is reset. " + "<br>"
+ "The \"flip\" button sets the cards face down after your guess. " + "<br>"
+ "Match all pairs or more pairs than your opponent to win!" + "<br>";
// + "8 card mode: 4," + " 24 card mode: 16," + " 52 card mode: 40 notPairs." + "<br>";
var c= document.getElementById("backRules");
c.classList.add("backRules");
c.innerHTML = "Back";
}
function backRules(){
	var b=document.getElementById("backRules");
	var element=["backRules","instructions","new"];
for (var i=0;i<element.length;i++){
		var ay=document.getElementById(element[i]);
				var b=ay.className.split(' ');
				for (var k=0;k<b.length;k++){
			ay.classList.remove(b[k]);
					ay.innerHTML="";
				}
	}
		changeBg("bg1");
		showHome();
}
function showHome(){
	var element=["Title","label1", "label2", "name1Input", "name2Input", "HighScore","Rules","OnePlayer","TwoPlayer"];
for (var i=0;i<element.length;i++){
		var ay=document.getElementById(element[i]);
		ay.classList.remove("hid");
	}
}

function reset(){
	scoreP1=0;
	scoreP2=0;
	//twoPlayer = false;
	playerTurn = 1;
	//hideBoxes();
	valueOne="";
	valueTwo="";
	//document.getElementById("name1Input").value = "";
	// document.getElementById("name1Input").classList.remove("redBg");
	// document.getElementById("name2Input").value = "";
	document.getElementById("notPairs").innerHTML = "0";
	cardNum = ["1","2","3","4"];
	newCardNum = cardNum.concat(cardNum);
	numOfCards = newCardNum.length;
	shuffle();
  textP1 = "";
  textP2 = "";
  p1 = "";
  p2 = "";
  cardsPicked = 0;
  pairsCount = 0;
  mistakesCount = 0;
	}
function showPlayer1(){
		var two = document.getElementById("turnP2");
		two.classList.remove("turnP2");
		two.innerHTML="";
		var one = document.getElementById("turnP1");
		one.classList.add("turnP1");
		one.innerHTML = "Player 1's Turn";
}
function showPlayer2(){
		var a = document.getElementById("turnP1");
		a.classList.remove("turnP1");
		a.innerHTML="";
		var b = document.getElementById("turnP2");
		b.classList.add("turnP2");
		b.innerHTML = "Player 2's Turn";
}
