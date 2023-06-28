class Animation {
    constructor(imageSrc) {
      this.canvas = document.getElementById('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.CANVAS_WIDTH = this.canvas.width = 35;
      this.CANVAS_HEIGHT = this.canvas.height = 35;
      this.playerImage = new Image();
      this.playerImage.src = imageSrc;
      this.spriteWidth = 32;
      this.spriteHeight = 32;
      this.playerState = "down";
      this.gameFrame = 0;
      this.staggerFrames = 10;
      this.spriteAnimations = {};
      this.animationsStates = [
        {
          name: 'down',
          frames: 4
        },
        {
          name: 'right',
          frames: 4
        },
        {
          name: 'up',
          frames: 4
        },
        {
          name: 'left',
          frames: 4
        }
      ];
      this.initializeSpriteAnimations();
      this.animate();
    }
  
    initializeSpriteAnimations() {
      this.animationsStates.forEach((state, index) => {
        let frames = {
          loc: [],
        };
  
        for (let j = 0; j < state.frames; j++) {
          let positionX = j * this.spriteWidth;
          let positionY = index * this.spriteHeight;
          frames.loc.push({ x: positionX, y: positionY });
        }
        this.spriteAnimations[state.name] = frames;
      });
    }
  
    animate() {
      this.ctx.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
      let position = Math.floor(this.gameFrame / this.staggerFrames) % this.spriteAnimations[this.playerState].loc.length;
      let frameX = this.spriteWidth * position;
      let frameY = this.spriteAnimations[this.playerState].loc[position].y;
      this.ctx.drawImage(this.playerImage, frameX, frameY, this.spriteWidth, this.spriteHeight, 0, 0, this.spriteWidth, this.spriteHeight);
      this.gameFrame++;
      requestAnimationFrame(() => this.animate());
    }
  
    setPlayerState(playerState) {
      this.playerState = playerState;
    }
  }
  
  // Beispielverwendung der Klasse
  //const animation = new Animation('DemoRpgCharacter.png');
  //animation.setPlayerState('down');
  