function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven("deep dish", "traditional",["mozzarella"],["pepperoni", "sausage"]);
console.log("pizza 1 is:");
console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log("pizza 2 is:");
console.log(p2);

var p3 = pizzaOven("thin crust", "marinara", ["5 cheese"], ["mushrooms", "olives", "onions", 'pepperoni'])
console.log("pizza 3 is:");
console.log(p3);

var p4 = pizzaOven("stuffed crust", "barbeque", ["pepperjack"], ["chicken", "onions", "peppers"])
console.log("pizza 4 is:");
console.log(p4);
