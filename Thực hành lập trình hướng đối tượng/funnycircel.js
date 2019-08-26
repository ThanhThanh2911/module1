function Circle(x, y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
 }
 function createCircle(){
    var canvas = document.getElementById("myCanvas");
    var tron = canvas.getContext("2d");
    var radius = Math.floor(Math.random()*100);
    tron.beginPath();
    tron.arc(95, 50, radius, 0, 2*Math.PI);
    tron.fill();

 }
 createCircle();