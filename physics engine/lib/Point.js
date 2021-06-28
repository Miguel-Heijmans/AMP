class Point {
  constructor(pos, radius, color, label, draggable) {
    this.pos = pos;
    this.radius = radius;
    this.color = color;
    this.label = label || "";
    this.offset = 0;
    this.draggable = draggable || false;
    if (this.draggable) {
      console.log("testing");
      this.drag();
    }

    this.boxed = false;
  }

  SetBoxed(bool){
    this.boxed = bool;
  }

  SetNavbarOffset(offset){
    this.offset = offset;
  }

  draw() {
    context.beginPath();
    context.strokeStyle = "black";
    context.fillStyle = this.color;
    context.arc(this.pos.dx, this.pos.dy, this.radius, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
    context.fillStyle = "black";
    context.font = "12px Arial";
    context.fillText(this.label, this.pos.dx - 20, this.pos.dy - this.radius - 10);
  }

  distance(P){
    let dx = P.pos.dx - this.pos.dx;
    let dy = P.pos.dy - this.pos.dy;
    return Math.sqrt(dx*dx+dy*dy);
  };

  update(vel, acc){
    vel.sumVector(vel,acc)
    this.pos.sumVector(this.pos,vel);
    if(this.pos.dy > height - this.radius && this.boxed){
      vel.dy = -vel.dy;
      this.pos.dy = height-this.radius;
    }
    if(this.pos.dy<this.radius && this.boxed){
      vel.dy = -vel.dy;
      this.pos.dy = this.radius;
    }

    if(this.pos.dx>width-this.radius && this.boxed){
      vel.dx = -vel.dx;
      this.pos.dx = width-this.radius;
    }
    if(this.pos.dx<this.radius && this.boxed){
      vel.dx = -vel.dx;
      this.pos.dx = this.radius;
    }
  }



  drag() {
    console.log("drawable");

    this.dragging;
    addEventListener("mousemove", (e) => {
      if (this.dragging == true) {
        this.pos.dx = e.clientX;
        this.pos.dy = e.clientY - this.offset;
      }
    });


    addEventListener("mousedown", (e) => {
      if (pointInCircle(e.clientX, e.clientY - this.offset, this.pos.dx, this.pos.dy, this.radius)) {
        this.pos.dx = e.clientX;
        this.pos.dy = e.clientY - this.offset;
        this.dragging = true;
      }
    });

    addEventListener("mouseup", (e) => {
      this.dragging = false;
    });

    function pointInCircle(x, y, cx, cy, radius) {
      let distancesquared = (x - cx) * (x - cx) + (y - cy) * (y - cy);
      return distancesquared <= radius * radius;
    }
  }
}


