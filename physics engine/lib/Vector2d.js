class Vector2d{
    constructor(dx,dy){
        this.dx = dx;
        this.dy = dy;
    }

    differenceVector(a,b){
      this.dx = a.dx - b.dx;
      this.dy = a.dy - b.dy;
    }

    sumVector(a,b){
      this.dx = a.dx + b.dx;
      this.dy = a.dy + b.dy;
    }

    add(vector){
      this.dx += vector.dx;
      this.dy += vector.dy;
    }

    scalMul(scal){
      this.dx *= scal;
      this.dy *= scal;
    }

    get magnitude(){
      return Math.sqrt(this.dx*this.dx + this.dy*this.dy);
    }

    set magnitude(newMagnitude){
      let angle = this.angle;
      this.dx = newMagnitude*Math.cos(angle);
      this.dy = newMagnitude*Math.sin(angle);
    }
    get angle(){
      return Math.atan2(this.dy,this.dx);
    }

    drawArrow(pos,vcolor,scale){
        let color = vcolor || "white";
        let vscale = scale || 1 ;
        let sh = 7;

        let hh = 20;
        let hw = 30;
        let sw = this.magnitude * vscale - hw;

        context.save();
        context.beginPath();
        context.fillStyle = color;

        //translate to position x,y
        context.translate(pos.dx,pos.dy);

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

    setbetween(a, b){
        this.dx = a.dx + b.dx / 2;
        this.dy = a.dy + b.dy / 2;
    }

    difVector(vectorA,vectorB){
        this.dx = vectorA.dx - vectorB.dx;
        this.dy = vectorA.dy - vectorB.dy;
    }

    tdifVector(vectorA,vectorB){
        let tdx = vectorA.dx - vectorB.dx;
        let tdy = vectorA.dy - vectorB.dy;
        return new Vector2d(tdx, tdy);
    }

    Slerp(a, b, n) {
        return (1 - n) * a + n * b;
    }

    lerp(a, b, t) {
        // console.log(a, b)
        if (t < 0.0) {
            t = 0.0;
        }
        if (t > 1.0) {
            t = 1.0;
        }
        this.dx = a.dx + (b.dx - a.dx) * t;
        this.dy = a.dy + (b.dy - a.dy) * t;
    }

    lerpNoClamp(a, b, t) {
        this.dx = a.dx + (b.dx - a.dx) * t;
        this.dy = a.dy + (b.dy - a.dy) * t;
    }

    dot(vector){
        return (this.dx * vector.dx) + (this.dy * vector.dy);
    }

    get r(){
        return Math.sqrt(this.dx*this.dx + this.dy*this.dy);
    }

    set r(mag){
        let tempangle = this.angle;
        this.dx = mag * Math.cos(tempangle);
        this.dy = mag * Math.sin(tempangle);
    }
}
