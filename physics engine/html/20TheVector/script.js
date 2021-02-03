const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let PointA, postitionVectorA, PointB, postitionVectorB, sumVector, diffVector;

postitionVectorA = new Vector2d(300, 200);
postitionVectorB = new Vector2d(100, 300);
sumVector = new Vector2d(0, 0);
diffVector = new Vector2d(0, 0);

PointA = new Point(new Vector2d(500, 100), 20, getRandomColor(), true, "A");
PointB = new Point(new Vector2d(100, 200), 20, getRandomColor(), true, "B");

animate();

function animate()
{
    window.requestAnimationFrame(animate);
    context.clearRect(0, 0, width, height);

    sumVector.vectorSum(PointA.vPos, PointB.vPos);
    diffVector.diffVector(PointA.vPos, PointB.vPos);

    PointA.vPos.draw(0,0);
    PointB.vPos.draw(0,0);
    PointB.vPos.draw(PointA.vPos.dx,PointA.vPos.dy);
    sumVector.draw(0,0);
    diffVector.draw(PointB.vPos.dx, PointB.vPos.dy);

    PointA.draw();
    PointB.draw();
}