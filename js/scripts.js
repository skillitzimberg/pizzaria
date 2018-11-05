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

Register.prototype.makeAPizza = function(size, toppings) {
  var pizzaPrice = this.getPizzaPrice(size, toppings);
  var hotPizza = new Pizza(size, toppings, pizzaPrice);
  return hotPizza;
}

function Customer(firstName, lastName, phoneNumber, email) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber,
  this.email = email
}

function OrderDetails(customerDetails) {
  this.customerDetails = customerDetails,
  this.allPizzasOnOrder = []
}

OrderDetails.prototype.addPizzaToOrder = function(hotPizza, numberOfPizzasOfThisType) {
  for (var i = 1; i <= numberOfPizzasOfThisType; i++) {
    this.allPizzasOnOrder.push(hotPizza);
  }
}

OrderDetails.prototype.addCustomerToOrder = function(customerDetails) {
  this.customerDetails = customerDetails;
}

OrderDetails.prototype.formatForDisplay = function() {
  var htmlToDisplay =
  "<p>" + this.customerDetails.firstName
  + " " + this.customerDetails.lastName
  + "</p>" + "<h4>Your pizza(s):</h4>";

  var orderTotal = 0;

  for (var i = 0; i < this.allPizzasOnOrder.length; i++) {
    var size = this.allPizzasOnOrder[i].size;
    var toppings = this.allPizzasOnOrder[i].toppings;
    var price = this.allPizzasOnOrder[i].price;

    orderTotal += price;
    htmlToDisplay += "<p>" + size + ": " + toppings + "</p>";
  }
  htmlToDisplay += "<h4>Total: $" + orderTotal + "</h4>"
  return htmlToDisplay;
}


// USER INTERFACE LOGIC
$(document).ready(function() {
  var register = new Register();
  var orderDetails = new OrderDetails();

  $("input#addToOrder").on("click", function() {
    var pizzaSize = $("select#size").val();
    var pizzaToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      pizzaToppings.push($(this).val());
    });
    var numberOfPizzasOfThisType = $("input#howMany").val();
    var thisIsAPizza = register.makeAPizza(pizzaSize, pizzaToppings);

    orderDetails.addPizzaToOrder(thisIsAPizza, numberOfPizzasOfThisType);
    $(".toppings").prop("checked", false);
  })

  $("form#order").submit(function(event) {
    event.preventDefault();

    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();
    var phoneNumber = $("input#phoneNumber").val();
    var email = $("input#email").val();
    var customer = new Customer(firstName, lastName, phoneNumber, email);
    orderDetails.addCustomerToOrder(customer);

    var orderFormattedForDisplay = orderDetails.formatForDisplay();
    $("form#order").addClass("hide");
    $("#confirmOrder").html(orderFormattedForDisplay);
  })
  // This modal handler is from Knaģis (https://stackoverflow.com/users/1711598/kna%C4%A3is)  :: https://stackoverflow.com/questions/20580978/open-url-on-bootstrap-modal-close
  $(".modal").on("hidden.bs.modal", function () {
      window.location = "order.html";
  });
})
