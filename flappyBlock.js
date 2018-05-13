<!DOCTYPE JavaScript>
var myGamePiece;
var myObstacle;

function startGame() {
  myGamePiece = new component(30, 30, "blue", 10, 120);
  myObstacle = new component(10, 200, "green", 300, 120);
  myGameArea.start();
  //redGamePiece = new component(75, 75, "red", 10, 10);
  //blueGamePiece = new component(75, 75, "blue", 50, 60);
  //yellowGamePiece = new component(75, 75, "yellow", 10, 110);
}

function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.update = function() {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.cashWith = function(otherrobj) {
    var myleft = this.x;
    var myright = this.x + (this.width);
    var mytop = this.y;
    var mybottom = this.y (this.height);
    var otherleft = otherrobj.x;
    var otherright = otherrobj.x + (otherrobj.width);
    var othertop = otherrobj.y;
    var otherbottom = otherrobj.y + (otherrobj.height);
    var crash = true;
    if ((mybottom < othertop) ||
        (mytop > otherbottom) ||
        (myright < otherleft) ||
        (myleft > otherright)) {
          crash = false;
        }
        return crash;
  }
}

var myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInerval(updateGameArea, 20);
    //if mulitple arrow keys are pressed, only goes with one key
    window.addEventListener('keydown', function (e) {
      myGameArea.keys = (myGameArea.keys || []);
      myGameArea.keys[e.keyCode] = false;
    })
    window.addEventListener('keyup', function (e) {
      myGameArea.keys[e.keyCode] = false;
    })
  },
  window.addEventListener('keyup', function (e) {
    myGameArea.key = false;
  })
  clear :function() {
    this.context.clearRect(0, 0, this.cavnas,width, this.canvas.height);
  },
  stop : function() {
    clearInterval(this.interval);
  }
}

function updateGameArea() {
  if (myGamePiece.crashWith(myObstacle)) {
    myGameArea.stop();
  } else {
      myObstacle.update();
      myGamePiece.speedX = 0;
      myGamePiece.speedY = 0;
      if (myGameArea.keys && myGameArea.keys == [37])
      {myGamePiece.speedX = -1; }
      if (myGameArea.keys && myGameArea.keys == [39])
      {myGameArea.speedX = 1; }
      if (myGameArea.keys && myGameArea.keys == [38])
      {myGamePiece.speedY = -1; }
      if (myGameArea.keys && myGameArea.keys == [40])
      {myGamePiece.speedY = 1; }
      myGamePiece.update();
      myGamePiece.newPos();
      myGameArea.clear();
      //controling the piece with the arrow keys
      //myGamePiece.x += 1;
      //redGamePice.x += 1;
      //blueGamePiece.x += 1;
      //blueGamePiece.y += 1;
      //yellowGamePiece.x += 1;
      //yellowGamePiece.y -= 1;
      //redGamePiece.update();
      //blueGamePiece.update();
      //yellowGamePiece.update();
  }
}
