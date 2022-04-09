// Create an array here
var myArr = [2, 4, 0, 8, 10];
// End of creating an array
//Create a function below this line
function myArrayFunction(myItems) {
    var myItems = [...myArr];
    myItems[2] = 6;

    return myItems;
    
}
console.log(myArrayFunction(myArr));  // Change this line
// End of creating a function
module.exports = myArrayFunction;





module.exports = myArrayFunction;