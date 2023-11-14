// let canvas = document.querySelector("canvas");
// let cxt = canvas.getContext('2d');
//
// cxt.fillStyle("red");
// cxt.fillRect(50,50,100,100);
//
// cxt.strokeStyle("green");
// cxt.strokeRect(250,50,100,100);
//
// cxt.strokeStyle("red");
// cxt.fillStyle("blue");
// cxt.rect(50,250,100,100);
// cxt.fill();
// cxt.stroke();
//
// cxt.fillStyle("#7733ff");
// cxt.beginPath();
// cxt.arc(300,300,50,0,Math.PI * 2,true);
// cxt.closePath();
// cxt.fill();



// let canvas = document.querySelector("canvas");
// let cxt = canvas.getContext("2d");
//
// cxt.strokeStyle("red");
// cxt.fillStyle="#00ff00ee";
//
// setInterval(() => {
//
//     const xPos = 150 + Math.sin(Date.how()/ 1000) * 100;
//
//     cxt.beginPath();
//     cxt.rect(xPos,50,100,100);
//     cxt.stroke();
//     cxt.fill();
//
// }, 100);


// let canvas = document.querySelector("canvas");
// let cxt = canvas.getContext("2d");
//
// cxt.strokeStyle("red");
// cxt.fillStyle = "#00ff00ee";
//
// setInterval(() => {
//     cxt.clearRect(0,0,canvas.width,canvas.height);
//     const xPos= 150+ Math.sin(Date.now() / 1000) * 100;
//
//     cxt.beginPath();
//     cxt.rect(xPos, 50, 100, 100);
//     cxt.stroke();
//     cxt.fill();
// }, 100);


// let canvas = document.querySelector("canvas");
// let cxt = canvas.getContext("2d");
//
// cxt.beginPath();
// cxt.fillStyle = "green";
// cxt.moveTo(50,50);
// cxt.lineTo(100,100);
// cxt.lineTo(150,50);
// cxt.fill();





// let canvas = document.querySelector("canvas");
// let cxt = canvas.getContext("2d");
//
// canvas.height= 480;
// canvas.width= 640;
//
// cxt.beginPath();
// cxt.fillStyle = "yellow";
// cxt.moveTo(40,140);
//
// cxt.lineTo(40,140);
// cxt.lineTo(20,40);
// cxt.lineTo(60,100);
// cxt.lineTo(80,20);
// cxt.lineTo(100,100);
// cxt.lineTo(140,40);
// cxt.lineTo(120,140);
// cxt.lineTo(40,140);
//
// cxt.fill();
// cxt.stroke();




let canvas = document.querySelector("canvas");
let cxt = canvas.getContext("2d");
cxt.beginPath();
cxt.fillStyle = "green";

for (let i = 2; i<=12; i++){
    cxt.moveTo(15,15 * i);
    cxt.lineTo(195,15 *i);
}

for (let i = 2; i<=12; i++) {
    cxt.moveTo(15 * i, 15);
    cxt.lineTo(15 * i, 195);
}

cxt.stroke();


