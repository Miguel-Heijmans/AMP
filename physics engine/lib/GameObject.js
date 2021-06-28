class  GameObject {
    constructor(pos,vel,acc) {
        this.pos = pos;
        this.vel = vel;
        this.acc = acc;
        this.radius = 20;
        this.color ="black";
    }

    update(){
        this.vel.sumVector(this.vel,this.acc)
        this.pos.sumVector(this.pos,this.vel);
        if(this.pos.dy + this.radius >height){
            this.vel.dy = -this.vel.dy;
            this.pos.dy = height - this.radius;
        }
        if(this.pos.dy - this.radius <0){
            this.vel.dy = -this.vel.dy;
            this.pos.dy = 0 + this.radius;
        }
        if(this.pos.dx + this.radius >width){
            this.vel.dx = -this.vel.dx;
            this.pos.dx = width - this.radius;
        }
        if(this.pos.dx - this.radius<0){
            this.vel.dx = -this.vel.dx;
            this.pos.dx = 0 + this.radius;
        }
    }

    draw(){
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.pos.dx,this.pos.dy,this.radius,0,Math.PI*2);
        context.stroke();
        context.fill();
    }

}
