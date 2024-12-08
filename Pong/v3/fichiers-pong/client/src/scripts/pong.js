'use strict';

import Ball from './Ball.js';
import Game from './Game.js';

const init = () => {
  const theField = document.getElementById("field");
  const theGame = new Game(theField);

  document.getElementById('start').addEventListener("click", () => startGame(theGame) ); 
  }

window.addEventListener("load",init);

// true iff game is started
let started = false;
/** start and stop a game
 * @param {Game} theGame - the game to start and stop
 */
const startGame = theGame => {
  console.log("started"+started);
  if (!started) {
    console.log("pong non started")
    theGame.start();
    document.getElementById('start').value = 'stop';
    theGame.moveAndDraw();
    // appui sur une des fleches directionnellles
  window.addEventListener('keydown',theGame.keyDownActionHandler.bind(theGame));
  window.addEventListener('keyup',theGame.keyUpActionHandler.bind(theGame));
  // enlever sa main d'une des fleches directionnelles
   }
   
   
  else if (started) {
    
    console.log("else if started");
    document.getElementById('start').value = 'jouer';
    theGame.stop();
  }
  started = ! started;
}

