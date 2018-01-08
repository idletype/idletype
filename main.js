(function(){
   console.log(DATA) //
})()
function cookieClick(numberA,numberB){
    Mon = Mon + (0.05*numberA)+ (0.5*numberB);
    if (Mon>1000){
        document.getElementById("money").innerHTML = "Money: " +
          Mon.toExponential(3);
      }else {document.getElementById("money").innerHTML = "Money: " + Mon.toFixed(2);
      }
    
};
  //This script is for buying items and upgrades
  //Items: drinking bird, monkey, cat, bot,  
  //Upgrades: typewriter, IBM Selectric typewriter, computer, wrist strap, brain to machine interface
  // Learn: typing with index finger, ambidextrous typing with all fingers, touchtyping, qwerty, dvorak, 
  
  //DrinkingBird
  if (localStorage.getItem("DrinkingBirdCost") == null){
  var nextACost = 10;}
  else {
    DrinkingBirdCost = JSON.parse(localStorage.getItem('DrinkingBirdCost'));
  }
  if (localStorage.getItem("DrinkingBird") == null){
  var DrinkingBird = 0;}
  else {
    DrinkingBird = JSON.parse(localStorage.getItem('DrinkingBird'));
  }
    function BuyDrinkingBird(){
    var DrinkingBirdCost = Math.floor(10 * Math.pow(1.1,DrinkingBird));     //works out the cost of this cursor
    if(Mon >= DrinkingBirdCost){                                   //checks that the player can afford the cursor
        DrinkingBird = DrinkingBird + 1;                             //increases number of cursors
        localStorage.setItem('DrinkingBird', JSON.stringify(DrinkingBird));
      Mon = Mon - DrinkingBirdCost;
      localStorage.setItem('Mon', JSON.stringify(Mon));                          //removes the cookies spent
        document.getElementById('DrinkingBird').innerHTML = DrinkingBird;  //updates the number of cursors for the user
        if (Mon>1000){
        document.getElementById("money").innerHTML = "Money: " +
          Mon.toExponential(3);
      }else {document.getElementById("money").innerHTML = "Money: " + Mon.toFixed(2);
      }    };
    var nextACost = Math.floor(10 * Math.pow(1.1,DrinkingBird));       //works out the cost of the next cursor
    document.getElementById('DrinkingBirdCost').innerHTML = nextACost;  //updates the cursor cost for the user
    localStorage.setItem('DrinkingBirdCost', JSON.stringify(DrinkingBirdCost));
};
//Monkey
if (localStorage.getItem("MonkeyCost") == null){
  var nextBCost = 100;}
  else {
    MonkeyCost = JSON.parse(localStorage.getItem('MonkeyCost'));
  }
  if (localStorage.getItem("Monkey") == null){
  var Monkey = 0;}
  else {
    Monkey = JSON.parse(localStorage.getItem('Monkey'));
  }
function BuyMonkey(){
    var MonkeyCost = Math.floor(100 * Math.pow(1.1,Monkey));     //works out the cost of this cursor
    if(Mon >= MonkeyCost){                                   //checks that the player can afford the cursor
        Monkey = Monkey + 1;                             //increases number of cursors
        localStorage.setItem('Monkey', JSON.stringify(Monkey));
      Mon = Mon - MonkeyCost;
      localStorage.setItem('Mon', JSON.stringify(Mon));                          //removes the cookies spent
        document.getElementById('Monkey').innerHTML = Monkey;  //updates the number of cursors for the user
        if (Mon>1000){
        document.getElementById("money").innerHTML = "Money: " +
          Mon.toExponential(3);
      }else {document.getElementById("money").innerHTML = "Money: " + Mon.toFixed(2);
      }    };
    var nextBCost = Math.floor(100 * Math.pow(1.1,Monkey));       //works out the cost of the next cursor
    document.getElementById('MonkeyCost').innerHTML = nextBCost;  //updates the cursor cost for the user
    localStorage.setItem('MonkeyCost', JSON.stringify(MonkeyCost));
};
window.setInterval(function(){
	localStorage.setItem('Mon', JSON.stringify(Mon));
	cookieClick(DrinkingBird,Monkey);
	//Drinking Bird
	document.getElementById('DrinkingBird').innerHTML = DrinkingBird;
	if (localStorage.getItem("DrinkingBirdCost") !== null){
	nextACost = Math.floor(10 * Math.pow(1.1,DrinkingBird));
	document.getElementById('DrinkingBirdCost').innerHTML = nextACost;
}
	//Monkey
	document.getElementById('Monkey').innerHTML = Monkey;
	if (localStorage.getItem("MonkeyCost") !== null){
	nextBCost = Math.floor(100 * Math.pow(1.1,Monkey));
	document.getElementById('MonkeyCost').innerHTML = nextBCost;
}
	if (Mon>1000){
        document.getElementById("money").innerHTML = "Money: " +
          Mon.toExponential(3);
      }else {document.getElementById("money").innerHTML = "Money: " + Mon.toFixed(2);
      }

	
}, 1000);