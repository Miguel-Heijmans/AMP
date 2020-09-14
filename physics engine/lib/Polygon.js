class Polygon
{
    constructor(points1x,points1y,points2x,points2y,points3x,points3y)
    {
        this.points1x = points1x;
        this.points1y = points1y;
        this.points2x = points2x;
        this.points2y = points2y;
        this.points3x = points3x;
        this.points3y = points3y;
    }

    draw(context)
    {
        console.log(this.points, this.color);
        console.log(getRandomColor());
        context.beginPath();
        context.lineWidth = "5";
        context.fillStyle = getRandomColor();
        context.moveTo(this.points1x, this.points1y);
        context.lineTo(this.points2x, this.points2y);
        context.lineTo(this.points3x, this.points3y);
        context.closePath();
        context.fill();
		context.stroke();
    }
}