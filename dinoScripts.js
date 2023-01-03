const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
document.body.onkeyup = function (e) {
  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
    jump();
  }
};

let jump = () => {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
    setTimeout(function () {
      dino.classList.remove("jump");
    }, 350);
  }
};

let isAlive = setInterval(function () {
  // check x pos of cactus to x pos of dino
  // if y pos of dino on y pos of cactus = dead
  let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
  let cactusXpos = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
  
  if (cactusXpos >= 20 && cactusXpos <= 50){
    if (dinoBottom < -110 ){
      alert("Gmae Over!");
    }
  }

}, 10);
