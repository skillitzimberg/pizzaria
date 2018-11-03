// BUSINESS LOGIC
function Pizza(toppings, size) {
  this.toppings = toppings,
  this.size = size
}

function Menu() {
  this.toppings = ["pepperoni", "mozzarella", "tomatosauce", "pineapple", "blackOlives", "canadianBacon", "greenPepper", "sausage"],
  this.basePricePerSize = [["small", 10], ["medium", 12], ["large", 16]]

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

function Topping(type, name, pricing) {
  this.type = type,
  this.name = name,
  this.pricing = pricing
}

Menu.prototype.getPizzaPrice = function(orderDetails) {
    for (var i = 0; i < this.basePricePerSize.length; i++) {
      if (this.basePricePerSize[i][0] === orderDetails[1]) {
        var sizeBasePrice = this.basePricePerSize[i][1];
      }
    }
    return orderTotal = orderDetails[0].length + sizeBasePrice;
}

Menu.prototype.orderPizza = function(orderDetails) {
  var hotPizza = new Pizza(orderDetails[0], orderDetails[1]);
  var orderTotal = this.getPizzaPrice(orderDetails);
  return [hotPizza, orderTotal];
}

var menu = new Menu();


// USER INTERFACE LOGIC
function Customer(firstName, lastName, phoneNumber) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber
}

Customer.prototype.addCustomer = function(firstName, lastName, phoneNumber) {
  return [firstName, lastName, phoneNumber];
}

function DisplayOrderDetails(customerDetails, completeOrder) {
  this.customerDetails = customerDetails,
  this.completeOrder = completeOrder
}

DisplayOrderDetails.prototype.formatForDisplay = function(customerDetails, completeOrder) {

  var htmlToDisplay = "<p>" + this.customerDetails.firstName + " " + this.customerDetails.lastName + "</p>" + "<p>" + this.customerDetails.phoneNumber + "</p>";

  for (var i = 0; i < this.completeOrder[0].toppings.length; i++) {
    htmlToDisplay += "<p>" + this.completeOrder[0].toppings[i] + "</p>";
  };

  htmlToDisplay += "<p>$" + this.completeOrder[1] + "</p>";
  return htmlToDisplay;
}

var displayOrderDetails = new DisplayOrderDetails();

$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();
    var phoneNumber = $("input#phoneNumber").val();
    var customer = new Customer(firstName, lastName, phoneNumber);

    var pizzaToppings = [];
    var size = $("select#size").val();
    var orderDetails = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      pizzaToppings.push($(this).val());
    });
    orderDetails.push(pizzaToppings);
    orderDetails.push(size);

    var completeOrder = menu.orderPizza(orderDetails);

    var displayOrderDetails = new DisplayOrderDetails(customer, completeOrder);
    var formattedDisplay = displayOrderDetails.formatForDisplay(customer, completeOrder);
    console.log(formattedDisplay);
    $("#confirmOrder").html(formattedDisplay);

  })
})
