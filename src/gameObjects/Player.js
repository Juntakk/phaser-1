export class Player extends Phaser.GameObjects.Rectangle
{
    constructor(scene,x,y, size = 32)
    {
        super(scene,x,y,size,size,0x0000ff)

        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.body.setCollideWorldBounds(true)
        
    }
    
    moveLeft()
    {
        this.body.setVelocityX(-250)
    }

    moveRight()
    {
        this.body.setVelocityX(200)
    }

    idle()
    {
        this.body.setVelocityX(0)
    }

    jump()
    {
        if(this.body.blocked.down){
            this.body.setVelocityY(-400)
        }
    }
}