var crustType = [
    'deepdish',
    'hand tossed',
    'thin crust',
    'stuffed crust',
]
var sauceType =[
    'traditional',
    'marinara',
    'barbeque',
    'alfredoo'
]
var cheeses = [
    'mozzarella',
    'pepperjack',
    '5 cheese',
    'feta',
    'american'
]
var toppings = [
    'pepperoni',
    'sausage',
    'mushrooms',
    'olives',
    'onions',
    'chicken',
    'peppers',
    'pineapple',
    'ham'
]

function randomizer(arr){
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomRange(min, max){
    return Math.floor(Math.random() * max - min) + min;
}

function randomPizza(){
    var pizza = {};
    pizza.crustType = randomizer(crustType);
    pizza.sauceType = randomizer(sauceType);
    pizza.cheeses = [];
    pizza.toppings = [];
    for(var i = 0; i<randomRange(1,5); i++){
        pizza.cheeses.push(randomizer(cheeses));
    }
    for(var i = 0; i<randomRange(1,6); i++){
        pizza.toppings.push(randomizer(toppings));
    }
    return pizza;
}

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

var p5 = randomPizza();
console.log("pizza 5 was randomly created:");
console.log(p5);