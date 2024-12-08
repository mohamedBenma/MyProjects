import Mobile from './Mobile.js';

const PADDLE_IMAGE_SRC = './images/paddle.png';
const SHIFT_X = 0;
const SHIFT_Y = 8;
const MoveState = { LEFT : 0, RIGHT : 1, NONE : 2,UP:3,DOWN:4};
export default class paddle extends Mobile {

  /**  build a ball
   *
   * @param  {number} x       the x coordinate
   * @param  {number} y       the y coordinate
   * @param  {Game} theGame   the Game this ball belongs to
   */
  constructor(x, y, theGame) {
    super(x, y, PADDLE_IMAGE_SRC , SHIFT_X, SHIFT_Y);
    this.theGame = theGame;
    this.moving=MoveState.NONE;
  }

  move() {
    this.verifyDirection(); 
  }
  moveDown(){
    this.shiftY=+Math.abs(this.shiftY);
    this.moving=MoveState.DOWN;
    }
  moveUp(){
    this.shiftY=-Math.abs(this.shiftY);
    this.moving=MoveState.UP;
  }
  noMove(){
    this.moving=MoveState.NONE;
  }
  stopMoving(){
    super.stopMoving();
  }
  verifyDirection(){
    // move up the paddle et gestion du rebond superieur
    if (this.moving===MoveState.UP){
      this.y=Math.max(0,this.y+this.shiftY);
    }
    // move down the paddle et gestion du rebond inferieur
    else if(this.moving===MoveState.DOWN){
      this.y=Math.min(this.theGame.canvas.height-this.height,this.y+this.shiftY);    }
  }
  
}