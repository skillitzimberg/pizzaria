# Pizzaria

#### A pizzaria online order webpage

#### By Scott Bergler

## Description
A pizzaria online order webpage where users can order a pizza of any size and topping combination.

### Specifications:
##### Spec 1: Make a new pizza passing in toppings & size directly:
- [x] ** Expect: ** console.log(pepperoniPizza) to return Pizza(["tomato sauce", "mozzarella", "pepperoni"], size: "medium");

##### Spec 2: Make Menu & Topping Objects and add pepperoni, mozzarella, and tomato sauce to menu toppings:
- [x] ** Expect: ** console.log(menu) to return Menu {toppings: Array(1), sizeInInches: Array(3)};

##### Spec 3: Make a new pizza passing in [menu.toppings[0].name, menu.toppings[1].name, menu.toppings[2].name], menu.sizeInInches[1]:
- [x] ** Expect: ** console.log(menu) to return Pizza {toppings: Array(3), size: "medium"};

##### Spec 4: Make prototype Menu.findTopping:
- [x] ** Expect: ** menu.findTopping(pepperoni) to return pepperoni;

##### Spec 5: Make orderPizza method:
- [x] ** Expect: ** Where var orderDetails = [["tomato sauce", "mozzarella", "pepperoni"], size: "medium"], menu.orderPizza(orderDetails) returns Pizza {toppings: Array(3), size: "medium"};

##### Spec 6: Make getPrice method:
- [x] ** Expect: ** Where var orderDetails = [["tomato sauce", "mozzarella", "pepperoni"], "medium"], menu.getPrice(orderDetails) returns orderTotal 19;

##### Spec 7: Refactor orderPizza method return:
- [x] ** Expect: ** Where var orderDetails = [["tomato sauce", "mozzarella", "pepperoni"], "medium"], menu.orderPizza(orderDetails) returns [["tomato sauce", "mozzarella", "pepperoni"], "medium"], 15;

##### Spec 7: Get customer details:
- [x] ** Expect: ** customerDetails("Scott", "Bergler", "some.phone.number"]) === ["Scott", "Bergler", "some.phone.number"];

##### Spec 8: Console.log customer details, pizza ordered and price:
- [x] ** Expect: ** console.log(customerDetails);
console.log(completeOrder);
to return:
{firstName: "Scott", lastName: "Bergler", phoneNumber: "456235902935"};
[Pizza, 15]

##### Spec 9: console.log pizza toppings:
- [x] ** Expect: ** var order = new DisplayOrderDetails(customer, completeOrder) to console.log "tomato sauce", "mozzarella", "pepperoni";

##### Spec 10: Format pizza toppings with customer details and price:
- [x] ** Expect: ** var order = new DisplayOrderDetails(customer, completeOrder) to console.log ```<p>Scott Bergler</p><p>456235902935</p><p>tomato sauce</p><p>mozzarella</p><p>pepperoni</p><p>$15</p>```;

##### Spec 11: Get customer information and order from webpage and console.log html:
- [ ] ** Expect: ** ```<p>Scott Bergler</p><p>503-890-5118</p><p>pepperoni</p><p>pineapple</p><p>blackolives</p><p>canadianbacon</p><p>$14</p>```

##### Spec 12: Get customer information and order from webpage and print to screen:
- [ ] ** Expect: **
Scott Bergler

503-890-5118

pineapple

canadianbacon

mozzarella

$13

## Objectives

- [x] Allow the user to choose toppings and size for the pizza they'd like to order.

- [x] Create a pizza object constructor with properties for toppings and size.

- [x] Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.

- [ ] Code meets standards from previous weeks.

- [ ] Constructors and prototypes are used successfully.

- [ ] Application works as expected.

- [ ] Plain English specs are included in your README.

- [ ] Required functionality is in place by the 5:00pm Friday deadline.

- [ ] Project is in a polished, portfolio-quality state.

- [ ] Project demonstrates an understanding of this week's concepts. If prompted, you can discuss your code with an instructor using correct terminology.

## Setup/Installation Requirements
To view or clone the code, go to [GitHub](https://github.com/skillitzimberg/pizzaria).

## Known Bugs
There are bugs, but they are not identified yet. Something to do with the object and method used to format information for display.

## Support and contact details

Scott Bergler :: commandinghands@gmail.com

## Technologies Used

HTML, CSS, & Javascript.

### License

Licensed under the MIT license.

Copyright (c) 2018 ** Scott Bergler **
