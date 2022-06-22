
let dl = 1;


class Line{
  constructor(p1, p2, color){
    this.p1 = p1;
    this.p2 = p2;
    this.color = color;
  }

  draw(c){
    c.beginPath();
    c.moveTo(this.p1[0], this.p1[1]);
    c.lineTo(this.p2[0], this.p2[1]);
    c.strokeStyle = this.color;
    c.stroke();
  }

  update(c){
    this.draw(c);
    this.p1[1] += dl;
    this.p2[1] += dl;
    // dl += 0.1 / 1000
  }
}

export {Line}