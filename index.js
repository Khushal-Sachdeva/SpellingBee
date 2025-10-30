let streak = 0;

const words = [
    {Word: "Hippopotomonstrosesquippedaliophobia", Sound: "Sounds/hippo.mp3"}, // fear of long words
    {Word: "Nonanonacontanonactanonaliagon", Sound: "nona.mp3"}, // a polygon with 9,999 sides
    {Word: "Hexakosioihexekontahexaphobia", Sound: "hex.mp3"}, // fear of 666
    {Word: "Chargoggagoggmanchauggagoggchaubunagungamaugg", Sound: "charg.mp3"}, // a lake in Webster, Massachusetts
    {Word: "Pneumonoultramicroscopicsilicovolcanoconiosis", Sound: "pneum.mp3"}, // a lung disease caused by inhalation of very fine silica dust usually found in volcanos
    {Word: "Eellogofusciouhipoppokunurious", Sound: "eell.mp3"}, // very good
    {Word: "Supercalifragilisticexpialidocious", Sound: "super.mp3"} // extraordinarily good; wonderful
]

const hearBtn = document.getElementById("hearBtn")

function playSound(sound){
    const soundFile = sound.currentTarget.getAttribute("data-sound");
    const audio = new Audio(soundFile);
    audio.play();
}

hearBtn.addEventListener("click", playSound)