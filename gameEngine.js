function randomColor() {
    var r = Math.round(Math.random() * (255 - 0)) + 0;
    var g = Math.round(Math.random() * (255 - 0)) + 0;
    var b = Math.round(Math.random() * (255 - 0)) + 0;
    return "rgb" + "(" + r.toString() + "," + g.toString() + "," + b.toString() + ")";
}

function GAME_CANVAS(borderWidth,borderColor,backgroundColor,width,height,x,y,id) {
     this.borderWidth = borderWidth;
     if (backgroundColor == "random") {
        this.backgroundColor = randomColor();
     } else {
        this.backgroundColor = backgroundColor;
     }
     if (borderColor == "random") {
        this.borderColor = randomColor();
     } else {
        this.borderColor = borderColor;
     }
     this.width = width;
     this.height = height;
     this.x = x;
     this.y = y;
     this.id = id;

     var body = document.getElementsByTagName('body')[0];
     var gameCanvas = document.createElement('canvas');
     var ctx = gameCanvas.getContext('2d');

     gameCanvas.width = this.width;
     gameCanvas.height = this.height;
     gameCanvas.style.marginLeft = this.x;
     gameCanvas.style.marginTop = this.y;
     gameCanvas.id = this.id; 
     gameCanvas.style.backgroundColor = this.backgroundColor;
     gameCanvas.style.border = this.borderWidth + " solid " + this.borderColor;
     body.appendChild(gameCanvas);

     this.addComponent = function(ctype,cwidth,cheight,cx,cy,ccolor) {
          if(ctype="text") {
          }
          
          if (ccolor == "random") {
             ctx.fillStyle = randomColor();
          } else {
             ctx.fillStyle = ccolor;
          }
          ctx.fillRect(cx,cy,cwidth,cheight);
          
     }

     this.addShapeModel = function(shape,shapeColor,shapeX,shapeY,compo1,compo2,compo3,compo4,compo5,compo6,compo7,compo8) {
          switch(shape) {
             case "SQUARE":
                ctx.fillStyle = shapeColor;
                ctx.fillRect(shapeX,shapeY,compo1,compo1);
                break;
             case "TRIANGLE":
                ctx.beginPath();
                ctx.moveTo(shapeX,shapeY);
                ctx.lineTo(compo1,compo2);
                ctx.lineTo(compo3,compo4);
                ctx.closePath();

                ctx.fillStyle = shapeColor;
                ctx.fill();
                break;
          }
          
     }
}