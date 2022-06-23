// export const func = () => {
//   console.log("i am from another file")
// }

// let yv = 1;


class Circle{
  constructor(x, y, r, color){
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
    this.yv = 1;
  }
  
  draw(c){
    c.beginPath();
    c.arc(this.x, this.y, this.r , 0, 2 * Math.PI, true)
    c.strokeStyle = this.color
    c.stroke();
  }

  update(c){
    this.draw(c);
    this.y += this.yv;
  }

}


export {Circle}