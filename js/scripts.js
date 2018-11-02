// BUSINESS LOGIC

function Pizzaria() {

}

function Pizza(toppings, size) {
  this.toppings = toppings,
  this.size = size
}

function Menu() {
  this.toppings = [],
  this.pricePerSize = [[10, 14], [12, 18], [14, 22]]
}

Menu.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

Menu.prototype.findTopping = function(topping) {
  for (var i = 0; i < this.toppings.length; i++) {
    if (this.toppings[i].name === topping.name) {
      return topping;
    }
  }
  return false;
}

Menu.prototype.getPizzaPrice = function(orderDetails) {
  for (var = i; i < orderDetails.length; i++) {
    for (var = topping; topping < orderDetails[i].length; topping++) {
      menu.findTopping(orderDetails[i]);
    }
  }
}

Menu.prototype.orderPizza = function(orderDetails) {
  var hotPizza = new Pizza(orderDetails[0], orderDetails[1]);
}

function Topping(type, name, pricing) {
this.type = type,
  this.name = name,
  this.pricing = pricing
}


var menu = new Menu();

var pepperoni = new Topping("meat", "pepperoni", [0.5, 0.75, 1]);
var mozzarella = new Topping("cheese", "mozzarella", [0.5, 0.75, 1]);
var tomatosauce = new Topping("sauce", "tomato sauce", [0.5, 0.75, 1]);
var pineapple = new Topping("veggie", "pineapple", [0.5, 0.75, 1]);
var blackOlives = new Topping("veggie", "black olives", [0.5, 0.75, 1]);
var canadianBacon = new Topping("meat", "Canadian bacon", [0.5, 0.75, 1]);
var greenPepper = new Topping("veggie", "green pepper", [0.5, 0.75, 1]);


menu.addTopping(pepperoni);
menu.addTopping(mozzarella);
menu.addTopping(tomatosauce);
menu.addTopping(pineapple);
menu.addTopping(blackOlives);
menu.addTopping(canadianBacon);
menu.addTopping(greenPepper);


// USER INTERFACE LOGIC

//
// CounterService.prototype.placeOrder = function() {
//   var pizzaOrder = new Pizza(["tomato sauce", "mozzarella", "pepperoni"], 14);
// }

$(document).ready(function() {
  $("form#test").submit(function(event) {
    event.preventDefault();

  })
})
