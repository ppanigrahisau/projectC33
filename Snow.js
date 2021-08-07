class Snow{
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        //this.trajectory =[];
        
        //this .image = loadImage("snow3.jpg");
        //this .image = loadImage("snow1.jpg");
        this .image = loadImage("snow2.jpg");
        //this .image = loadImage("snow4.jpg");
        //this .image = loadImage("snow5.jpg");

        World.add(world, this.body);
       
      }
      display(){
        var pos =this.body.position;
        imageMode(CENTER);
        fill("brown");
        image(this.image,pos.x,pos.y,width,height );

      

        //for(var i=0; i<this.trajectory.length; i++){
          //image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
        //}
      }
    } 
      
        
