// HELLO FELLOW CODERS! WE WELCOME YOU TO THE WORLD OF JAVASCRIPT 

//----- We've curated this assignment for someone staring out in exploring the beauty of JavaScript and would urge you to go through the resources shared with you before you start with this. ----- // 

//Go through the CSS file as well to get a hold of all the attributes we've added. You're free to add some of your own and maybe delete some of ours xD

//The point is, we want you to have fun and use all the concepts while doing this task. In case of any doubts, feel free to reach out to us!

// Your main work would be here, in main.js and would advice you to also pay a visit to the scenario.js

// Life of the player and the hacker.
var playerLife = 5;
var hackerLife = 5;
var cardSelected=false;
var count=0;
var c=2;
// Message to be displayed when the game is over
var hackerWinnerMessage = "You have been defeated.";
var playerWinnerMessage = "Smart!Hacker has been arrested.";

          // ---------------Game code starts here ---------------//

// declare a few handy variables like we've done :p
var playerStartLife = parseInt(playerLife);
var hackerStartLife = parseInt(hackerLife);

// we will declare the functions for you and you will complete those 
updateScores();

// you learnt DOM manipulation right? here's an example of the same. Go ahead and use manipulate the DOM!
document.querySelector(".game-board").classList.add("before-game");

var allCardElementsArr = Array.from(document.querySelectorAll(".card"));
var hackerCard = document.querySelector(".hacker-card");
var playerCardsArr = Array.from(document.querySelectorAll(".player-card"));

playerCardsArr.forEach((el) => { 
  el.addEventListener("click", () => {
    console.log("check my card is clicked");
    cardClicked(el);
  });
});

// An example of a function that controls what would happen when a card is clicked
function cardClicked(cardEl)
 {
   console.log("hji5");
  if(cardSelected) { return; }
  cardSelected = true;

  count++;

  cardEl.classList.add("played-card");
  document.querySelector(".game-board").classList.add("card-selected");

  // Yes JS is cool and this would allow you to wait 500ms before revealing the hacker power
  setTimeout(function(){
    revealHackerPower();
  },500)

  setTimeout(function(){
    revealPlayerPower();
  },800)
  
  setTimeout(function(){
    compareCards();
  }, 1400);
}

// Now write a function that shows the power level on the player card
function revealPlayerPower(){
  var playerCard = document.querySelector(".played-card");
  playerCard.classList.add("reveal-power");
  console.log("player power revealing");
}

// Write a function that shows the power level on the hacker card
function revealHackerPower(){
  // var hackerCard = document.querySelector(".hacker-card");
  hackerCard.classList.add("reveal-power");
  console.log("hacker power revealing");
}
// Write a function to compare the cards. Here is where all your skills would come in handy! 
// P.S: We've added the 'disabled' attribute in the CSS file for the button and you should use it in case you want a certain element to just go away or 'vanish' at a certain  time. For eg: You'd definitely want the 'Next' button to go away after a player chooses a card right?

function compareCards()
{
  console.log("comparing the card");
  var playerCard = document.querySelector(".played-card");
  var playerPower=parseInt(playerCard.lastElementChild.innerText);
  var hackerPower=parseInt(hackerCard.lastElementChild.innerText);
  if(playerPower>hackerPower)
  {
    c=0;
    hackerLife=hackerLife-(playerPower-hackerPower);
    hackerCard.classList.add("worse-card");
    playerCard.classList.add("better-card");
    console.log( "hackerLife is:");
    console.log( hackerLife);
  }
  else
  {
    c=1;
    playerLife=playerLife-(hackerPower-playerPower);
    hackerCard.classList.add("better-card");
    playerCard.classList.add("worse-card");
    console.log( "plakerLife is:");
    console.log( playerLife);
  }

  updateScores();
  gameOver();
  // setTimeout(function(){
  //   restartGame();
  // },2000)
  // playTurn();
  console.log("scores has been updated");
}

//Use conditional statements and complete the function that shows the winner message
function gameOver() 
{
  console.log("gameover initial");
  if(playerLife <= 0)
  {
    document.querySelector(".winner-section").style.display = "block";
    document.querySelector(".next-turn").style.display = "none";
    document.querySelector(".winner-message").innerHTML = hackerWinnerMessage;
    console.log("gameover");
    restartGame();
  }
  else if(hackerLife <= 0)
  {
    document.querySelector(".winner-section").style.display = "block";
    document.querySelector(".next-turn").style.display = "none";
    document.querySelector(".winner-message").innerHTML = playerWinnerMessage;
    console.log("gameover");
    restartGame();
  }
}

// Write a function that starts the game
function startGame() 
{
  console.log("start the game");
  document.querySelector(".game-board").classList.remove("before-game");
  document.querySelector(".game-board").classList.add("during-game");
  playTurn();
}

// We've also used a cool life bar that displays the life left. Write a function that updates the displayed life bar and life totals
// use innerHTML and a lot of other cool things to do this. 
function updateScores()
{
  // Here these update life totals for each player
  document.querySelector(".player-stats .life-total").innerHTML = playerLife;
  document.querySelector(".hacker-stats .life-total").innerHTML = hackerLife;

  // We've added the code to update the player lifebar
  var playerPercent = playerLife / playerStartLife * 100;
  if (playerPercent < 0)
   {
    playerPercent = 0;
  }
  document.querySelector(".player-stats .life-left").style.height =  playerPercent + "%";

  // Now you write the code to update the hacker lifebar
  // done the task
  var hackerPercent = hackerLife / hackerStartLife * 100;
  if (hackerPercent < 0) 
  {
    hackerPercent = 0;
  }
  document.querySelector(".hacker-stats .life-left").style.height =  hackerPercent + "%";
}

function restartGame()
{
  playerLife = 5;
  hackerLife = 5;
  cardSelected=false;
  count=0;
  c=0;
console.log("NEW GAME");
}

function playTurn() 
{
  console.log("count is :");
  console.log(count);
  cardSelected = false;
  var playerCard = document.querySelector(".played-card");
  var hackerCard = document.querySelector(".hacker-card");

  if(c==0)
  {
    hackerCard.classList.remove("worse-card");
    playerCard.classList.remove("better-card");
    console.log("removed tags1");

    playerCard.classList.remove("reveal-power");
  hackerCard.classList.remove("reveal-power");

  var playerCard = document.querySelector(".played-card");
  playerCard.classList.remove("played-card");

  document.querySelector(".game-board").classList.remove("card-selected");
  hackerCard.classList.remove("showCard");

    playerCardsArr.forEach((el) => { 
  el.classList.remove("showCard");}); 
  }
  else if(c==1)
  {
    hackerCard.classList.remove("better-card");
    playerCard.classList.remove("worse-card");
    console.log( "removed tags2");

    playerCard.classList.remove("reveal-power");
  hackerCard.classList.remove("reveal-power");

  var playerCard = document.querySelector(".played-card");
  playerCard.classList.remove("played-card");

  document.querySelector(".game-board").classList.remove("card-selected");
  hackerCard.classList.remove("showCard");

    playerCardsArr.forEach((el) => { 
  el.classList.remove("showCard");}); 
  }

    setTimeout(function(){
      prrer();
    },1000)
    function prrer(){
      playerCardsArr.forEach((el) => { 
        el.classList.add("showCard");});
       console.log("showing 2nd one");
    }

    setTimeout(function(){
      her();
    },400)
    function her(){
      hackerCard.classList.add("showCard");
       console.log("showing 2nd one");
    }

  hackerCard.firstElementChild.innerText = scenarios[count].hackerCard.description;
  hackerCard.lastElementChild.innerText = scenarios[count].hackerCard.power;

  playerCardsArr[0].firstElementChild.innerText = scenarios[count].playerCards[0].description;
  playerCardsArr[1].firstElementChild.innerText = scenarios[count].playerCards[1].description;
  playerCardsArr[2].firstElementChild.innerText = scenarios[count].playerCards[2].description;
  
  playerCardsArr[0].lastElementChild.innerText = scenarios[count].playerCards[0].power;
  playerCardsArr[1].lastElementChild.innerText = scenarios[count].playerCards[1].power;
  playerCardsArr[2].lastElementChild.innerText = scenarios[count].playerCards[2].power;
}