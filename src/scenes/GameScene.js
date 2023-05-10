import Phaser from "phaser";

import sky from "../assets/sky.png";
import ground from "../assets/platform.png";
import star from "../assets/star.png";
import bomb from "../assets/bomb.png";
import dude from "../assets/dude.png";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("game-scene");
  }

  preload() {
    this.load.image("sky", sky);
    this.load.image("ground", ground);
    this.load.image("star", star);
    this.load.image("bomb", bomb);
    //spritesheet is an image of sequential sprites
    this.load.spritesheet("dude", dude, { frameWidth: 32, frameHeight: 48 });
  }

  create() {
    this.add.image(400, 300, "sky");
    this.add.image(400, 300, "star");
  }
}
