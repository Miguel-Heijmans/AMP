class Linear {

  constructor(slope, intercept, color) {
    //slop is p
    this.slope = slope;
    this.intercept = intercept;
    this.color = "black" || color;
  }

  draw() {
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = this.color;
    context.moveTo(0, this.intercept);
    context.lineTo(width, this.y(width));
    context.closePath();
    context.stroke();
  }

  y(x) {
    // y = a * x + b
    let y = this.slope * x + this.intercept;
    return y;
  }

  defineByTwoPoints(a, b) {
    this.slope = (b.pos.dy - a.pos.dy)/(b.pos.dx - a.pos.dx);
    this.intercept = a.pos.dy - this.slope*a.pos.dx;
  }

  intersection(m) {
    let ans = {};
    ans.x = (m.intercept - this.intercept) / (this.slope - m.slope);
    ans.y = (ans.x * this.slope) + this.intercept
    return ans;
  }
}
