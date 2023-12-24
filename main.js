let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset_btn");
let newGameBtn = document.querySelector("#new_btn");
let message = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg_container")

let turnO = true; 

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {  /* PLAYER 1 // O  */
            box.innerText = "o";
            turnO = false;
        } else {  /* PLAYER 2 // X */
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
});

const checkWinner = () => {
    for (const pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congralutations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);