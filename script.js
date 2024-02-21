//Initialize scores for Team A  and Team B
let teamAScore1 = 0;
let teamBScore1 = 0;

let teamAScore2 = 0;
let teamBScore2 = 0;

let teamAScore3 = 0;
let teamBScore3 = 0;

let teamAScore4 = 0;
let teamBScore4 = 0;

//Get references to the HTML elements that displays the scores
let teamAScoreValue1 = document.getElementById("teamAScore1");
let teamBScoreValue1 = document.getElementById("teamBScore1");

let teamAScoreValue2 = document.getElementById("teamAScore2");
let teamBScoreValue2 = document.getElementById("teamBScore2");

let teamAScoreValue3 = document.getElementById("teamAScore3");
let teamBScoreValue3 = document.getElementById("teamBScore3");

let teamAScoreValue4 = document.getElementById("teamAScore4");
let teamBScoreValue4 = document.getElementById("teamBScore4");

//Function to increment the score for a given team
let incrementScore1 = (team) => {
  if (team === "teamA1") {
    teamAScore1++;
    teamAScoreValue1.textContent = teamAScore1;
  } else if (team === "teamB1") {
    teamBScore1++;
    teamBScoreValue1.textContent = teamBScore1;
  }
};

let incrementScore2 = (team) => {
  if (team === "teamA2") {
    teamAScore2++;
    teamAScoreValue2.textContent = teamAScore2;
  } else if (team === "teamB2") {
    teamBScore2++;
    teamBScoreValue2.textContent = teamBScore2;
  }
};

let incrementScore3 = (team) => {
  if (team === "teamA3") {
    teamAScore3++;
    teamAScoreValue3.textContent = teamAScore3;
  } else if (team === "teamB3") {
    teamBScore3++;
    teamBScoreValue3.textContent = teamBScore3;
  }
};

let incrementScore4 = (team) => {
  if (team === "teamA4") {
    teamAScore4++;
    teamAScoreValue4.textContent = teamAScore4;
  } else if (team === "teamB4") {
    teamBScore4++;
    teamBScoreValue4.textContent = teamBScore4;
  }
};

//Function to decrement the score for a given team
let decrementScore1 = (team) => {
  if (team === "teamA1" && teamAScore1 > 0) {
    teamAScore1--;
    teamAScoreValue1.textContent = teamAScore1;
  } else if (team === "teamB1" && teamBScore1 > 0) {
    teamBScore1--;
    teamBScoreValue1.textContent = teamBScore1;
  }
};

let decrementScore2 = (team) => {
  if (team === "teamA2" && teamAScore2 > 0) {
    teamAScore2--;
    teamAScoreValue2.textContent = teamAScore2;
  } else if (team === "teamB2" && teamBScore2 > 0) {
    teamBScore2--;
    teamBScoreValue2.textContent = teamBScore2;
  }
};

let decrementScore3 = (team) => {
  if (team === "teamA3" && teamAScore3 > 0) {
    teamAScore3--;
    teamAScoreValue3.textContent = teamAScore3;
  } else if (team === "teamB3" && teamBScore3 > 0) {
    teamBScore3--;
    teamBScoreValue3.textContent = teamBScore3;
  }
};

let decrementScore4 = (team) => {
  if (team === "teamA4" && teamAScore4 > 0) {
    teamAScore4--;
    teamAScoreValue4.textContent = teamAScore4;
  } else if (team === "teamB4" && teamBScore4 > 0) {
    teamBScore4--;
    teamBScoreValue4.textContent = teamBScore4;
  }
};

//Function to reset both team scores to 0
let resetScores1 = () => {
  teamAScore1 = 0;
  teamBScore1 = 0;
  teamAScoreValue1.textContent = teamAScore1;
  teamBScoreValue1.textContent = teamBScore1;
};

let resetScores2 = () => {
  teamAScore2 = 0;
  teamBScore2 = 0;
  teamAScoreValue2.textContent = teamAScore2;
  teamBScoreValue2.textContent = teamBScore2;
};

let resetScores3 = () => {
  teamAScore3 = 0;
  teamBScore3 = 0;
  teamAScoreValue3.textContent = teamAScore3;
  teamBScoreValue3.textContent = teamBScore3;
};

let resetScores4 = () => {
  teamAScore4 = 0;
  teamBScore4 = 0;
  teamAScoreValue4.textContent = teamAScore4;
  teamBScoreValue4.textContent = teamBScore4;
};