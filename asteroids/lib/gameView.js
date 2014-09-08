(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function(game) {
    this.game = game;
  };
  
  GameView.prototype.start = function() {
    this.ctx = canvasEl.getContext("2d");
    
    var that = this;
    
    window.setInterval((function () {
      this.moveObjects();
      this.draw(ctx);
    }).bind(that.game), 20);
  };
})();