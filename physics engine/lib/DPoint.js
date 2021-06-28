class DPoint {
  constructor(pos,vel,acc,radius,color,label) {
    this.pos = pos;
    this.vel = vel;
    this.acc = acc;
    this.radius = radius;
    this.color = color;
    this.label = label || "";
  }

  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    if(this.pos.dx > canvas.width - this.radius){
      this.vel.dx = - Math.abs(this.vel.dx);
    }

    if(this.pos.dy > canvas.height - this.radius){
      this.vel.dy = - Math.abs(this.vel.dy);
      this.pos.dy = canvas.height - this.radius;
    }

    if(this.pos.dx <  this.radius){
      this.vel.dx = Math.abs(this.vel.dx);
    }

    if(this.pos.dy <  this.radius){
      this.vel.dy = Math.abs(this.vel.dy);
    }

  }

  draw(){
    context.beginPath();
    context.strokeStyle = "black";
    context.fillStyle = this.color;
    context.arc(this.pos.dx,this.pos.dy,this.radius,0,2*Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
    context.fillStyle = "black";
    context.font = "12px new courier";
    context.fillText(this.label, this.pos.dx-20, this.pos.dy-this.radius-10);
  }

}
