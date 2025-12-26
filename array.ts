let names: string[] = ["Enas", "Ahmed", "Omar", "Shalaby"];

// console.log(`Hello, my name is ${names[0]}, and I'm attending Playwright course\n`);
// console.log(`Hello, my name is ${names[3]}, and I'm attending Playwright course`);

let name = "oMaR ELBabLY";

names[2] = "Nada";
// console.log(names[2]);

names.unshift("Mariam");
names.push("Abu Bakr");
names.shift();
names.shift();
names.pop();
names.pop();

let productPriceInString = "15$";
let productPriceInNumber = productPriceInString.slice(0,2);
console.log(typeof Number(productPriceInNumber));

// bought 1 x pane = 15$ + 1 x fish = 20$ ---- 15+20 = 35$
let expectedPrice = Number(productPriceInNumber)+20;
let expPrice = 50;
expPrice += 20;
let actualPrice = "35$";
let actualPriceInNumber = Number(actualPrice.slice(0,2));

let numbers:number[] = [1,2,3,4,5,6,7,8];
let filteredNumbers = numbers.filter((num) => num > 4);
console.log(filteredNumbers)

console.log(expectedPrice == actualPriceInNumber);

let arrayOfArray: [string, string][] = [
    ["Omar", "Elbably"],
    ["Ahmed", "Hesham"],
    ["Maha", "Mansour"]
]

console.log(arrayOfArray[0]?.[1]);