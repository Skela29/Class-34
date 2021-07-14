class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
    this.height=height
    this.width=width
    this.body=Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.body)
    }
    display(){
       push();
       fill(133,84,57)
       translate(this.body.position.x,this.body.position.y)
       rotate(this.body.angle)
       rectMode(CENTER)
       rect(0,0,this.width,this.height)
       pop(); 
    }
}