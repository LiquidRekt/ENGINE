function randomColor() {
	var r = Math.round(Math.random() * (255 - 0)) + 0;
	var g = Math.round(Math.random() * (255 - 0)) + 0;
	var b = Math.round(Math.random() * (255 - 0)) + 0;
	return "rgb" + "(" + r.toString() + "," + g.toString() + "," + b.toString() + ")";
}

function CREATE_GRADIENT(gradient_data,object) {
	     var commaPos = [];
		   for (i = 0; i < gradient_data.length;i++) {
			   if (gradient_data[i] == ",") {
				   commaPos.push(i);
			   }
		   }
		   var gradientType = gradient_data.substring(9,commaPos[0]);
		   var colors = [];
		   for (x = 0; x < commaPos.length; x++) {
			   if(x == commaPos.length) {
			       var colorVal = gradient_data.substring(commaPos[x] + 1, gradient_data.length);
				   colors.push(colorVal);
				   break;
	  		   } else {
				   var colorVal = gradient_data.substring(commaPos[x] + 1, commaPos[x+1]);
				   colors.push(colorVal);
			   }
			   
		   }
		   
		   switch(gradientType) {
			   case "linear_horizontal":
			       if (object == "CANVAS_BACKGROUND") {
					   var linearOutput = "linear-gradient(to right" ;
				       for (y = 0;y < colors.length;y++) {
					       linearOutput = linearOutput + "," + colors[y];
				       }
				       linearOutput += ")";
					   return linearOutput;
				   } else if (object == "CANVAS_BLOCKOBJECT") {
				   } else if (object == "CANVAS_TEXTOBJECT") {
				   }
			       
			       break;
			   case "radial":
			       if (object == "CANVAS_BACKGROUND") {
					   
				   } else if (object == "CANVAS_BLOCKOBJECT") {
				   } else if (object == "CANVAS_TEXTOBJECT") {
				   }
			       
			       break;
		   }
		   
}

function GAME_CANVAS(backgroundColor,borderWidth,borderColor,width,height,x,y,id) {
	//Initialize SOURCE variables
	   var body = document.getElementsByTagName('body')[0];
	   var gameCanvas = document.createElement('canvas');
	   var ctx = gameCanvas.getContext('2d');
	   var gradientEnabled = false;
	
	//Initialize CANVAS properties
	if (backgroundColor == "random") {
    	this.backgroundColor = randomColor();
	} else if (backgroundColor.substring(0,9) == "gradient:")	{
		//GRADIENT OPTION
		gradientEnabled = true;
		if (backgroundColor.substring(9,backgroundColor.length) == "rainbow") {
			this.backgroundColor = "linear-gradient(red,orange,yellow,green,blue,purple,pink)";
		} else {
		   var commaPos = [];
		   for (i = 0; i < backgroundColor.length;i++) {
			   if (backgroundColor[i] == ",") {
				   commaPos.push(i);
			   }
		   }
		   var gradientType = backgroundColor.substring(9,commaPos[0]);
		   var colors = [];
		   for (x = 0; x < commaPos.length; x++) {
			   if(x == commaPos.length) {
			       var colorVal = backgroundColor.substring(commaPos[x] + 1, backgroundColor.length);
				   colors.push(colorVal);
				   break;
	  		   } else {
				   var colorVal = backgroundColor.substring(commaPos[x] + 1, commaPos[x+1]);
				   colors.push(colorVal);
			   }
			   
		   }
		   
		   switch(gradientType) {
			   case "linear_horizontal":
			       var linearOutput = "linear-gradient(to right" ;
				   for (y = 0;y < colors.length;y++) {
					   linearOutput = linearOutput + "," + colors[y];
				   }
				   linearOutput += ")";
				   this.backgroundColor = linearOutput;
			       break;
			   case "radial":
			       break;
		   }
		   
		   
		}
		//
    } else {
		this.backgroundColor = backgroundColor;
	}
	if (borderColor == "random") {
		this.borderColor = randomColor();
	} else {
    	this.borderColor = borderColor;
	}
	this.borderWidth = borderWidth;
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
	this.id = id;
	//
	
	
	if (gradientEnabled) {
		gameCanvas.style.background = this.backgroundColor;
	} else {
    	gameCanvas.style.backgroundColor = this.backgroundColor;
	}
	gameCanvas.style.border = this.borderWidth + " solid " + this.borderColor;
    gameCanvas.width = this.width;
    gameCanvas.height = this.height;
    gameCanvas.style.marginLeft = this.x;
    gameCanvas.style.marginTop = this.y;
    gameCanvas.id = this.id;	
	
	//Apply CANVAS to body
	body.appendChild(gameCanvas);
	//
	
	//UPDATE
	//
	
	//FUNCTIONS
	this.addComponent = function(type,width,height,x,y,color) {
		if (color == "random") {
		    ctx.fillStyle = randomColor();
		} else {
			ctx.fillStyle = color;
		}
		ctx.fillRect(x,y,width,height);
		
		
	}
	
	this.addShapeModel = function(shapeType,shapeX,shapeY,pointInitialize) {
	}
	
	
	//
}
