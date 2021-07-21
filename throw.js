class Throw{
    constructor(body, anchor){
        var options = {
            bodyA: body,
            pointB: anchor,
            stiffness: 0.004,
            length: 1
        }
        this.bodyA=body
        this.pointB=anchor;
       this.throw = Constraint.create(options);
        World.add(world, this.throw);
    }
    fly() {
        this.throw.bodyA=null;
    } 
    Launch(body){
        this.throw.bodyA=body;
    }
    display(){
        if(this.throw.bodyA){
            var pointA=this.throw.bodyA.position;
            var pointB=this.pointB;
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
}
  
