const input = document.getElementById("input");
const hearBtn = document.getElementById("hearBtn");
const message = document.getElementById("message");
const submit = document.getElementById("submit");
const streakCounter = document.getElementById("streakCounter");
const time = document.getElementById("time")
const restartBtn = document.getElementById("restart")
const wpm = document.getElementById("wpm");

const configTime = 15
let streak = 0;
let currentIndex = 0;
let timeLeft = configTime;
let timerInterval;
let gWord;

const words = [
    {Word: "Hippopotomonstrosesquippedaliophobia", Sound: "Sounds/hippo.mp3"}, // fear of long words
    {Word: "Nonanonacontanonactanonaliagon", Sound: "Sounds/nona.mp3"}, // a polygon with 9,999 sides
    {Word: "Hexakosioihexekontahexaphobia", Sound: "Sounds/hex.mp3"}, // fear of 666
    {Word: "Chargoggagoggmanchauggagoggchaubunagungamaugg", Sound: "Sounds/charg.mp3"}, // a lake in Webster, Massachusetts
    {Word: "Pneumonoultramicroscopicsilicovolcanoconiosis", Sound: "Sounds/pneum.mp3"}, // a lung disease caused by inhalation of very fine silica dust usually found in volcanos
    // {Word: "Eellogofusciouhipoppokunurious", Sound: "Sounds/eell.mp3"}, // very good
    {Word: "Supercalifragilisticexpialidocious", Sound: "Sounds/super.mp3"} // extraordinarily good; wonderful
]



function playSound(sound){
    const soundFile = sound.currentTarget.getAttribute("data-sound");
    const audio = new Audio(soundFile);
    audio.play();
    input.focus();
}

function checkWord(){
    const word = words[currentIndex].Word.toLowerCase();
    let userInput = input.value.trim().toLowerCase();
    if(userInput === word){
        gWord++;
        currentIndex++;
        streak++;
        message.textContent = `Correct`;
        streakCounter.textContent = `Streak: ${streak}`
        if(currentIndex < words.length){
            hearBtn.setAttribute("data-sound", words[currentIndex].Sound);
            userInput.value = ``;
        }
        else{
            message.textContent = `You won with a streak of ${streak}`;
            hearBtn.disabled = true;
            submit.disabled = true;
        }
    }
    else{
        message.textContent = `You lost streak: ${streak}`;
        currentIndex = 0;
        streak = 0;
    }
    clearInterval(timerInterval);
    timeLeft = 15;
    time.textContent = timeLeft;
    input.value = ``;
    calculateWPM();
}

function calculateWPM(){
    let word = gWord;
    let WPM = (word / 5) / ((configTime - timeLeft) / 60);
    wpm.textContent = `WPM: ${WPM}`;
}

function timer(){
    timerInterval = setInterval(() => {
        if(timeLeft < 0){
            clearInterval(timerInterval);
            message.textContent = `Times up`;
            submit.disabled = true;
            hearBtn.disabled = true;
        }
        else{
            time.textContent = timeLeft.toFixed(1);
            timeLeft-=0.1;
        }
    }, 100);
}

function restart(){
    clearInterval(timerInterval);
    streak = 0;
    currentIndex = 0;
    timeLeft = 15;
    time.textContent = `15`;
    streakCounter.textContent = `Streak: ${streak}`;
    message.textContent = ``;

}

input.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        checkWord();
    }
})

// submit.addEventListener("click", checkWord)

hearBtn.addEventListener("click", playSound);
hearBtn.addEventListener("click", timer);
restartBtn.addEventListener("click", restart);