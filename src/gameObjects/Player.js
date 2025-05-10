export class Player extends Phaser.GameObjects.Rectangle
{
    constructor(scene,x,y, size = 32)
    {
        super(scene,x,y,size,size,0x0000ff)
        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.body.setCollideWorldBounds(true)
    }

    setVelocity(x, y) {
        const speed = 250;
        const length = Math.hypot(x, y);

        if (length > 0) {
            x = (x / length) * speed;
            y = (y / length) * speed;
        }

        this.body.setVelocity(x, y);
    }
}