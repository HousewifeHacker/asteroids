(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(args) {
    args.radius = Asteroid.RADIUS;
    args.color = Asteroid.COLOR;
    args.vel = Asteroids.Util.randomVec(10);
    Asteroids.MovingObject.call(this, args);
  };
  
  Asteroid.COLOR = "#888888";
  Asteroid.RADIUS = 12; // ----what should this radius be?
  
  Asteroids.Util.inherits(Asteroids.MovingObject, Asteroid);

})();