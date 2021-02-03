/*
	23-2-2020
	klasse om een tweedimensionale vector mee aan te geven

	eigenschappen
	* dx (verschuiving in de x-richting)
	* dy (verschuiving in de y-richting )
*/

class Vector2d 
{
	constructor(dx,dy)
	{
		this.dx = dx;
		this.dy = dy;
	}
  
	get magnitude()
	{
		let a = this.dx;
		let b = this.dy
		return Math.sqrt(a*a + b*b);
	}
  
	set magnitude(newMagnitude)
	{
		let oldAngle = this.angle;
		this.dx = newMagnitude * Math.cos(oldAngle)
		this.dy = newMagnitude * Math.sin(oldAngle);
	}
  
	get angle()
	{
		//return Math.atan(this.dy/this.dx);
		return Math.atan2(this.dy,this.dx);
	}
  
	sumVector(vectorA,vectorB)
	{
		this.dx = vectorA.dx + vectorB.dx;
	  	this.dy = vectorA.dy + vectorB.dy;
	}
  
	difVector(vectorA,vectorB)
	{
		this.dx = vectorA.dx - vectorB.dx;
		this.dy = vectorA.dy - vectorB.dy;
	}
  
	draw(x,y,vcolor,scale)
	{
		let color = vcolor || "white";
		let vscale = scale || 1 ;
		let sh = 7;
	
		let hh = 20;
		let hw = 30;
		let sw = this.magnitude*vscale - hw;
	
		context.save();
		context.beginPath();
		context.fillStyle = color;
	
		//translate to position x,y
		context.translate(x,y);
	
		context.rotate(this.angle);
	
		//draw arrow
		context.moveTo(0,0);
		context.lineTo(0,sh);
		context.lineTo(sw,sh);
		context.lineTo(sw,hh);
		context.lineTo(sw + hw ,0);
		context.lineTo(sw,-hh);
		context.lineTo(sw,-sh);
		context.lineTo(0,-sh);
		context.closePath();
		context.stroke();
		context.fill();
		context.restore();
	}
}