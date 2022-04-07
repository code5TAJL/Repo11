// Create an array here
var myArr = [2, 4, 0, 8, 10];

// End of creating an array
// Create a function below this

function myArrayFunction(myItems) {
    var myItems;
    myItems[2] = 6;

    return myItems;
}
myArrayFunction(myArr);
console.log(myArrayFunction(myArr));

// End of creating a function
module.exports = myArrayFunction;