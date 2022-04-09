// Create a myPetsArray array here
var myPetsArray = ["Dog", "Cat"];
// End of myPetsArray array
// Create a function below this line
function myArrayFunction(myPets) {
    var myNewPeets = [...myPets];

    myNewPeets.push("Bird", "Fish");
    var firstPet;
    firstPet === myNewPeets[0];
    var lastPet;
    lastPet === myNewPeets[-1];
    myNewPeets.pop();
    myNewPeets.shift();
    myNewPeets.unshift("Lion");

    return myNewPeets;
}
console.log(myArrayFunction(myPetsArray));
// End of creating a function
module.exports = myArrayFunction;