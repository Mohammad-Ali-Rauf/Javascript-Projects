size = 20;
function startGame() {
    gamearea.start();
}
var gamearea = {
    canvas:document.createElement("canvas"),
    start:function() {
        this.canvas.width = 2200;
        this.canvas.height = 930;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas,document.body.childNodes[0]);
    }
}
function target() {
    this.y = 580;
    this.radiusY = 580;
    this.radiusX = 600;
    this.centerX = 600;
    this.centerY = 600;
    cnt=0;
    this.x = this.radiusX + this.centerX;
    this.draw = function() {
        gamearea.context.fillStyle = "black";
        gamearea.context.fillRect(this.x,this.y,size,size);
    }
    this.update = function() {
        this.x = this.centerX + this.radiusX*Math.cos(ang);
        this.y = this.centerY + this.radiusY*Math.sin(ang);
    }
}