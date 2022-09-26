let title = document.querySelector(".title");
let x = document.querySelector("#X").innerHTML = localStorage.getItem('X');
let o = document.querySelector("#O").innerHTML = localStorage.getItem('O');
let turn = "x";
let squares = [];
let winners = "";
const button = document.getElementsByTagName("button");
const divs = document.querySelectorAll("div");
// reset the game
function reset() {
  localStorage.clear();
  localStorage.setItem('X', 0 );
  localStorage.setItem('O', 0 );
  location.reload()
  for (let i = 1; i < 10; i++) {
  let element = document.getElementById("item" +i);
  element.innerHTML = "";
  }
  squares = [];
  winners = "";
  turn = "x";
  player1.classList.remove("text-bg-success");
  player2.classList.remove("text-bg-success");
  // title.innerHTML = "Tic Tac Toe";
  console.log('squares :>> ', squares);
  // title.style.color = "black";
}


function game(e, id) {
  console.log('divs :>> ', divs);
  // console.log('id :>> ', id);
  let element = document.getElementById(id);
  let player1 = document.getElementById("player1");
  let player2 = document.getElementById("player2");
  //   console.log("element :>> ", element);
  // e = e || window.event;
  // e.preventDefault();
  //   console.log("turn :>> ", turn);

  if (turn == false) {
    // element.classList.remove('square:hover');
    // element.style.background = rgb(12, 202, 255);
    return false;
  }
  if (turn === "x" && element.innerHTML == "") {
    player2.classList.add("text-bg-danger");
    player1.classList.remove("text-bg-danger");
    element.innerHTML = "X";
    turn = "o";
    // title.innerHTML = "turn : O";
  } else if (turn === "o" && element.innerHTML == "") {
    player2.classList.remove("text-bg-danger");
    player1.classList.add("text-bg-danger");
    element.innerHTML = "O";
    turn = "x";
    // title.innerHTML = "turn : X";
  }
  winner();
}

function winner() {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById("item" + i).innerHTML;
  }
  console.log("squares :>> ", squares);
  if (
    squares[1] == squares[2] &&
    squares[2] == squares[3] &&
    squares[1] != ""
  ) {
    console.log("ligne 1 horisontal completed");
    end(1, 2, 3);
  } else if (
    squares[4] == squares[5] &&
    squares[5] == squares[6] &&
    squares[5] != ""
  ) {
    console.log("ligne 2 horisontal completed");
    end(4, 5, 6);
  } else if (
    squares[7] == squares[8] &&
    squares[8] == squares[9] &&
    squares[9] != ""
  ) {
    console.log("ligne 3 horisontal completed");

    end(7, 8, 9);
  } else if (
    squares[1] == squares[4] &&
    squares[4] == squares[7] &&
    squares[1] != ""
  ) {
    console.log("ligne 1 vertical completed");
    end(1, 4, 7);
  } else if (
    squares[2] == squares[5] &&
    squares[5] == squares[8] &&
    squares[5] != ""
  ) {
    console.log("ligne 2 vertical completed");
    end(2, 5, 8);
  } else if (
    squares[3] == squares[6] &&
    squares[6] == squares[9] &&
    squares[6] != ""
  ) {
    console.log("ligne 3 vertical completed");
    end(3, 6, 9);
  } else if (
    squares[1] == squares[5] &&
    squares[5] == squares[9] &&
    squares[5] != ""
  ) {
    console.log("ligne 1 incliné completed");
    end(1, 5, 9);
  } else if (
    squares[3] == squares[5] &&
    squares[5] == squares[7] &&
    squares[7] != ""
  ) {
    console.log("ligne 2 incliné completed");
    end(3, 5, 7);
  }
}
function end(num1, num2, num3) {
  // console.log("the winners is :", squares[num1]);
winners = window.localStorage.getItem(squares[num1]);
// console.log('winners :>> ', ++winners);
// debugger;
  localStorage.setItem(squares[num1], ++winners );
  //   title.innerHTML = `${squares[num1]} winner`;
  document.getElementById("item" + num1).style.background = "	#00ff7f";
  document.getElementById("item" + num2).style.background = "	#00ff7f";
  document.getElementById("item" + num3).style.background = "	#00ff7f";
  if (squares[num1] == "O") {
    player2.classList.add("text-bg-success");
    player1.classList.remove("text-bg-danger");
  }
  if (squares[num1] == "X") {
    player2.classList.remove("text-bg-danger");
    player1.classList.add("text-bg-success");
  }
  console.log('winner :>> ', winner);
  winners = window.localStorage.getItem('winners');
  console.log('winners :>> ', winners);

  turn = false;

  setInterval(function(){title.innerHTML += '.'},1000);
  setTimeout(function(){
      location.reload()
  }, 4000);
}
