let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0 = true;

const winnerpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const resetgame = () =>
{
    // Start game with O's turn
    turn0 = true;
    // Clear board and enable boxes
    enable();
     // Hide winner message
    msgcontainer.classList.add("hide");
}

// add event listner on each button
boxes.forEach((box) => {
    box.addEventListener("click", () =>
    {
     if(turn0 === true)
     {
        box.innerText = "0";
        // set false so switch to x
        turn0 = false;
    }
    else{
        box.innerText= "x";
        // switch to 0
        turn0 = true;  
    }

    // Lock this box so it can't be clicked twice
     box.disabled = true;

    // Check if this move won the game
     checkwinner();
    });
});

// Lock all boxes when the game is over
const disable = () =>   
{
    for (let box of boxes)
    {
        box.disabled = true;
    }
}

// Unlock and clear all boxes for a fresh round
const enable = () =>   
{
    for (let box of boxes)
    {
        // Allow clicking again
        box.disabled = false;
        // Remove old O or X
        box.innerHTML = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = (`congratulation, winner is ${winner}`);

    // Remove hide class so message becomes visible
    msgcontainer.classList.remove("hide");
    // Stop players from clicking more boxes   
    disable();
}

// Scan the board to check if any player has matched a winning pattern
const checkwinner = () => {
     // Check every winning pattern one by one
    for (pattern of winnerpatterns)
    {
        // get value that store in each buttton
         let pos1Val = boxes[pattern[0]].innerText;
         let pos2Val = boxes[pattern[1]].innerText;
         let pos3Val = boxes[pattern[2]].innerText;

     // first we check buttons are not empty    
    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") 
    {
      // check all 3 button has same value  
      if (pos1Val === pos2Val && pos2Val === pos3Val) 
        {
        showWinner(pos1Val);
        }
    }
    }
}

// When the New Game button is clicked
// reset the complete game
newgamebtn.addEventListener("click", resetgame);
// When Reset button is clicked
// reset the complete game
resetbtn.addEventListener("click", resetgame);