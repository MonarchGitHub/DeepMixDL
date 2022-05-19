// var links = [
//   "https://cdn.discordapp.com/attachments/856800279411032067/976685091885576242/Gen_Music_2.mp3,
//   "https://cdn.discordapp.com/attachments/856800279411032067/976685091587768390/Gen_Music_1.mp3",
//   "https://cdn.discordapp.com/attachments/856800279411032067/976667882270388314/Gen_Music_3.mp3",
// ];
// var randomNumber = Math.floor(Math.random() * (3 - 1) + 1);
// list.onclick = function (e) {
//   e.preventDefault();

//   var elm = e.target;
//   var audio = document.getElementById("audio");

//   var source = document.getElementById("audioSource");
//   source.src = elm.getAttribute("data-value");

//   audio.load();
//   audio.play();
// };

function viewShow() {
  document.getElementById("logDisplaynew").style.display = "inherit";
  document.getElementById("music_audio").style.display = "inherit";
  document.getElementById("feedback").style.display = "inherit";
}

var i = 0;
var speed = 50;
var timeoutId;
var logs = [
  "Allocating Resources...",
  "Build Successful",
  "Crunching the Data...",
  "Done.",
  "Parsing Output",
];
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function initModel() {
  deployModel();
  //   sleep(2 * 1000);
  viewShow();
}
function deployModel() {
  var count = 0;
  document.getElementById("logDisplay").innerHTML = "";
  txt = logs[0];
  typeWriter(txt);

  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  i = 0;
  count++;
  typeWriter(txt);
}

function typeWriter(txt) {
  if (i < txt.length) {
    document.getElementById("logDisplay").innerHTML += txt.charAt(i);
    i++;
    timeoutId = setTimeout(typeWriter, speed, txt);
  }
}
