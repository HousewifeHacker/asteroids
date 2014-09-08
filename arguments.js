// sum of any number of arguments
var sum = function (){
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
};

// console.log(sum(1, 2, 3, 4));

Function.prototype.myBind = function(context) {
  var fn = this;
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    args = args.concat(Array.prototype.slice.call(arguments));
    return fn.apply(context, args);
  };
};

// var f = function(a, b, c) {
//   console.log(a, b, c);
// };
//
// var g = f.myBind({}, 1);
// console.log(g(2, 3));

var curriedSum = function(numArgs) {
  var numbers = [];
  if (numArgs > 0) {
    var _curriedSum = function(num) {
      numbers.push(num);
      if (numbers.length === numArgs) {
        var total = 0;
        for (var i = 0; i < numArgs; i++) {
          total += numbers[i];
        }
        return total;
      } else {
        return _curriedSum;
      }
    };
    return _curriedSum;
  }
};

// console.log(curriedSum(3)(2)(3)(4));

Function.prototype.curry = function(numArgs) {
  var args = [];
  var that = this;
  if (numArgs > 0) {
    var _curriedFun = function(arg) {
      args.push(arg);
      if (args.length === numArgs) {
        return that.apply({}, args);
      } else {
        return _curriedFun;
      }
    };
    return _curriedFun;
  }
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(sumThree.curry(3)(4)(20)(6));