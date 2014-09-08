(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  

  var Ship = Asteroids.Ship = function(args) {
    args.radius = Ship.RADIUS;
    args.color = Ship.COLOR;
    args.vel = 0;
    Asteroids.MovingObject.call(this, args);
  };
 
  Ship.RADIUS = 10;
  Ship.COLOR = "#500000";
  
  Asteroids.Util.inherits(Asteroids.MovingObject, Ship);
  
  Ship.prototype.relocate = function() {
    this.vel = 0;
    this.pos = Asteroids.Game.randomPosition();
  };
  
})();
