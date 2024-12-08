import Ball from './Ball.js';
import paddle from './Paddle.js'


/**
 * represente un seul client
 */
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
    this.paddle2=new paddle(60,this.canvas.height/2,this);
    this.paddle1=new paddle(this.canvas.width-80,this.canvas.height/2,this);
    this.ball = new Ball(this.paddle2.x,this.paddle2.y+this.paddle2.height/2,this);
    this.gameCanStart=false;
    this.socket=null;
    this.firstPlayer=false;
    this.secondPlayer=false;
    this.ctxt = this.canvas.getContext("2d");
  }
  
  /** start this game animation */ can
  start() {
    if (this.firstPlayer){ 
      console.log("startFirstPlayer");
      this.socket.emit("player1StartedTheGame");
      this.socket.on("twoPlayersReady",()=>{
        console.log("need to turn the buttons to arret")
        this.launchThegame();
      })
      
    }
    else{
    }
    
  }

  /** stop this game animation */
  stop() {
    console.log("stop Game");
    window.cancelAnimationFrame(this.raf);
    this.disconnect();
    this.stopTheGame();

  }
  actualPlayer(){
    if (this.firstPlayer){
      return "First"} 
      else{
        return "Second"
      }
  }
  /** animate the game : move and draw */
  animate() {
    const a=this.actualPlayer();
    console.log("animate"+ a)
    this.moveAndDraw();

    this.raf = window.requestAnimationFrame(this.animate.bind(this));
  }
  /** move then draw the bouncing ball and the paddle2 */
  moveAndDraw() {
    this.ctxt.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // draw and move the ball
      window.removeEventListener('keydown',this.keySpacePress.bind(this));
    //this.ball.move();
    this.ball.draw(this.ctxt);
    this.ball.move();
    this.paddle2.move();
    this.paddle2.draw(this.ctxt);
    this.paddle1.move();
    this.paddle1.draw(this.ctxt);
    this.ball.collisionWith(this.paddle2);
    this.ball.collisionWith(this.paddle1);
}
// gestion des mouvements operés en fonctions des touches actionées et envoi des nouvelles cordonnées d'un paddle
// à l'autre paddle
  keyDownActionHandler(event){
    console.log("button pressed")
    if (this.firstPlayer){
      console.log("paddle2 changing position")
      if(event.keyCode==38){
        this.paddle1.moveUp();
        this.sendPos("First",this.paddle1.y,this.ball.x,this.ball.y);}
      else if (event.keyCode==40){
        this.paddle1.moveDown();
        this.sendPos("First",this.paddle1.y,this.ball.x,this.ball.y);
      }
      
    }
    else if (this.secondPlayer){
      console.log("paddle1 changing position")
      if (event.keyCode==38){
        this.paddle2.moveUp();
        this.sendPos("Second",this.paddle2.y,this.ball.x,this.ball.y);
    }
      else if (event.keyCode==40){
        this.paddle2.moveDown();
        this.sendPos("Second",this.paddle2.y,this.ball.x,this.ball.y);
   }
}
  }
      
  // interrompre le deplacement des deux paddles une fois les touches non actionnées.
  keyUpActionHandler(event){
    switch(event.keyCode){
      case 38:
      case 40:
      case 90:
      case 83:
        this.paddle2.noMove();
        this.paddle1.noMove();  
        break;
      case 32:
        break;
      default: return;
      }
      event.preventDefault();
  }
  // evenement qui permet de relancer la balle si cette derniere venait à toucher l'un des deux murs.
  keySpacePress(event){

    if (event.keyCode==32){
        /* console.log("espace case"); */
        this.ball = new Ball(this.paddle2.x,this.paddle2.y+this.paddle2.height/2,this);
    }
  }


  reachTheWall(){
    if (this.ball.ballStopped){
      return true;
}
    else{
      return false;}}
  // envoi d'un welcome au serveur afin d'integrer le client au jeu
 connect(){

   this.socket=io();
  this.socket.on("welcome",()=>{
  document.getElementById('start').value="Jouer";
   /* console.log("im connected thanks"); */
  this.socket.emit('greatings');
 })
 this.rank();
}
  // deconnexion du serveur
  disconnect(){
    this.socket.emit('leave');
  }
  // verifie la position du joueur qui vient d'arriver
  rank(){
    console.log("rank");
    this.socket.on("screenPos",(data)=>{
     /*  console.log("screenPOs") */
      if (data==3){
        this.removeButton("start",this.stop());
        document.getElementById("player").innerHTML= data ;
      }
      else{
        document.getElementById("player").innerHTML= data+ "Player";
        if (data=="First"){
          this.firstPlayer=true
          this.secondPlayer=false;
        }
        else if (data=="Second"){
          this.firstPlayer=false;
          this.secondPlayer=true;
        }
        this.playersConnected();
      }
    }) 
  }
// rendre un bouton invisible et dysfonctionnel
removeButton(id,listener){
    document.getElementById(id).style.visibility="hidden";
    document.getElementById(id).removeEventListener("click",listener);
}
// notifie au serveur que deux joueurs sont connecté et qu'à tout moment le jeu peut commencé.
playersConnected(){
  /* console.log("playersConnectedinit"); */
    this.socket.on("canStartTheGame",()=>{
    /* console.log("playersConnected"); */
    this.paddle1.draw(this.ctxt);
    this.paddle2.draw(this.ctxt);
    this.launchThegame();
  })
}
// envoi des nouvelles cordonnées d'un paddle et de la balle au joueur adverse
sendPos(paddle,paddleYpos,ballX,ballY){
  console.log("sendpos");
 /*  console.log("sendPos" + paddle); */
  this.socket.emit("newPosition",paddle,paddleYpos,ballX,ballY);
  this.socket.on("updatePos",(p,pY,bX,bY)=>{
    switch(paddle){
      case "First":
        this.paddle2.y=pY;
        this.ball.x=bX;
        this.ball.y=bY;
        this.paddle2.move()
        this.paddle2.draw(this.ctxt);
        this.moveAndDraw()
        this.paddle1.move()
        this.paddle1.draw(this.ctxt);
        this.moveAndDraw();

        break;
      case "Second":
        console.log(paddle+ "mis a jr" );
        this.paddle1.y=pY;
        this.ball.x=bX;
        this.ball.y=bY;
        this.paddle1.move()
        this.paddle1.draw(this.ctxt);
        this.moveAndDraw();
        this.paddle2.move()
        this.paddle2.draw(this.ctxt);
        break;
    }
    })
}
// permet de notifier au sevreur que le joueur 1 à demarrer la partie afin de faire joindre le joueur deux à cette derniere.
launchThegame(){
  console.log("launchthegameinit");
    document.getElementById('start').value = 'arret';
      this.animate(); 
  }

// envoi un message au serveur afin d'informer les joueurs que la partie est terminée.
stopTheGame(){
  this.socket.on("gameStopped",()=>{
    this.stop();
  }) 
}
}
