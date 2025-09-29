let currentPlayer = "X";
const arr = Array(9).fill(null);
let gameOver = false;

function play(el) {
  const id = Number(el.id);
  if (gameOver || arr[id] !== null) return; // Prevent invalid moves

  arr[id] = currentPlayer;
  el.innerText = currentPlayer;

  if (checkWinner()) {
    alert(`Winner is ${currentPlayer}`);
    gameOver = true;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  console.log(currentPlayer);
}

function checkWinner() {
  if (
    (arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2]) ||
    (arr[3] !== null && arr[3] === arr[4] && arr[4] === arr[5]) ||
    (arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8]) ||
    (arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6]) ||
    (arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7]) ||
    (arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[8]) ||
    (arr[0] !== null && arr[0] === arr[4] && arr[4] === arr[8]) ||
    (arr[2] !== null && arr[2] === arr[4] && arr[4] === arr[6])
  ) {
    return true;
  }
  return false;
}
