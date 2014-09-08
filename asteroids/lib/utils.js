(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  

  var Util = Asteroids.Util = {};
  
  Util.inherits = function(parentClass, childClass) {
    var Surrogate = function() {};
    Surrogate.prototype = childClass.prototype;
    parentClass.prototype = new Surrogate();
  };
  
  //Util.inherits(MovingObject, Asteroid);
  
  Util.randomVec = function(length) {
    var x = Math.floor((0.5 - Math.random()) * 2 * length);
    var y = Math.floor((0.5 - Math.random()) * 2 * length);
    return [x, y];
  };
  
})();