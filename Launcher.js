class Launcher {
    constructor(bodyA,bodyB)
    {
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.01,
            lenght:5
        }
        this.Launcher=Constraint.create(options)
        World.add(world,this.Launcher)    
    }
    fly(){
        this.sling.bodyA = null;
    }

   display(){
       var pointA=this.Launcher.bodyA.position
       var pointB=this.Launcher.bodyB.position
      strokeWeight(4)
       line(pointA.x,pointA.y,pointB.x,pointB.y)

   }



}