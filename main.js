(function(){
   console.log(DATA) //
})()
function cookieClick(number){
    Mon = Mon + (0.01*number);
    document.getElementById("money").innerHTML = "Money: " + Mon.toExponential(3);
};
  //This script is for buying buildings and upgrades
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
        document.getElementById('money').innerHTML = Mon;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,DrinkingBird));       //works out the cost of the next cursor
    document.getElementById('DrinkingBirdCost').innerHTML = nextCost;  //updates the cursor cost for the user
};
window.setInterval(function(){
	
	cookieClick(DrinkingBird);
	
}, 1000);