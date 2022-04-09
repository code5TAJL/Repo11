// Only change code below this line
var myArray = [
    [[2], [5, 6, 7], [8, 9]],
    [[2.5, 2], [3,4,5,6], [8]],
    [[1,2], [3,4,5,6],[7,8,9]]
];
var product;
var sum;
function multiplyArrayFunction(myArray) {
    for (var i=0; i < myArray.length; i++){
        for (var j=0; j < myArray[i].length; j++){
            console.log(myArray[i][j]);
        }
    }
}
// Only change code above this line
console.log(multiplyArrayFunction(myArray));  // Change this line
module.exports = multiplyArrayFunction;