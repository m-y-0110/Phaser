import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: "MainScene" });
    }

    create() {
        //new PhaserLogo(this, this.cameras.main.width / 2, 0);
        this.add.image(400, 300, "sky");

        const message = `Phaser v${Phaser.VERSION}`;
        this.add
            .text(this.cameras.main.width - 15, 15, message, {
                color: "#000000",
                fontSize: "24px",
            })
            .setOrigin(1, 0);
    }

    update() {}
}
