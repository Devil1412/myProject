class snake{
    
    constructor(){
        
        this.x = 0;
        this.y = 20;
        this.xDir  = 0;
        this.yDir = 0;
        this.obj = [];
        this.s = 0;
        this.obj[0] = new body(255 , 0 , 0);
    }
    
    update(){
        
        // stroke(0);
        // strokeWeight(5);
        // line(0 , 20 , width , 20);

        this.x += this.xDir  * scl;
        this.y += this.yDir * scl;

        // this.x = constrain(this.x , 0 , width - scl);
        // this.y = constrain(this.y , 0 , height - scl);
        
        if( this.x > width-scl ){
            this.x = 0;
        }

        else if(this.x < 0 ){
            this.x = width;
        }

        else if(this.y < 0){
            this.y = height;
        }

        else if(this.y > height -scl){
            this.y = 0;
        }


    }

    dir(x , y){

        this.xDir  = x;
        this.yDir = y;
        
    }

    eat(pos){
        
        var d = dist( this.x , this.y , pos.x , pos.y);
        
        if( d < 2){
            this.obj.push(new body(255 , 0 , 0));
            return true;
        }
        
    }
    
    
    move(){
        
        for(var i = this.obj.length-1 ; i > 0 ; i-- ){

            this.obj[i].snake_body(this.obj[i-1].x , this.obj[i-1].y);

        } 
        
        this.obj[0].snake_body(this.x , this.y );

    }   

    score(){
     
        this.s = this.obj.length-1;
        noStroke();

        text( ' Score : ' , 200 , 15);
        text(this.s , 250 , 15);
    
    }

    hit(){

        if( this.obj.length > 3){

            for(var i = 1 ; i < this.obj.length ; i ++){
                
                if( dist(this.obj[0].x , this.obj[0].y , this.obj[i].x , this.obj[i].y ) < 10){
                    noLoop();
                }
            }

        }
    }
}