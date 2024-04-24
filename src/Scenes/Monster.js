class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = { sprite: {} };  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 250;

        this.leftLegX = this.bodyX + -45;
        this.leftLegY = this.bodyY + 175;
        
        this.rightLegX = this.bodyX + 45;
        this.rightLegY = this.bodyY + 175;

        this.leftArmX = this.bodyX + -90;
        this.leftArmY = this.bodyY + 45;

        this.rightArmX = this.bodyX + 90;
        this.rightArmY = this.bodyY + 45;

        this.eyeX = this.bodyX;
        this.eyeY = this.bodyY + -45;

        this.smileX = this.bodyX;
        this.smileY = this.bodyY + 30;

        this.fangsX = this.bodyX;
        this.fangsY = this.bodyY + 20;

        this.leftEarX = this.bodyX + -80;
        this.leftEarY = this.bodyY + -80;

        this.rightEarX = this.bodyX + 80;
        this.rightEarY = this.bodyY + -80;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");

        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_whiteE.png");

        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_whiteA.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_whiteA.png");

        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_whiteA.png");
        my.sprite.leftArm.flipX = true;
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_whiteA.png");

        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_angry_blue.png");
        my.sprite.smile = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouthA.png");
        my.sprite.fangs = this.add.sprite(this.fangsX, this.fangsY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.fangs.visible = false;

        my.sprite.leftEar = this.add.sprite(this.leftEarX, this.leftEarY, "monsterParts", "detail_white_ear_round.png");
        my.sprite.leftEar.flipX = true;
        my.sprite.rightEar = this.add.sprite(this.rightEarX, this.rightEarY, "monsterParts", "detail_white_ear_round.png");

        let sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        let fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

        sKey.on('down', (key, event) => {
            my.sprite.smile.visible = true;
            my.sprite.fangs.visible = false;
        });

        fKey.on('down', (key, event) => {
            my.sprite.smile.visible = false;
            my.sprite.fangs.visible = true;
        });

        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
    // left movement
        if (this.aKey.isDown) {
            for (let spriteName in this.my.sprite) {
                    this.my.sprite.body.x -= 1;
            }
        }

        if (this.aKey.isDown) {
            for (let spriteName in this.my.sprite) {
                this.my.sprite.leftLeg.x -= 1;
            }
        }
        
        if (this.aKey.isDown) {
            for (let spriteName in this.my.sprite) {
                this.my.sprite.rightLeg.x -= 1;
            }
        }

        if (this.aKey.isDown) {
            for (let spriteName in this.my.sprite) {
                this.my.sprite.leftArm.x -= 1;
            }
        }
        
        if (this.aKey.isDown) {
            for (let spriteName in this.my.sprite) {
                this.my.sprite.rightArm.x -= 1;
            }
        }
        
        if (this.aKey.isDown) {
            for (let spriteName in this.my.sprite) {
                this.my.sprite.eye.x -= 1;
            }
        }
        
        if (this.aKey.isDown) {
            for (let spriteName in this.my.sprite) {
                this.my.sprite.smile.x -= 1;
            }
        }
        
        if (this.aKey.isDown) {
            for (let spriteName in this.my.sprite) {
                this.my.sprite.fangs.x -= 1;
            }
        }
        
        if (this.aKey.isDown) {
            for (let spriteName in this.my.sprite) {
                this.my.sprite.leftEar.x -= 1;
            }
        }
        
        if (this.aKey.isDown) {
            for (let spriteName in this.my.sprite) {
                this.my.sprite.rightEar.x -= 1;
            }
        }


    // right movement
        if (this.dKey.isDown) {
            for (let spriteName in this.my.sprite) {
                    this.my.sprite.body.x += 1;
            }
        }

        if (this.dKey.isDown) {
            for (let spriteName in this.my.sprite) {
                this.my.sprite.leftLeg.x += 1;
            }
        }
        
        if (this.dKey.isDown) {
            for (let spriteName in this.my.sprite) {
                this.my.sprite.rightLeg.x += 1;
            }
        }

        if (this.dKey.isDown) {
            for (let spriteName in this.my.sprite) {
                this.my.sprite.leftArm.x += 1;
            }
        }
        
        if (this.dKey.isDown) {
            for (let spriteName in this.my.sprite) {
                this.my.sprite.rightArm.x += 1;
            }
        }
        
        if (this.dKey.isDown) {
            for (let spriteName in this.my.sprite) {
                this.my.sprite.eye.x += 1;
            }
        }
        
        if (this.dKey.isDown) {
            for (let spriteName in this.my.sprite) {
                this.my.sprite.smile.x += 1;
            }
        }
        
        if (this.dKey.isDown) {
            for (let spriteName in this.my.sprite) {
                this.my.sprite.fangs.x += 1;
            }
        }
        
        if (this.dKey.isDown) {
            for (let spriteName in this.my.sprite) {
                this.my.sprite.leftEar.x += 1;
            }
        }
        
        if (this.dKey.isDown) {
            for (let spriteName in this.my.sprite) {
                this.my.sprite.rightEar.x += 1;
            }
        }
    }

}