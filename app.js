const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

class Element {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.angle = 1;
    this.length = 30;
    this.lineWidth = this.length / 10;
  }
  drow() {
    let col = Math.floor(Math.random() * 360) + 1;
    ctx.strokeStyle = "hsl(" + col + ", 87%, 87%)";
    //ctx.strokeStyle = "white";
    ctx.lineCap = "round";
    ctx.lineWidth = this.lineWidth;
    ctx.beginPath();
    if (this.angle == 1) {
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x + this.length, this.y + this.length);
    } else {
      ctx.moveTo(this.x, this.y + this.length);
      ctx.lineTo(this.x + this.length, this.y);
    }
    ctx.stroke();
  }
  update() {
    this.angle = Math.floor(Math.random() * 2) + 1;
    this.x = this.length + this.x;

    if (this.x > canvas.width) {
      this.x = 0;
      this.y = this.length + this.y;
    }
    if (this.y > canvas.height) {
      ctx.fillStyle = "rgba(0,0,0,.5)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      //ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.x = 0;
      this.y = 0;
    }
  }
}

const elem = new Element();
function animate() {
  //ctx.clearRect(0, 0, canvas.width,anvas.height);
  ctx.fillStyle = "rgba(0,0,0,.02)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  elem.drow();
  elem.update();
  requestAnimationFrame(animate);
}
animate();
