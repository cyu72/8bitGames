const dino = document.getElementById("dino");
document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32      
    ) {
      jump();
    }
  }

let jump = () => {
    if (dino.classList != "jump"){

        dino.classList.add("jump");
        setTimeout(function(){
            dino.classList.remove("jump");
        }, 600);
    }
}