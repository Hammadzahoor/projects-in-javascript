let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomidx = Math.floor(Math.random() * 3); //math.floor is used to remove decimal values and math.random() is used to generate random values
  // rock, paper, scissors
  return options[randomidx];
};

const drawgame = () => {
  console.log("game was Draw ");
  msg.innerText = "Game Was Draw. Play Again";
  msg.style.backgroundColor = "#011638";
};

const showwinner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    console.log("you Win");
    userscore++;
    userscorepara.innerText = userscore;
    msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    console.log("you lose");
    compscore++;
    compscorepara.innerText = compscore;
    msg.innerText = `You lose :( ${compchoice} beats Your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playgame = (userchoice) => {
  console.log("userchoice = ", userchoice);
  // generating computer choice
  const compchoice = gencompchoice();
  console.log("Comp Choice = ", compchoice);

  if (userchoice === compchoice) {
    //draw Game
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      // options left scissors, paper
      userwin = compchoice === "paper" ? false : true; // ternary statement
    } else if (userchoice === "paper") {
      // options left scissors, rock
      userwin = compchoice === "scissors" ? false : true; // ternary statement
    } else {
      // options left rock, paper
      userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin, userchoice, compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    console.log("choice was clicked", userchoice);
    playgame(userchoice);
  });
});
