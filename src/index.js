// Entry file for JavaScript

import {Line} from './scripts/line.js';
import {text, startGame, showInstructions, gameOver} from './scripts/funcs.js'
import {Game} from './scripts/game.js';


window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("canvas");
  const c = canvas.getContext("2d");
  const startGamebtn = document.getElementById('start-game');
  const instructionsbtn = document.getElementById('instructions')
  const playAgainbtn = document.getElementById('menu-fgo');
  const mainMenu = document.getElementById('menu-finstructions')
  const showScore = document.getElementById('show-score')
  
  
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth / 2;
  
  let game = new Game(canvas.width, canvas.height, [(canvas.width / 3), 2 * (canvas.width / 3)]);

  // Animate
  
  function animate(){
    window.requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    // Lines
    
    c.beginPath();
    c.moveTo((canvas.width / 6), 0);
    c.lineTo((canvas.width / 6), canvas.height);
    c.strokeStyle = "#c0c0c0"
    c.stroke();
  
    c.beginPath();
    c.moveTo(3 * (canvas.width / 6), 0);
    c.lineTo(3 * (canvas.width / 6), canvas.height);
    c.strokeStyle = "#c0c0c0"
    c.stroke();
  
    c.beginPath();
    c.moveTo(5 *(canvas.width / 6), 0);
    c.lineTo(5 *(canvas.width / 6), canvas.height);
    c.strokeStyle = "#c0c0c0"
    c.stroke();


    if (!game.isGameOver){
      game.drawPlayer(c);
      game.updatePosition(c);
      game.l.update(c);
    }

    // Collision
    if (game.checkCollition() === true){
      gameOver(animate);
      game.handleGameOver(showScore);
    }

// Score

  text(`Score: ${Math.floor(game.score)}`,0, 50, c)

    if (game.isGameOver === false){
      game.score += 1 / 60;
    }
  }

  // Key Binds
  

  window.addEventListener('keydown', (event) =>{
    switch( event.key){
        case 'ArrowRight':
           game.p.x = 4 * (canvas.width / 6)
           game.p.y = 5 * (canvas.height / 6)
        break
    }
  })

  window.addEventListener('keydown', (event) =>{
    switch( event.key){
        case 'ArrowLeft':
           game.p.x = canvas.width / 3
           game.p.y = 5 * (canvas.height / 6)
        break
    }
  })

  window.addEventListener('keydown', (event) =>{
    switch( event.key){
        case 'q':
          game.p.color = '#FFFF00'
        break
    }
  })

  window.addEventListener('keydown', (event) =>{
    switch( event.key){
        case 'w':
          game.p.color = '#FF0080'
        break
    }
  })

  window.addEventListener('keydown', (event) =>{
    switch( event.key){
        case 'e':
          game.p.color = '#00FF48'
        break
    }
  })

  window.addEventListener('keydown', (event) =>{
    switch( event.key){
        case 'r':
          game.p.color = '#00FFD9'
        break
    }
  })

// Event  Listeners

  startGamebtn.addEventListener('click', () => {
    startGame(animate)
  })

  instructionsbtn.addEventListener('click', () => {
    showInstructions()
  })

  playAgainbtn.addEventListener('click', () => {
    window.location.reload();
  })

  mainMenu.addEventListener('click', () => {
    window.location.reload();
  })

});

