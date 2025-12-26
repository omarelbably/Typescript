let fruits = ["Mango", "Strawberry", "Banana", "Apple"]

let name;
name = "Enas Helmy";

const courseName = "Playwright";
var courseTime = 7;



for (let i = 0; i < fruits.length /*4 */; i++) {
    console.log(fruits[i] + "\n");
    if (fruits[i] == "Banana") {
        break;
    }
}

let printCount = 0;
for (let i = 0; i < 1; i++) {
    console.log("Hello, my name is " + name + " , and I'm attending " + courseName + " course at " + courseTime + "PM");
    printCount++;
    for (let x = 0; x < 1; x++) {
        console.log("Hello, my name is " + name + " , and I'm attending " + courseName + " course at " + courseTime + "PM");
        printCount++;
    }
}
console.log(printCount);
function pyramidOfStars (rowsOfStar : number ){
    let result = "";
    for (let i=1 ; i <= rowsOfStar ; i++){
        for (let j=1 ; j <= rowsOfStar ; j++){
            if(i == j){
                result += "*" + " ";
                console.log(result);
            }
        }
    }
}

pyramidOfStars(12);
for (const fruit of fruits) {
    console.log(fruit);
}
let i = 0;
while (i < 5) {
    console.log(i);
    if (i == 2) {
        break;
    }
    i++;
}

do {
    console.log(i);
    i++
} while (i < 2)