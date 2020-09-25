class Block{
    constructor(x,y,width,height,bool){
    var options = {
        'isStatic':bool,
        'restitution':0.8,
        'friction':1.0,
        'density':2.0
        }
    if (crate != null){
        World.remove(world,crate.body);
    }
   this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
         World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
      }
}