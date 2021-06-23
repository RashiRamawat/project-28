class Paper{

    constructor(x,y){
        var options={
            isStatic: true,
            density:1.2,
            restitution:0.3,
            friction:0.5
        }
       this.x=x;
       this.y=y;
       this.image=loadImage("paper.png")
        this.body=Bodies.circle(this.x,this.y,20,options);

        World.add(world,this.body);
    }
    display(){

        
        push();
      translate(this.body.position.x, this.body.position.y);
      rotate(this.body.angle);
      
      fill(255);
      imageMode (CENTER)
      image (this.image,this.body.position.x, this.body.position.y,40,40)
    
     
      
      pop();

    }
}