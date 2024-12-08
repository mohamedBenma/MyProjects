import Ball from './Ball.js';
import Paddle from './Paddle.js'

/**
 * a Game animates a ball bouncing in a canvas
 */
export default class Game {

  /**
   * build a Game
   *
   * @param  {Canvas} canvas the canvas of the game
   */
  constructor(canvas) {
    this.raf = null;
    this.canvas = canvas;
    this.paddle=new Paddle(40,this.canvas.height/2,this);
    this.paddle1=new Paddle(this.canvas.width-80,this.canvas.height/2,this);
    this.ball = new Ball(this.paddle.x,this.paddle.y+this.paddle.height/2,this);
  }

  /** start this game animation */
  start() {
    this.animate();
  }
  /** stop this game animation */
  stop() {
    console.log("stop Game")
    window.cancelAnimationFrame(this.raf);
  }

  /** animate the game : move and draw */
  animate() {
    this.moveAndDraw();
    this.raf = window.requestAnimationFrame(this.animate.bind(this));
  }
  /** move then draw the bouncing ball and the paddle */
  moveAndDraw() {
    const ctxt = this.canvas.getContext("2d");
    ctxt.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // draw and move the ball
    if (this.ball.ballStopped==false){
      window.removeEventListener('keydown',this.keySpacePress.bind(this));
    this.ball.move();
    this.ball.draw(ctxt);
    this.paddle.move();
    this.paddle.draw(ctxt);
    this.paddle1.move();
    this.paddle1.draw(ctxt);
    this.ball.collisionWith(this.paddle);
    this.ball.collisionWith(this.paddle1);
    
    }
    else{
      console.log("else game atteint");
      this.ball.draw(ctxt);
      this.paddle.draw(ctxt);
      this.paddle1.draw(ctxt);
      window.addEventListener('keydown',this.keySpacePress.bind(this));
  }
}
  keyDownActionHandler(event){
    switch(event.keyCode){
      case 38:
        this.paddle1.moveUp();
        break;
      case 40:
        this.paddle1.moveDown();
        break;
      case 90:
        this.paddle.moveUp();
        break;
      case 83:
        this.paddle.moveDown();
        break;
      case 32:
        
      }
      event.preventDefault();
  }
  // interrompre le deplacement du paddle 
  keyUpActionHandler(event){
    switch(event.keyCode){
      case 38:
      case 40:
      case 90:
      case 83:
        this.paddle.noMove();
        this.paddle1.noMove();  
        break;
      case 32:
        break;
      default: return;
      }
      event.preventDefault();
  }
  keySpacePress(event){

    if (event.keyCode==32){
        console.log("espace case");
        this.ball = new Ball(this.paddle.x,this.paddle.y+this.paddle.height/2,this);
    }
  }


  // atteinte du mur gauche ball
  reachTheWall(){
    if (this.ball.ballStopped){
      return true;
    }
    else{
      return false;
    }

  }
}


