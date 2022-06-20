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
    this.p1[1] += 1;
    this.p2[1] += 1;
  }
}

export {Line}