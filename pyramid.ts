// draw a pyramid with as many rows as needed

// *
// **
// ***
// ****

function printStarPyramid(numberOfRows: number) {
    let star: string = "*";
    for (let i = 1; i <= numberOfRows; i++) {
        console.log(star);
        star += "*";
    }
}

// printStarPyramid(10);


function printStarPyramidUsingArray(numberOfRows: number) {
    let array: string[] = [];
    for (let i = 0; i < numberOfRows; i++) {
        array.push("*");
        console.log(array.join(""));
    }
}

// printStarPyramidUsingArray(5);


function side_pyramid(height: number) {
    let i;

    for (i = 1; i <= height * 2; i++) {

        if (i <= height) {
            console.log("*".repeat(i));
        }
        else {
            console.log("*".repeat(height * 2 - i));
        }
    }
}
function star_pyramid(height: number) {

    let i;

    for (i = 1; i <= height; i++) {
        console.log(" ".repeat(height - i) + "*".repeat(i) + "*".repeat(i - 1));
    }
}

side_pyramid(7)
console.log("--------------------\n")
star_pyramid(7)
