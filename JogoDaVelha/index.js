const header = document.querySelector("header");
const ul = document.getElementById("actualPlayer");
const li = document.createElement("li");
const name1 = document.getElementById("nameOfPlayer1");
const name2 = document.getElementById("nameOfPlayer2");

function playerName() {
  if (header.dataset.name === "player1") {
    li.innerText = name1.value;
    ul.appendChild(li);
  } else {
    li.innerText = name2.value;
    ul.appendChild(li);
  }
}

document.querySelectorAll(".BtnTic").forEach(function (button) {
  button.addEventListener("click", function () {
    if (name1.value == "" || name2.value == "") {
      alert("Digite o nome do player 1 e do player 2");
    } else {
      if (header.dataset.name === "player1") {
        this.innerText = "X";

        this.setAttribute("disabled", "true");
        header.dataset.name = "player2";
        checkWinner();
        playerName();
      } else {
        this.innerText = "O";

        this.setAttribute("disabled", "true");
        header.dataset.name = "player1";
        checkWinner();
        playerName();
      }
    }
  });
});
function checkWinner() {
  const allButtons = document.querySelectorAll(".BtnTic");
  const winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCondition.length; i++) {
    let condition = winningCondition[i];
    let a = condition[0],
      b = condition[1],
      c = condition[2];

    if (
      allButtons[a].textContent !== "" &&
      allButtons[a].textContent === allButtons[b].textContent &&
      allButtons[a].textContent === allButtons[c].textContent
    ) {
      alert("O vencedor foi o " + allButtons[a].textContent);
      return allButtons[a].textContent;
    }
  }

  let isDraw = true;
  for (let j = 0; j < allButtons.length; j++) {
    if (allButtons[j].textContent === "") {
      isDraw = false;
      break;
    }
  }

  if (isDraw) {
    alert("Empatou!");
    return "Draw";
  }

  return null;
}
const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", function () {
  document.querySelectorAll(".BtnTic").forEach(function (button) {
    button.innerText = "";
    button.removeAttribute("disabled");
  });

  header.dataset.name = "player1";

  ul.innerHTML = "";

  alert("O jogo foi reiniciado!");
});
