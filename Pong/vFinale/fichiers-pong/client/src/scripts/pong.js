'use strict';

import Ball from './Ball.js';
import Game from './Game.js';

const init = () => {
  const theField = document.getElementById("field");
  const theGame = new Game(theField);
  window.addEventListener('keydown',theGame.keyDownActionHandler.bind(theGame));
  window.addEventListener('keyup',theGame.keyUpActionHandler.bind(theGame));
  document.getElementById('start').addEventListener("click", () => startGame(theGame) );
  }
window.addEventListener("load",init);

// true iff game is started
let started = false;
let firstbutton=false;
/** start and stop a game
 * @param {Game} theGame - the game to start and stop
 */
const startGame = theGame => {
  console.log(firstbutton+ "firstbutton");
  console.log("started"+started);
  if(!firstbutton){
    theGame.connect();
    firstbutton=true;
  }
  else if (!started) {
    if (theGame.gameCanStart){
    console.log("pong non started");
    theGame.start();
    // appui sur une des fleches directionnellles
  
  started = ! started;
    }
  // enlever sa main d'une des fleches directionnelles
   }
  else if (started) {
    
    console.log("else if started");
    document.getElementById('start').value = 'Connect';
    theGame.stop();
    firstbutton=false;
    started = ! started;

  }

}

