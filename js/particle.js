let Particle = {
  init(pos, radius) {
    this.pos = new Vector(0, 0, 0);
    this.vel = new Vector(0, 0, 0);
    this.acc = new Vector(0, 0, 0);
    this.r = r;
  },

  draw() {
    Particle.ctx.fillStyle = colors.WHITE;
    Particle.ctx.beginPath();
    Particle.ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
    Particle.ctx.fill();
  },

  move() {

  },

  create() {
    return Object.create( this );
  },

  toString() {
    console.log( `Position: (${this.pos.x}, ${this.pos.y}) | Radius: {this.r}`);
  }
};