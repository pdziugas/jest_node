var CalculatorES5 = function () {
  var result = 0;
  this.add = function (x) {
    result = result + x;

    return this;
  };

  this.substract = function (x) {
    result = result - x;

    return this;
  };

  this.multiply = function (x) {
    result = result * x;

    return this;
  };

  this.divide = function (x) {
    result = result / x;

    return this;
  };

  this.result = function () {
    return result;
  };
};

var calculatorES5 = new CalculatorES5(0);
var total = calculatorES5.add(5).multiply(2).add(20).divide(3).result();
console.log(total, "total"); // 10

//-----------------------------------------------------------------------------------------

// ES6 class
class CalculatorES6 {
  value = 0;

  add(value) {
    this.value += value;
    return this;
  }

  substract(value) {
    this.value -= value;
    return this;
  }

  multiply(value) {
    this.value *= value;
    return this;
  }

  divide(value) {
    this.value /= value;
    return this;
  }
}

let calculatorES6 = new CalculatorES6(0);
let amount = calculatorES6.add(5).multiply(2).add(20).divide(3).value;
console.log(amount, "amount"); // 10

module.exports = {
  CalculatorES5,
  CalculatorES6,
};
