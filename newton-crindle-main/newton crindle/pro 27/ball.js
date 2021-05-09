class Ball {
    constructor(x, y, width, height, angle) {
      var options = { 
        isStatic:true,
        density: 1, 
        frictionAir: 0.005};
  
      this.body = Bodies.circle(x, y, width,  options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
  
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      fill("brown");
      ellipseMode (RADIUS)
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  }