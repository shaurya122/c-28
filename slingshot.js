class Slingshot{
constructor(A,pointb){
        var options={
        bodyA:A,
        pointB:pointb,
        length:10,
        stifness:0.04


        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain)



    }   


    display(){
        if(this.chain.bodyA!=null){

        
        strokeWeight(4);
         line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y)
        }
    }


    fly(){
        this.chain.bodyA=null;

    }

}



