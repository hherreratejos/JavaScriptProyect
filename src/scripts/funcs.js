

  function text(text, x, y, c){
    c.fillStyle = 'white';
    c.font = '20px Comic Sans MS';
    c.fillText(text, x, y)
  }


  function getDistance(x1, y1, x2, y2){
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;

    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
  }

  function toggleScreen(id, show){
    let screen = document.getElementById(id);
    let display = ( show) ? 'flex' : 'none';
    screen.style.display = display
  }

  function startGame(cb){

    toggleScreen('first-screen', false);
    toggleScreen('canvas', true);
    toggleScreen('instructions-screen', false);
    toggleScreen('game-over', false) 
    toggleScreen('controls', true) 
    cb();
  }

  function showInstructions(){
    toggleScreen('first-screen', false);
    toggleScreen('canvas', false);
    toggleScreen('instructions-screen', true);
    toggleScreen('game-over', false) 
    toggleScreen('controls', true) 
  }

  function gameOver(cb){
    window.cancelAnimationFrame(cb);
    toggleScreen('first-screen', false);
    toggleScreen('canvas', false);
    toggleScreen('instructions-screen', false);
    toggleScreen('game-over', true) 
    toggleScreen('controls', false)  
  }

  function mainMenu(){
    toggleScreen('first-screen', true);
    toggleScreen('canvas', false);
    toggleScreen('instructions-screen', false);
    toggleScreen('game-over', false) 
    toggleScreen('controls', false) 
  }

  export {text, getDistance, toggleScreen, startGame, showInstructions, gameOver, mainMenu}