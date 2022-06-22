
// let dl = 1;


class Line{
  constructor(p1, p2, color){
    this.p1 = p1;
    this.p2 = p2;
    this.color = color;
    this.dl = 1;
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
    this.p1[1] += this.dl;
    this.p2[1] += this.dl;
  }
}

export {Line}