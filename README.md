Describe: rollTheDice()

Test: Create a function that returns a random number between 1 and 6
Code: 
rollTheDice()
Expected Output: return random number

----------------------------------------------

rollTheDice(min, max)
min = math.ceil(1);
max = math.floor(6)
  return math.random()

on play:

use math.random() to generate a number between 1 and 6. 
If the player rolls 1, they take no points and pass the turn.
If the player rolls between 2-6, the player takes the points
and can choose to hold and pass the turn, or to roll again.

Player wins at 100pts

Player 1 and player 2 logic is separate?

Player 1 & 2 Objects:
-Total points

Dice Objects:
-functionality of dice for player 1





Player 2 
Dice object:
Will hold functionality of dice for player 2


Player 1 - Parent Object
  Total points
 Player1 Dice 


function Player(playerName)
  Total points

function rollTheDice()
const randomNumber1
const randomNumber2