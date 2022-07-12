var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var totalX = window.innerWidth;
var totalY = window.innerHeight;
canvas.width = totalX;
canvas.height = totalY;

function randomColor() {
  return (
    "rgba(" +
    Math.round(Math.random() * 250) +
    "," +
    Math.round(Math.random() * 250) +
    "," +
    Math.round(Math.random() * 250) +
    "," +
    Math.ceil(Math.random() * 10) / 10 +
    ")"
  );
}
