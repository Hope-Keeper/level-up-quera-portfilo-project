let movingElement1 = document.querySelector(".transfomeContainer");

let movingY = -20;
movingElement1.style = `background-color: #276576;
height: 40px;
transform: translate3d(0px, ${movingY}vw, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
transform-style: preserve-3d;
will-change: transform;`;

/*setInterval(() => {
  console.log(movingY);
  if (movingY > -15) {
    movingY = -10;
  }
  movingElement1.style = `background-color: #276576;
height: 40px;
transform: translate3d(0px, ${movingY}vw, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
transform-style: preserve-3d;
will-change: transform;`;
  movingY += 0.1;
}, 5);*/
