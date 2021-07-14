class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.5,
            length:320
        }
        this.pointB=pointB
        this.rope=Matter.Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        push();
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y)
        pop();
    }
}