const clapA = document.getElementById("clapA");
const hiHatS = document.getElementById("hiHatS");
const kickD = document.getElementById("kickD");
const openHatF = document.getElementById("openHatF");
const boomG = document.getElementById("boomG");
const rideH = document.getElementById("clarideHpA");
const snareJ = document.getElementById("snareJ");
const tomK = document.getElementById("tomK");
const tinkL = document.getElementById("tinkL");

const Clap_Wav = new Audio("sounds/clap.wav");
const Hihat_Wav = new Audio("sounds/hihat.wav");
const Kick_Wav = new Audio("sounds/kick.wav");
const Openhat_Wav = new Audio("sounds/openhat.wav");
const Boom_Wav = new Audio("sounds/boom.wav");
const Ride_Wav = new Audio("sounds/ride.wav");
const Snare_Wav = new Audio("sounds/snare.wav");
const Tom_Wav = new Audio("sounds/tom.wav");
const Tink_Wav = new Audio("sounds/tink.wav");

// const Crash_Wav = new Audio("sounds/crash.wav");
// const Hat_Wav = new Audio("sounds/hat.wav");
// const Tom2_Wav = new Audio("sounds/tom2.wav");


document.addEventListener("keydown", function listener(event) {

    const key = event.key;
    console.log(typeof key);

    switch (key) {

        case "a":
            console.log(event.key);
            Clap_Wav.currentTime = 0;
            Clap_Wav.play();
            break;

        case key == "S" || key == "s":
            Hihat_Wav.currentTime = 0;
            Hihat_Wav.play();
            break;

        case key == "D" || key == "d":
            Kick_Wav.currentTime = 0;
            Kick_Wav.play();
            break;

        case key == "F" || key == "f":
            Openhat_Wav.currentTime = 0;
            Openhat_Wav.play();
            break;

        case key == "G" || key == "g":
            Boom_Wav.currentTime = 0;
            Boom_Wav.play();
            break;

        case key == "H" || key == "h":
            Ride_Wav.currentTime = 0;
            Ride_Wav.play();
            break;

        case key == "J" || key == "j":
            Snare_Wav.currentTime = 0;
            Snare_Wav.play();
            break;

        case key == "K" || key == "k":
            Tom_Wav.currentTime = 0;
            Tom_Wav.play();
            break;

        case key == "L" || key == "l":
            Tink_Wav.currentTime = 0;
            Tink_Wav.play();
            break;

        default:
            console.log("Default:" + key);
            break;
    }

    // if (key == "A" || key =="a") {
    //     Clap_Wav.currentTime = 0;
    //     Clap_Wav.play();
    // } else if (key == "S" || key =="s") {
    //     Hihat_Wav.currentTime = 0;
    //     Hihat_Wav.play();
    // } else if (key == "D" || key =="d") {
    //     Openhat_Wav.currentTime = 0;
    //     Openhat_Wav.play();
    // } else if (key == "F" || key =="f") {
    //     Ride_Wav.currentTime = 0;
    //     Ride_Wav.play();
    // } else if (key == "G" || key =="g") {
    //     Ride_Wav.currentTime = 0;
    //     Ride_Wav.play();
    // } else if (key == "H" || e.key =="h") {
    //     Snare_Wav.currentTime = 0;
    //     Snare_Wav.play();
    // } else if (key == "J" || key =="j") {
    //     Clap_Wav.currentTime = 0;
    //     Clap_Wav.play();
    // } else if (key == "K" || key =="k") {
    //     Tom_Wav.currentTime = 0;
    //     Tom_Wav.play();
    // } else if (key == "L" || key =="l") {
    //     Tink_Wav.currentTime = 0;
    //     Tink_Wav.play();
    // }

});