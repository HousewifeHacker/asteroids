Function.prototype.inherits = function(klass) {
  var Surrogate = function() {};
  Surrogate.prototype = klass.prototype;
  this.prototype = new Surrogate();
};

var Animal = function(name) {
  this.name = name;
};

Animal.prototype.breathe = function (){
  console.log("whewe!");
};

var Cat = function(age) {
  this.age = age;
};

Cat.prototype.meow = function () {
  console.log("meow");
};

Cat.inherits(Animal);

var gizmo = new Cat(5);
gizmo.name = "Gizmo";
gizmo.breathe();

// var animal = new Animal("Something");
// animal.meow(); // errors out as Animal doesn't have "meow" method