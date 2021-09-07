// UI

const scoreContainer = document.querySelector(".score");
const score = document.getElementById("score");
const scoreheight = document.getElementById("scoreh");

const timeContainer = document.querySelector(".time");
const time = document.getElementById("time");

const cardContainer = document.querySelector(".card-container");
const cardNumber = document.getElementsByClassName("card");

const btnGroup = document.querySelector(".button-group");
const btn = document.getElementById("btn");

// END UI 

let scoreValue = 0;
let scoreHeightValue = 0;

let cardColor = ["red", "green", "blue", "violet", "tomato", "yellow", "red", "green", "blue", "violet", "tomato", "yellow"];
let cardColorRandom = [];
let i = 0;
let count = 30;

var firstClick = "";
var secondClick = "";
var clickArr = [];
let winCheck = [];

let play = false;
let win = false;



//  ..........................Start Game Click Btn 

var start;
var startBtn = () => {
    try {
        window.alert("second");
        // console.log("hay");
        document.querySelector(".container").style.background = "linear-gradient:(to right bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(../ img/ background.jpg)";
        btnGroup.style.display = "none";
        document.querySelector("h1").style.display = "none";
        cardContainer.classList.add("play");
        scoreContainer.style.display = "none";
        timeContainer.style.display = "flex";
        cardColorRandom = [];
        winCheck = [];
        play = true;
        color();
        for (let index = 0; index < cardColorRandom.length; index++) {
            cardNumber[index].style.backgroundColor = cardColorRandom[index];
            cardNumber[index].classList.remove("correct");
        }
        playGame(play);
    } catch (error) {
        window.alert(error);
    }

}

// .........................End Strat Click Btn 

// ......................Color Random Start

let color = () => {
    try {
        while (i < 12) {
            var r = Math.floor(Math.random() * cardColor.length);
            if (checkTwice(cardColor[r])) {
                color();
            } else {
                cardColorRandom.push(cardColor[r]);
                // console.log(cardColorRandom);
                i++;
            }
        }
    } catch (error) {
        window.alert(error);
    }

}
let checkTwice = (value) => {
    try {
        let count = 0;
        for (let index = 0; index < cardColorRandom.length; index++) {
            if (cardColorRandom[index] == value) {
                count++;
            }
        }
        if (count == 2) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        window.alert(error);
    }

}

// ................Color Random End 

// ..................Card Click Start 

function card(obj) {
    try {
        // console.log(obj.id);
        if (play) {
            if (firstClick == "") {
                firstClick = obj.style.backgroundColor;
                clickArr[0] = obj.id;
                cardNumber[clickArr[0] - 1].classList.add("click");
                window.alert(firstClick);
            } else {
                secondClick = obj.style.backgroundColor;
                clickArr[1] = obj.id;
                cardNumber[clickArr[0] - 1].classList.add("click");
                window.alert(secondClick);
                // console.log(clickArr);
                if (clickArr[0] == clickArr[1]) {
                    clickArr[1] = "";
                } else {
                    if (firstClick == secondClick) {
                        cardNumber[clickArr[0] - 1].classList.add("correct");
                        cardNumber[clickArr[1] - 1].classList.add("correct");
                        winCheck.push(clickArr[0], clickArr[1]);
                        firstClick = "";
                        secondClick = "";
                        clickArr = [];

                    }
                }
            }

            // console.log(firstClick, secondClick, winCheck);
            // console.log(winCheck);
            if (winCheck.length == 12) {
                setTimeout(() => {
                    timeContainer.style.display = "none";
                    document.getElementById("win").innerText = "Win";
                    document.querySelector(".game-over").classList.add("lose");
                    scoreValue = time.innerText;
                    if (scoreValue > scoreHeightValue) {
                        scoreheight.innerText = scoreValue;
                    }
                }, (count - time.innerText) * 1000);
                setTimeout(() => {
                    timeContainer.style.display = "none";
                    btnGroup.style.display = "flex";
                    document.querySelector("h1").style.display = "block";
                    scoreContainer.style.display = "flex";
                    document.querySelector(".game-over").classList.remove("lose");
                }, (count - time.innerText + 3) * 1000);
            }
        }
    } catch (error) {
        window.alert(error);
    }

}

// ..........................Card Click End


// ..........................Start Count Time 
function playGame(value) {
    try {
        if (value) {
            start = (setInterval(() => {
                if (count > 20) {
                    timeContainer.style.backgroundColor = "green";
                    time.innerHTML = --count;
                } else if (count > 10) {
                    timeContainer.style.backgroundColor = "yellow";
                    time.innerHTML = --count;
                } else {
                    timeContainer.style.backgroundColor = "red";
                    time.innerText = "0" + (--count);
                }
            }, 1000));
            var loseTime = setTimeout(() => {
                clearInterval(start);
                count = 30;
                time.innerText = 30;
                btnGroup.style.display = "none";
                cardContainer.classList.remove("play");
                document.querySelector("h1").style.display = "none";
                scoreContainer.style.display = "none";
                timeContainer.style.display = "none";
                document.getElementById("win").innerText = "Over";
                document.querySelector(".game-over").classList.add("lose");
            }, 31 * 1000);
            // win or lose after appear this 
            var winTime = setTimeout(() => {
                timeContainer.style.display = "none";
                btnGroup.style.display = "flex";
                document.querySelector("h1").style.display = "block";
                scoreContainer.style.display = "flex";
                document.querySelector(".game-over").classList.remove("lose");
            }, 35 * 1000);
        }
    } catch (error) {
        window.alert(error);
    }

}

// .............................End Count Time