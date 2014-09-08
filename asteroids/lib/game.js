(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function() {
    this.asteroids = [];
    this.addAsteroids();
  };
  
  Game.DIM_X = 800; // --------- subject to change
  Game.DIM_Y = 600; // -------- subject to change
  Game.NUM_ASTEROIDS = 25; // -------- subject to chnage

  Game.prototype.addAsteroids = function() {
    while (this.asteroids.length < Game.NUM_ASTEROIDS) {
      var asteroid = new Asteroids.Asteroid({pos: this.randomPosition()});
      this.asteroids.push(asteroid);
    }
  };
  
  Game.prototype.randomPosition = function() {
    var x = Math.floor(Math.random() * Game.DIM_X);
    var y = Math.floor(Math.random() * Game.DIM_Y);
    
    return [x, y];
  };
  
  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.asteroids.forEach(function(asteroid) {
      asteroid.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function() {
    this.asteroids.forEach(function(asteroid) {
      asteroid.move();
    });
  };
  
})();