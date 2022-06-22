import {Circle} from './circle.js';
import {getDistance} from './funcs.js';
import {Line} from './line.js'


class Game{
  constructor(gameWidth, gameHeight, coordArr){
      this.gameWidth = gameWidth;
      this.gameHeight = gameHeight;
      this.l = new Line([0, 0], [this.gameWidth, 0], '#FFFF00');
      this.p = new Circle(2 * (this.gameWidth / 3), 5 * (this.gameHeight / 6), (this.gameWidth / 7) / 3, '#FFFF00');
      this.obstacles = [];
      this.generateObstacles();
      this.score = 0;
      this.isGameOver = false;
      this.coordArr = coordArr;
      this.lArr = ['#FFFF00', '#FF0080', '#00FF48', '#00FFD9'];
  }

  generateObstacles(){
    this.obstacles.push(new Circle(this.gameWidth / 3, this.gameHeight / 4 , (this.gameWidth / 6) / 4, 'purple'));
    this.obstacles.push( new Circle(this.gameWidth / 3, this.gameHeight/ 2, (this.gameWidth / 6) / 4, 'purple'));
    this.obstacles.push(new Circle(this.gameWidth / 3,3 * (this.gameHeight / 4), (this.gameWidth / 6) / 4, 'purple'));
    this.obstacles.push( new Circle(this.gameWidth / 3,this.gameHeight, (this.gameWidth / 6) / 4, 'purple'));
  }

  updatePosition(c){

    // Line
    
    if(this.l.p1[1] > this.gameHeight){
      this.l.p1[1] = 0;
      this.l.p2[1] = 0;
      this.l.color = this.lArr[Math.floor(Math.random() * 4)]
      this.dl += 0.1
    };

    // Obstacles

    this.obstacles.forEach(obstacle => {
      obstacle.update(c);
      if (obstacle.y - obstacle.r > this.gameHeight){
        obstacle.y = -obstacle.r * 2
        obstacle.x = this.coordArr[Math.floor(Math.random() * 2)]
        this.obstacles.forEach(o => {
          o.yv += 0.025
        })
      }
    });
  }

  checkCollition(){
    let result = false

    if (this.l.p1[1] > this.p.y - this.p.r + this.p.r / 5 && this.l.color !== this.p.color && this.l.p1[1] < this.p.y + this.p.r - this.p.r / 5){
     result = true;
    }
    
    this.obstacles.forEach(obstacle => {
      if (getDistance(this.p.x, this.p.y, obstacle.x, obstacle.y) < this.p.r + obstacle.r - this.p.r / 4 && getDistance(this.p.x, this.p.y, obstacle.x, obstacle.y) > this.p.r - obstacle.r + this.p.r / 4 && this.p.x === obstacle.x){
        result = true
      }
    });
    return result;
  }

  drawPlayer(c){
    this.p.draw(c);
  }

  handleGameOver(showScore){
    showScore.textContent = `Your Score: ${Math.floor(this.score)}`;
    this.isGameOver = true;
    this.obstacles = [];
  }
  

}

export {Game}