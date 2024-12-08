import Mobile from './Mobile.js';

const PADDLE_IMAGE_SRC = './images/paddle.png';
const SHIFT_X = 8;
const SHIFT_Y = 4;

export default class Ball extends Mobile {

  /**  build a ball
   *
   * @param  {number} x       the x coordinate
   * @param  {number} y       the y coordinate
   * @param  {Game} theGame   the Game this ball belongs to
   */
  constructor(x, y, theGame) {
    super(x, y, BALL_IMAGE_SRC , SHIFT_X, SHIFT_Y);
    this.theGame = theGame;
  }

  move() {
    super.move();
  }

}