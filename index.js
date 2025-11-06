const input = document.getElementById("input");
const hearBtn = document.getElementById("hearBtn");
const message = document.getElementById("message");
const submit = document.getElementById("submit");
const streakCounter = document.getElementById("streakCounter");
const time = document.getElementById("time")

let streak = 0;
let currentIndex = 0;
let timeLeft = 15;
let timerInterval;

const words = [
    {Word: "Hippopotomonstrosesquippedaliophobia", Sound: "Sounds/hippo.mp3"}, // fear of long words
    {Word: "Nonanonacontanonactanonaliagon", Sound: "Sounds/nona.mp3"}, // a polygon with 9,999 sides
    {Word: "Hexakosioihexekontahexaphobia", Sound: "Sounds/hex.mp3"}, // fear of 666
    {Word: "Chargoggagoggmanchauggagoggchaubunagungamaugg", Sound: "Sounds/charg.mp3"}, // a lake in Webster, Massachusetts
    {Word: "Pneumonoultramicroscopicsilicovolcanoconiosis", Sound: "Sounds/pneum.mp3"}, // a lung disease caused by inhalation of very fine silica dust usually found in volcanos
    // {Word: "Eellogofusciouhipoppokunurious", Sound: "Sounds/eell.mp3"}, // very good
    // {Word: "Supercalifragilisticexpialidocious", Sound: "Sounds/super.mp3"} // extraordinarily good; wonderful
]



function playSound(sound){
    const soundFile = sound.currentTarget.getAttribute("data-sound");
    const audio = new Audio(soundFile);
    audio.play();
}

function checkWord(){
    const word = words[currentIndex].Word.toLowerCase();
    let userInput = input.value.trim().toLowerCase();
    if(userInput === word){
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
}

function timer(){
    timerInterval = setInterval(() => {
        if(timeLeft <= 0){
            clearInterval(timerInterval);
            message.textContent = `Times up`;
            submit.disabled = true;
            hearBtn.disabled = true;
        }
        else{
            time.textContent = timeLeft;
            timeLeft--;
        }
    }, 100);
}

input.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        checkWord();
    }
})

// submit.addEventListener("click", checkWord)

hearBtn.addEventListener("click", playSound);