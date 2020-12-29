class Constraint {
    constructor(){
this.body=Matter.Constraint.create({
    bodyA:ball,
    pointB:{x:300,y:0},
    length:400,
    stiffness:0.7
})
World.add(world,this.body)
    }
    display(){
        line (ball.position.x,ball.position.y,300,0)
    }
}