let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let totalX = window.innerWidth;
let totalY = window.innerHeight;
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

function Ball() {
  this.color = randomColor();
  this.radius = Math.random() * 20 + 14;
  this.x = Math.random() * (totalX - this.radius * 2) + this.radius;
  this.y = Math.random() * (totalY - this.radius);
  this.dy = Math.random() * 2;
  this.dx = Math.round((Math.random() - 0.5) * 10);
  this.draw = function () {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.fill();
  };
}

let bal = [];
for (let i = 0; i < 100; i++) {
  bal.push(new Ball());
}

function bouncingBall() {
  if (totalX != window.innerWidth || totalY != window.innerHeight) {
    totalX = window.innerWidth;
    totalY = window.innerHeight;
    canvas.width = totalX;
    canvas.height = totalY;
  }
  requestAnimationFrame(bouncingBall);
  context.clearRect(0, 0, totalX, totalY);
  for (let i = 0; i < bal.length; i++) {
    bal[i].draw();
    bal[i].y += bal[i].dy;
    bal[i].x += bal[i].dx;
    if (bal[i].x + bal[i].radius > totalX || bal[i].x - bal[i].radius < 0) {
      bal[i].dx = -bal[i].dx;
    }
    if (bal[i].y + bal[i].radius > totalY || bal[i].y - bal[i].radius < 0) {
      bal[i].dy = -bal[i].dy;
    }
  }
}

bouncingBall();

setInterval(function () {
  bal.push(new Ball());
  bal.splice(0, 1);
}, 400);
