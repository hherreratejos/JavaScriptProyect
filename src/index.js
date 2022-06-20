// Entry file for JavaScript
import {Circle} from "./scripts/circle.js";
// import {Triangle} from './scripts/triangle.js';
import {Line} from './scripts/line.js';
  
  window.addEventListener('DOMContentLoaded', event => {
  const canvas = document.getElementById("canvas");
  const c = canvas.getContext("2d");
  

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth / 2;

  function getDistance(x1, y1, x2, y2){
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;

    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
  }

  let score = 0

  function text(text, x, y, c){
    c.fillStyle = 'white';
    c.font = '20px Comic Sans MS';
    c.fillText(text, x, y)
  }
  




  let p = new Circle(2 * (canvas.width / 3), 5 * (canvas.height / 6), (canvas.width / 7) / 2, '#FFFF00');
  // let t1 = new Triangle({x: canvas.width / 3, y: 30}, {x: (canvas.width / 3) * 0.7 , y: 1.25 * (canvas.width / 6)},{x: (canvas.width / 3) * 1.3 , y:  1.25 * (canvas.width / 6)},'purple');
  // let t2 = new Triangle({x: 2 * (canvas.width / 3),y:  30}, {x: 2 * ((canvas.width / 3) * 0.85) , y: 1.25 * (canvas.width / 6)}, {x: 2 * ((canvas.width / 3) * 1.15) ,y: 1.25 * (canvas.width / 6)}, 'purple');
  let obstacle = new Circle(canvas.width / 3, innerHeight / 4 , (canvas.width / 6) / 4, 'purple')
  let obstacle2 = new Circle(canvas.width / 3, innerHeight/ 2, (canvas.width / 6) / 4, 'purple')
  let obstacle3 = new Circle(canvas.width / 3,3 * (innerHeight / 4), (canvas.width / 6) / 4, 'purple')
  let obstacle4 = new Circle(canvas.width / 3,innerHeight, (canvas.width / 6) / 4, 'purple')
  // let t1 = new Triangle([(canvas.width / 3), 30], [(canvas.width / 3) * 0.7 ,1.25 * (canvas.width / 6)], [(canvas.width / 3) * 1.3 , 1.25 * (canvas.width / 6)], 'purple');
  // let t2 = new Triangle([2 * (canvas.width / 3), 30], [2 * ((canvas.width / 3) * 0.85) ,1.25 * (canvas.width / 6)], [2 * ((canvas.width / 3) * 1.15) , 1.25 * (canvas.width / 6)], 'purple');
  let l = new Line([0, 0], [innerWidth, 0], '#FFFF00')

  // Animate

  function animate(){
    window.requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight)

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



    // Triangles
    
    // let p1Arr = [[(canvas.width / 3), 30], [2 * (canvas.width / 3), 30]];
    // let p2Arr = [[(canvas.width / 3) * 0.7 ,1.25 * (canvas.width / 6)], [2 * ((canvas.width / 3) * 0.85) ,1.25 * (canvas.width / 6)]];
    // let p3Arr = [[(canvas.width / 3) * 1.3 , 1.25 * (canvas.width / 6)], [(canvas.width / 3) * 1.15 , 1.25 * (canvas.width / 6)]];

    // let i = Math.floor((Math.random()))
    // let obstacle = new Triangle(p1Arr[i], p2Arr[i], p3Arr[i], 'purple')
    
    // obstacle.update(c);
    // if (obstacle.p1[1] > innerHeight){
    //   this.p1[1] = 0;
    //   this.p2[1] = 0;
    //   this.p3[1] = 0;

    //   let h = Math.floor(Math.random());
     

    //   this.p1[0] = p1Arr[h] ;
    //   this.p2[0] = p2Arr[h] ;
    //   this.p3[0] = p3Arr[h] ;
    // }


    let coordArr = [(canvas.width / 3), 2 * (canvas.width / 3)];
    let lArr = ['#FFFF00', '#FF0080', '#00FF48', '#00FFD9']

    
    
  //   console.log(getDistance(p.x, p.y, obstacle.x, obstacle.y < p.r + obstacle.r))
    

    p.draw(c);
    obstacle.update(c);
    obstacle2.update(c);
    obstacle3.update(c);
    obstacle4.update(c);
    l.update(c);
    

    
    // Obstacles
    
    if (obstacle.y - obstacle.r > innerHeight){
      obstacle.y = -obstacle.r * 2
      obstacle.x = coordArr[Math.floor(Math.random() * 2)]
    }
    
    if (obstacle2.y - obstacle2.r > innerHeight){
      obstacle2.y = -obstacle2.r * 2
      obstacle2.x = coordArr[Math.floor(Math.random() * 2)]
    }
    
    if (obstacle3.y - obstacle3.r > innerHeight){
      obstacle3.y = -obstacle3.r * 2
      obstacle3.x = coordArr[Math.floor(Math.random() * 2)]
    }
    
    if (obstacle4.y - obstacle4.r > innerHeight){
      obstacle4.y = -obstacle4.r * 2
      obstacle4.x = coordArr[Math.floor(Math.random() * 2)]
    }
    
    
    // Lines
    
    if(l.p1[1] > innerHeight){
      l.p1[1] = 0;
      l.p2[1] = 0;
      l.color = lArr[Math.floor(Math.random() * 4)]
    }

    // Collision

    if (getDistance(p.x, p.y, obstacle.x, obstacle.y) < p.r + obstacle.r && getDistance(p.x, p.y, obstacle.x, obstacle.y) > p.r - obstacle.r && p.x === obstacle.x){
      alert(`Game Over. Score: ${Math.floor(score)}`)
    }

    if (getDistance(p.x, p.y, obstacle2.x, obstacle2.y) < p.r + obstacle2.r && getDistance(p.x, p.y, obstacle2.x, obstacle2.y) > p.r - obstacle2.r && p.x === obstacle2.x){
      alert(`Game Over. Score: ${Math.floor(score)}`)
    }

    if (getDistance(p.x, p.y, obstacle3.x, obstacle3.y) < p.r + obstacle3.r && getDistance(p.x, p.y, obstacle3.x, obstacle3.y) > p.r - obstacle3.r && p.x === obstacle3.x){
      alert(`Game Over. Score: ${Math.floor(score)}`)
    }

    if (getDistance(p.x, p.y, obstacle4.x, obstacle4.y) < p.r + obstacle4.r && getDistance(p.x, p.y, obstacle4.x, obstacle4.y) > p.r - obstacle4.r && p.x === obstacle4.x){
      alert(`Game Over. Score: ${Math.floor(score)}`)
    }

    if (l.p1[1] > p.y - p.r && l.color !== p.color && l.p1[1] < p.y + p.r){
      alert(`Game Over. Score: ${Math.floor(score)}`)
    }


  text(`Score: ${Math.floor(score)}`,0, 50, c)


    score += 1 / 60;
    // console.log(score);
    // console.log(getDistance(p.x, p.y, obstacle.x, obstacle.y))
  }






  // Key Binds
  

  window.addEventListener('keydown', (event) =>{
    switch( event.key){
        case 'ArrowRight':
           p.x = 4 * (canvas.width / 6)
           p.y = 5 * (canvas.height / 6)
        break
    }
  })

  window.addEventListener('keydown', (event) =>{
    switch( event.key){
        case 'ArrowLeft':
           p.x = canvas.width / 3
           p.y = 5 * (canvas.height / 6)
        break
    }
  })

  window.addEventListener('keydown', (event) =>{
    switch( event.key){
        case 'q':
          p.color = '#FFFF00'
        break
    }
  })

  window.addEventListener('keydown', (event) =>{
    switch( event.key){
        case 'w':
          p.color = '#FF0080'
        break
    }
  })

  window.addEventListener('keydown', (event) =>{
    switch( event.key){
        case 'e':
          p.color = '#00FF48'
        break
    }
  })

  window.addEventListener('keydown', (event) =>{
    switch( event.key){
        case 'r':
          p.color = '#00FFD9'
        break
    }
  })









  animate();
});

