import './styles.scss'



const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// function Circle(x, y, r) {
//   this.x = x;
//   this.y = y;
//   this.dx = dx;
//   this.dy = dy;
//   this.radius = r;

//   this.draw = function(){
//     c.beginPath();
//     c.fillStyle = 'red';
//     c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
//     c.fill();
//   }

//   this.update = function(){
//     if(this.x + this.r > innerWidth || this.x - this.r < 0){
//       this.dx = -this.dx;
//     } 
//     if (this.y + this.r > innerHeight || this.y - this.r < 0) {
//       this.dy = -this.dy;
//     }
//     this.x += this.dx;
//     this.y += this.dy;

//     circle.draw();

//   }
// }
// var circle = new Circle(200, 200, 3, 3, 30);
// function animate() {
//   requestAnimationFrame(animate);
//   c.clearRect(0, 0, innerWidth, innerHeight);
//   circle.update();
  
// }
// animate();

const gravity = 0.5;

class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100
    }
    this.velocity = {
      x: 0,
      y: 0,
      max: 60
    }
    this.width = 100;
    this.height = 100;
  }
  draw() {
    c.fillStyle = 'white';
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update() {
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    if(this.position.y + this.height + this.velocity.y <= canvas.height){
      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    }
    this.draw();
  }
}

class Platform {
  constructor(){
    this.position = {
      x: 0,
      y: 0
    }
    this.width = 200;
    this.height = 20;
  }
  draw(){
    c.fillStyle = 'blue'
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

const player = new Player();
const platform = new Platform();

const keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0, canvas.width, canvas.height);
  player.update();
  platform.draw();

  if(keys.right.pressed){
    player.velocity.x = 5;
  } else if(keys.left.pressed) {
    player.velocity.x = -5;
  } else player.velocity.x = 0;
}

animate();


addEventListener('keydown', ({ keyCode }) => {
  switch(keyCode){
    case 65:
      console.log('left');
      keys.left.pressed = true;
      break;
    case 83:
      console.log('down');
      break;
    case 68:
      console.log('right');
      keys.right.pressed = true;
      break;
    case 87:
      console.log('up');
      player.velocity.y -= 20;
      break;
  }
});

addEventListener('keyup', ({ keyCode }) => {
  switch(keyCode){
    case 65:
      console.log('left');
      keys.left.pressed = false;
      break;
    case 83:
      console.log('down');
      break;
    case 68:
      console.log('right');
      keys.right.pressed = false;
      break;
    case 87:
      console.log('up');
      //player.velocity.y -= 20;
      break;
  }
});