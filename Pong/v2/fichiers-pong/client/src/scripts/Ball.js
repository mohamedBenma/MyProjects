import Mobile from './Mobile.js';


// default values for a Ball : image and shifts
const BALL_IMAGE_SRC = './images/balle24.png';
const SHIFT_X = 8;
const SHIFT_Y = 4;


/**
 * a Ball is a mobile with a ball as image and that bounces in a Game (inside the game's canvas)
 */
export default class Ball extends Mobile {

  /**  build a ball
   *
   * @param  {number} x       the x coordinate
   * @param  {number} y       the y coordinate
   * @param  {Game} theGame   the Game this ball belongs to
   */
  #ballStopped;
  constructor(x, y, theGame) {
    super(x, y, BALL_IMAGE_SRC , SHIFT_X, SHIFT_Y);
    this.theGame = theGame;
    this.#ballStopped=false;
  }
  get ballStopped(){
    return this.#ballStopped;
  }
  set ballStopped(value){
    this.#ballStopped=value;
  }


  /**
   * when moving a ball bounces inside the limit of its game's canvas
   */
  move() {
    if (this.y <= 0 || (this.y+this.height >= this.theGame.canvas.height)) {
      this.shiftY = - this.shiftY;    // rebond en haut ou en bas
    }
    else if (this.x + this.width >= this.theGame.canvas.width ) {
      this.shiftX = - this.shiftX;    // rebond en gauche ou à droite
    }
    else if(this.x <= 0){
      console.log("else if Ball");
      this.stopMoving();
      this.ballStopped=true;
    }
    super.move();
    console.log("super.move()")
  }
  // 
  collisionWith(mobile){
    console.log("mobile y:"+mobile.y);
    console.log("mobile height:"+mobile.height);
    const padLeftCond=this.x >= mobile.x && this.x<= mobile.x+mobile.width && this.y>=mobile.y && this.y<=mobile.y+mobile.height;
    
    if (padLeftCond && mobile.x<this.theGame.canvas.width/2){
      const ballY=this.y;
      const mobileY=mobile.y;
      const impact=ballY-mobileY;
      console.log("impact"+impact);
      const n=this.zoneCord(mobile,impact);
      console.log("n"+n);
    }
    else{
      console.log("nocollision"+this.mobile+" "+mobile.width);
      console.log("nocollision"+ this.x );
    }
  }
  zoneCord(mobile,yCord){
    console.log("Ycord"+yCord);
    const mH=mobile.height;
    let n;
    if (0<=yCord&&yCord<11||77<=yCord&&yCord<=88 ){
      n=-3;
    }
    else if (11<=yCord&&yCord<22||66<=yCord&&yCord<77){
      n= -2;
    }
    else if (22<=yCord&&yCord<33||55<=yCord&&yCord<66){
      n=-1;
    }
    else if (33<=yCord&&yCord<=44 || 44<=yCord&&yCord<55){
      n= 0;
    }
    console.log("n="+n);
  this.updateShifts(yCord,n,mH);
  }
  updateShifts(yCord,val,mobileH){
    console.log("shiftx avant rebond"+this.shiftX);
    console.log("shifty avant rebond"+this.shiftY);
    const randomNbr= Math.floor(Math.random() * (3 - 0)) + 0;
    console.log("rebond randomnbr"+randomNbr);
    if(yCord>mobileH/2){
      console.log("rebond val "+val);
      console.log("rebond "+yCord +">"+ mobileH/2);
      this.shiftY=-val;
      this.shiftX=7-Math.abs(val);}
    
    else{
      console.log("rebond "+yCord +"<"+ mobileH/2);
      console.log("rebond val "+val);
      this.shiftY=val;
      this.shiftX=7-Math.abs(val);
      
    console.log("shiftx apres rebond"+this.shiftX);
    console.log("shifty apres rebond"+this.shiftY);
  }
  }

}