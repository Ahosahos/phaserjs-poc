import Phaser from "phaser";
// import BouncingLogo from "./scenes/BouncingLogo";
import GameScene from "./scenes/GameScene";

//config for starting scene
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcafe: {
      gravity: { y: 200 },
    },
  },
  scene: [GameScene],
};

//instantiate the game
var game = new Phaser.Game(config);
