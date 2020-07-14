class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.value = 255
  }
view(){
  
  if(this.body.speed>3){
    World.remove(world,this.body);
    push();
    this.value = this.value-5
    tint(250,this.value)
    image(this.image,this.body.position.x,this.body.position.y,50,50);
    pop();
   
  }
  else{
    super.display();
  }
}



};