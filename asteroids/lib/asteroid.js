(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(args) {
    this.pos = args.pos;
    this.vel = Asteroids.Util.randomVec(10); // -----what should this 10 be?
    this.radius = Asteroid.RADIUS;
    this.color = Asteroid.COLOR;
  };
  
  Asteroid.COLOR = "#888888";
  Asteroid.RADIUS = 12; // ----what should this radius be?
  
  Asteroids.Util.inherits(Asteroids.MovingObject, Asteroid);

})();