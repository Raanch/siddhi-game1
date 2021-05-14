class Rock{
    constructor(x,y,r){
     var option={
        isStatic:false,
        restitution:1.0,
        friction:1,
        density:0.2
         
     }
     this.body=Bodies.circle(x,y,r,option)
   this.r = r;
     this.image = loadImage("stone.png")
     World.add(world,this.body)
 }
 display(){
     push()
     translate(this.body.position.x,this.body.position.y)
     rotate(this.body.angle)
     strokeWeight(2)
     stroke("black")
     imageMode(CENTER)
     image(this.image, 0, 0, this.r, this.r)
     pop()
 }
 }