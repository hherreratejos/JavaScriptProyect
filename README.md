## Neons

Link : https://hherreratejos.github.io/JavaScriptProyect/

- Is a one player game, where the user plays as a circle that can change colors.

- The goal is to survive as long as possible, avoiding incoming circles and matching the color of the incoming lines.

- The controls used are 'QWER', the left arrow and the right arrow.

## Technologies

- Canvas renders every element in the game and takes care of the movement aswell.

## Functionality

- The user can change the posision of the main circle between two lanes and change it's color to one of 4 colors, specified in the controls.

- Obstacles such as lines and grey circles move toward the player by updating their position and redrawing them.

``` javascript
// Circle

  update(c){
    this.draw(c);
    this.y += this.yv;
  }

// yv = y velocity
```

``` javascript
// Line

  update(c){
    this.draw(c);
    this.p1[1] += this.dl;
    this.p2[1] += this.dl;
  }

// dl = line velocity
```
    
  - The score will increase live in the screen and The final score will show in the Game Over screen.
  
  - The main screen has 3 buttons to my Github, to start the game or to go to the instructions screen, that glow when hover over them.

## Future Features

* Different dificulties that change the velocity and the number of colors aveilable.
* Music added with a mute/unmute button.
* Updated controls panel with buttons to make the game playable on touch screens.
