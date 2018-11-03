// BUSINESS LOGIC
function Pizza(size, toppings) {
  this.size = size,
  this.toppings = toppings
}

function Register() {
  this.basePricePerSize = [["small", 12], ["medium", 14], ["large", 18]]
}

Register.prototype.getPizzaPrice = function(sizeAndToppings) {
  for (var i = 0; i < this.basePricePerSize.length; i++) {
    if (this.basePricePerSize[i][0] === sizeAndToppings[0]) {
      var sizeBasePrice = this.basePricePerSize[i][1];
    }
  }
  return orderTotal = sizeAndToppings[1].length + sizeBasePrice;
}

Register.prototype.orderPizza = function(sizeAndToppings) {
  var hotPizza = new Pizza(sizeAndToppings[0], sizeAndToppings[1]);
  var orderTotal = this.getPizzaPrice(sizeAndToppings);
  return [hotPizza, orderTotal];
}


// USER INTERFACE LOGIC
function Customer(firstName, lastName, phoneNumber) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber
}

function DisplayOrderDetails(customerDetails, placeOrder) {
  this.customerDetails = customerDetails,
  this.placeOrder = placeOrder
}

DisplayOrderDetails.prototype.formatForDisplay = function(customerDetails, placeOrder) {
  var htmlToDisplay = "<p>" + this.customerDetails.firstName + " " + this.customerDetails.lastName + "</p>" + "<p>" + this.customerDetails.phoneNumber + "</p>";

  for (var i = 0; i < this.placeOrder[0].toppings.length; i++) {
    htmlToDisplay += "<p>" + this.placeOrder[0].toppings[i] + "</p>";
  };

  htmlToDisplay += "<p>$" + this.placeOrder[1] + "</p>";
  return htmlToDisplay;
}

$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();

    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();
    var phoneNumber = $("input#phoneNumber").val();
    var customer = new Customer(firstName, lastName, phoneNumber);

    var pizzaSize = $("select#size").val();
    var pizzaToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      pizzaToppings.push($(this).val());
    });

    var sizeAndToppings = [];
    sizeAndToppings.push(pizzaSize);
    sizeAndToppings.push(pizzaToppings);

    var register = new Register();
    var placeOrder = register.orderPizza(sizeAndToppings);

    var displayOrderDetails = new DisplayOrderDetails(customer, placeOrder);
    var orderFormattedForDisplay = displayOrderDetails.formatForDisplay(customer, placeOrder);
    $("form#order").addClass("hide");
    $("#confirmOrder").html(orderFormattedForDisplay);

  })
})
