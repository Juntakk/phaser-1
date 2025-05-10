export class GameOver extends Phaser.Scene {
    constructor() {
        super('GameOver');
    }

    create() {
        // Set the background color
        this.cameras.main.setBackgroundColor(0xff0000);

        // Add background image with alpha for transparency
        this.add.image(512, 384, 'background').setOrigin(0.5).setAlpha(0.5);

        // Add the "Game Over" text, centered both horizontally and vertically
        const gameOverText = this.add.text(400, 300, 'Game Over', {
            fontFamily: 'Arial Black',
            fontSize: 64,
            color: '#ffffff',
            stroke: '#000000',
            strokeThickness: 8,
            align: 'center',
        }).setOrigin(0.5);

        // Add a "Restart" button with text
        const restartButton = this.add.text(400, 350, 'Press ENTER to Restart', {
            fontFamily: 'Arial',
            fontSize: 32,
            color: '#ffffff',
            stroke: '#000000',
            strokeThickness: 6,
            align: 'center',
        }).setOrigin(0.5);

        // Make the "Restart" text interactive
        restartButton.setInteractive();

        // Add a simple hover effect
        restartButton.on('pointerover', () => {
            restartButton.setStyle({ fill: '#ffff00' }); // Highlight on hover
        });

        restartButton.on('pointerout', () => {
            restartButton.setStyle({ fill: '#ffffff' }); // Reset hover style
        });

        // Restart the game when the button is clicked or "Enter" key is pressed
        restartButton.on('pointerdown', () => this.restartGame());
        this.input.keyboard.on('keydown-ENTER', () => this.restartGame());
    }

    // Method to restart the game
    restartGame() {
        this.scene.start('Game'); // Replace 'MainMenu' with the actual scene you want to go to
    }
}
