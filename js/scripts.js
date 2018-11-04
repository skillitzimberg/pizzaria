// BUSINESS LOGIC
function Pizza(size, toppings, price) {
  this.size = size,
  this.toppings = toppings,
  this.price = price
}

function Register() {
  this.basePricePerSize = [["small", 13], ["medium", 15], ["large", 19]]
}

Register.prototype.getPizzaPrice = function(size, toppings) {
  for (var i = 0; i < this.basePricePerSize.length; i++) {
    if (this.basePricePerSize[i][0] === size) {
      var sizeBasePrice = this.basePricePerSize[i][1];
    }
  }
  return orderTotal = toppings.length + sizeBasePrice;
}

Register.prototype.orderPizza = function(size, toppings) {
  var pizzaPrice = this.getPizzaPrice(size, toppings);
  var hotPizza = new Pizza(size, toppings, pizzaPrice);
  return hotPizza;
}


// USER INTERFACE LOGIC
function Customer(firstName, lastName, phoneNumber, email) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber,
  this.email = email
}

function OrderDetails(customerDetails, pizzaOrdered) {
  this.customerDetails = customerDetails,
  this.pizzaOrdered = pizzaOrdered
}

OrderDetails.prototype.formatForDisplay = function() {
  var size = this.pizzaOrdered.size;
  var toppings = this.pizzaOrdered.toppings;
  var htmlToDisplay = "<p>" + this.customerDetails.firstName + " " + this.customerDetails.lastName + "</p>" +  "<h4>Toppings:</h4>";

  for (var i = 0; i < toppings.length; i++) {
    htmlToDisplay +="<p>" + toppings[i] + "</p>";
  };

  htmlToDisplay += "<h4>Size: " + this.pizzaOrdered.size + "</h4>" + "<h4>Price: $" + this.pizzaOrdered.price + "</h4>";

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

    var register = new Register();
    var thisIsAPizza = register.orderPizza(pizzaSize, pizzaToppings);

    var orderDetails = new OrderDetails(customer, thisIsAPizza);
    var orderFormattedForDisplay = orderDetails.formatForDisplay();
    $("form#order").addClass("hide");
    $("#confirmOrder").html(orderFormattedForDisplay);
  })
})
