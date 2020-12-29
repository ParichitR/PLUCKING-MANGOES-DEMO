class Mango{

    constructor(x,y,diamtre){

        var options={
            isStatic:true,
            'restitution':0.5,
           'friction':1.0,
          
        }

        this.body=Bodies.circle(x,y,diametre,options)
        this.diametre=diametre
        this.image=loadImage("mango.png")
        World.add(world,this.body)
    }

    display(){
        push();
        imageMode(CENTER)
        transalate(this.body.position.x,this.body.position.y)
        image(this.image,0,0,this.diametre)
        pop();
    }
}