class Ball{
    constructor(x,y,r){
        var options={
            restitution:1,
            density:1
        }
    this.r=r
    this.body=Bodies.circle(x,y,r,options)
    World.add(world,this.body)
    }
    display(){
       push();
       fill(255,190,194)
       translate(this.body.position.x,this.body.position.y)
       rotate(this.body.angle)
       ellipseMode(RADIUS)
       ellipse(0,0,this.r,this.r)
       pop(); 
    }
}
