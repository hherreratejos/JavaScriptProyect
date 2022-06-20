
let dy = 2;

class Triangle{
  constructor(p1, p2, p3, color){
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
    this.color = color;
    // this.area = 
  }

  draw(c){
    c.beginPath();
    c.moveTo(this.p1[0], this.p1[1]);
    c.lineTo(this.p2[0], this.p2[1]);
    c.lineTo(this.p3[0], this.p3[1]);
    c.lineTo(this.p1[0], this.p1[1]);
    c.strokeStyle = this.color;
    c.stroke();
  }

  update(c){
    this.draw(c);
    this.p1[1] += dy;
    this.p2[1] += dy;
    this.p3[1] += dy;
  }
}

export {Triangle}