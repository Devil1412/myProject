class body{

    constructor(r , g , b){

        print("body constructor");
        this. r = r;
        this.g = g;
        this.b = b;

    }

    snake_body(x,y ){
        
        fill(this.r , this.b , this.g);
        // fill(255, 0 , 0);
        noStroke();

        this.x = x;
        this.y = y; 
        
        rect(this.x , this.y , scl , scl);
        stroke(0 , 0 , 0);
        fill(0 , 0 , 0);        
    }

}