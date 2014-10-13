(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Bullet = Asteroids.Bullet = function(args) {
    args.radius = Bullet.RADIUS;
    args.color = Bullet.COLOR;

    //args.vel = [this.game.ship.vel[0] + 10, this.game.ship.vel[1] + 10];
    Asteroids.MovingObject.call(this, args);
  };

  Bullet.COLOR = "#F0F8FF";
  Bullet.RADIUS = 2; // ----what should this radius be?

  Asteroids.Util.inherits(Asteroids.MovingObject, Bullet);
})();
