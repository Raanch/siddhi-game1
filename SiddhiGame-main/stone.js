class Stone{
   constructor(x,y,r){
    var option={
        restituion:0.8,
        density:0.1
    }
    this.body=Bodies.rectangle(x,y,r,r,option)
    this.r=r
    World.add(world,this.body)
}
display(){
    push()
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    strokeWeight(2)
    stroke("black")
    ellipseMode(RADIUS)
    ellipse(0,0,this.r,this.r)
    pop()
}
}