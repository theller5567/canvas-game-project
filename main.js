import './styles.scss'



const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Circle(x, y, r) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = r;

  this.draw = function(){
    c.beginPath();
    c.fillStyle = 'red';
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    c.fill();
  }

  this.update = function(){
    if(this.x + this.r > innerWidth || this.x - this.r < 0){
      this.dx = -this.dx;
    } 
    if (this.y + this.r > innerHeight || this.y - this.r < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    circle.draw();

  }
}

var circle = new Circle(200, 200, 3, 3, 30);


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  circle.update();
  
  
}

animate();