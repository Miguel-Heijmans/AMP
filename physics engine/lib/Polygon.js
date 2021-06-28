class Polygon {
  constructor(points, color) {
    this.points = points;
    this.color = color;
  }

  draw() {
    console.log("JA");
    context.beginPath();
    context.lineWidth = 0;
    context.fillStyle = this.color;
    for (let i = 0; i < this.points; i++) {
      let random1 = getRandomInt(50, width);
      let random2 = getRandomInt(50, height);
      context.lineTo(random1, random2);
      context.stroke();
      context.fill();
    }
  }
}
