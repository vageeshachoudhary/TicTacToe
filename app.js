let boxes = document.querySelectorAll(".box");
let resetbutton = document.getElementById("resetBtn");

let currentPlayer = "X";

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if(currentPlayer === "X" && box.innerText === "") {
      box.innerText = "X";
      currentPlayer = "O";
    } else if (currentPlayer === "O" && box.innerText === "") {
      box.innerText = "O";
      currentPlayer = "X";
    }
    checkWin();
  });
});

const checkWin = () => {
  winConditions.forEach((condition) => {
    const [a, b, c] = condition;
    if (
      boxes[a].innerText &&
      boxes[a].innerText === boxes[b].innerText &&
      boxes[a].innerText === boxes[c].innerText
    )
    {
      alert(`Player ${boxes[a].innerText} wins!`);
      resetGame();
    }
    else{
        let draw = true;
        boxes.forEach((box) => {
            if(box.innerText === ""){
                draw = false;
            }
        });
        if(draw){
            alert("It's a draw!");
            resetGame();
        }
    }
  });
};

const resetGame = () => {
  boxes.forEach((box) => {
    box.innerText = "";
  });
  currentPlayer = "X";
};

resetbutton.addEventListener("click", resetGame);
