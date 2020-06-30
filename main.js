var c = document.querySelector("#c");
var cSharp = document.querySelector("#cSharp");
var d = document.querySelector("#d");
var eFlat = document.querySelector("#eFlat");
var e = document.querySelector("#e");
var f = document.querySelector("#f");
var fSharp = document.querySelector("#fSharp");
var g = document.querySelector("#g");
var gSharp = document.querySelector("#gSharp");
var a = document.querySelector("#a");
var bFlat = document.querySelector("#bFlat");
var b = document.querySelector("#b");
var cOctave = document.querySelector("#cOctave");

function loadPage() {
  document.querySelector("#pop-up").style.display = "none";
  document.querySelector(".background").classList.remove("background-opacity");
}

function playAudio(note) {
  var sound = "";
  switch (note) {
    case "c":
      sound = c;
      break;
    case "cSharp":
      sound = cSharp;
      break;
    case "d":
      sound = d;
      break;
    case "eFlat":
      sound = eFlat;
      break;
    case "e":
      sound = e;
      break;
    case "f":
      sound = f;
      break;
    case "fSharp":
      sound = fSharp;
      break;
    case "g":
      sound = g;
      break;
    case "gSharp":
      sound = gSharp;
      break;
    case "a":
      sound = a;
      break;
    case "bFlat":
      sound = bFlat;
      break;
    case "b":
      sound = b;
      break;
    case "cOctave":
      sound = cOctave;
  }
  sound.currentTime = 0.0;
  return sound.play();
}

window.addEventListener("keydown", function (e) {
  playAudio(object[e.key]);

  console.log(e.key);
});

var object = {
  a: "c",
  w: "cSharp",
  s: "d",
  e: "eFlat",
  d: "e",
  f: "f",
  t: "fSharp",
  g: "g",
  y: "gSharp",
  h: "a",
  u: "bFlat",
  j: "b",
  k: "cOctave",
};
