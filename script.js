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
    turn0 = true;
    enable();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
     if(turn0 === true)
     {
        box.innerText = "0";
        turn0 = false;
     }
     else{
        box.innerText= "x";
        turn0 = true;
     }
     box.disabled = true;

     checkwinner();
    });
});


const disable = () =>   
{
    for (let box of boxes)
    {
        box.disabled = true;
    }
}

const enable = () =>   
{
    for (let box of boxes)
    {
        box.disabled = true;
        box.innerHTML = "";
    }
}


const showWinner = (winner) => {
    msg.innerText = (`congratulation, winner is ${winner}`);
    msgcontainer.classList.remove("hide");
    disable();
}


const checkwinner=() => {
    for (pattern of winnerpatterns)
    {
         let pos1Val = boxes[pattern[0]].innerText;
         let pos2Val = boxes[pattern[1]].innerText;
         let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
      

        showWinner(pos1Val);
    }
}
    }
}

newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);