var canvas = document.querySelector('canvas');

canvas.width = 650;
canvas.height = 650;

var c =canvas.getContext('2d');

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius

    this.draw = function(){
      c.beginPath();
      c.arc( this.x, this.y, this.radius, 0, Math.PI *2 , false);
      c.fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      c.fill();
    }

    this.update = function(){
      if (this.x + this.radius > 650 || this.x - this.radius < 0)
      { this.dx = -this.dx; }

      if (this.y + this.radius > 650 || this.y - this.radius < 0)
      { this.dy = -this.dy; }

      this.x += this.dx;
      this.y += this.dy;

      this.draw();
    }
}

var circleArray = [];

for (var i=0; i<420; i++) {
  var radius = 30;
  var x = Math.random() * (650 - radius * 2) + radius;
  var y = Math.random() * (650 - radius * 2) + radius;
  var dx =  (Math.random() - .5) * 8;
  var dy =  (Math.random() - .5) * 8;

  circleArray.push(new Circle(x,y,dx,dy,radius));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0, 650, 650);
  for(var i =0; i< circleArray.length; i++){
    circleArray[i].update();
  }
}

animate();
