class Box{
  constructor(x, y, width, height,color) {
      var options = {
          'restitution':0.8,
          'friction':0.8,
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.color=color
      this.width = width;
      this.height = height;
      this.Visibility=255
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<10){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      fill(this.color)
      rect(0, 0, this.width, this.height);
      pop();
      }
      else{
        World.remove(world,this.body)
        push();
        this.Visibility=this.Visibility-5
        pop();
      }
    }
}