// BUSINESS LOGIC
function Pizza(toppings, size) {
  this.toppings = toppings,
  this.size = size
}

function Menu() {
  this.toppings = [],
  this.sizeInInches = [14, 18, 22]
}

Menu.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
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


menu.addTopping(pepperoni);
menu.addTopping(mozzarella);
menu.addTopping(tomatosauce);

var pepperoniPizza = new Pizza([menu.toppings[0].name, menu.toppings[1].name, menu.toppings[2].name], menu.sizeInInches[1]);

// function CounterService() {
//
// }
//
// CounterService.prototype.placeOrder = function() {
//   var pizzaOrder = new Pizza(["tomato sauce", "mozzarella", "pepperoni"], 14);
// }
//
// function CounterService() {
//
// }
//
// var pepperoniPizza = new Pizza(["tomato sauce", "mozzarella", "pepperoni"], 14);




// USER INTERFACE LOGIC

$(document).ready(function() {
  $("form#test").submit(function(event) {
    event.preventDefault();

  })
})
