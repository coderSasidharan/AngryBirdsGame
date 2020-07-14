class Slingshot{
    constructor(a,b){
        var options = {
            bodyA: a ,
            pointB: b ,
            length: 5,
            stiffness: 0.09

        }
       this.connect =  Matter.Constraint.create(options)
       World.add(world,this.connect);
       console.log(this.connect);
       this.c = b
       this.img1 = loadImage("sprites/sling1.png");
       this.img2 = loadImage("sprites/sling2.png");
       this.img3 = loadImage("sprites/sling3.png");
    }
    view(){
        image(this.img1,200,20)
        image(this.img2,170,20)
        if(this.connect.bodyA!=null){
        strokeWeight(5)
        stroke(62,38,15)
        if(this.connect.bodyA.position.x<220){
        line(this.connect.bodyA.position.x-20,this.connect.bodyA.position.y,this.c.x-10,this.c.y)
        line(this.connect.bodyA.position.x-20,this.connect.bodyA.position.y,this.c.x+30,this.c.y-3)
        image(this.img3,this.connect.bodyA.position.x-30,this.connect.bodyA.position.y-10,15,30)
        }
        else{
            line(this.connect.bodyA.position.x-20,this.connect.bodyA.position.y,this.c.x-10,this.c.y)
            line(this.connect.bodyA.position.x-20,this.connect.bodyA.position.y,this.c.x+30,this.c.y-3)
            image(this.img3,this.connect.bodyA.position.x+25,this.connect.bodyA.position.y-10,15,30)
        }
    }
}
}

