class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.picture = loadImage("sprites/smoke.png")
    this.allpos = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    var birdpos = [this.body.position.x,this.body.position.y]
    if(this.body.velocity.x>8&&this.body.position.x>200){
    this.allpos.push(birdpos)
    }
    for(var i=0;i<this.allpos.length;i++){
      if(gameState === 2){
      image(this.picture,this.allpos[i][0],this.allpos[i][1])
      }
    }
  }
}
