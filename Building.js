class Building{
    constructor(x,y,width,height){
        var options={
            restitution:0.5,
            density:3
        }
    this.height=height
    this.width=width
    this.body=Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.body)
    }
    display(){
       push();
       fill(182,211,239)
       translate(this.body.position.x,this.body.position.y)
       rotate(this.body.angle)
       rectMode(CENTER)
       rect(0,0,this.width,this.height)
       pop(); 
    }
}
