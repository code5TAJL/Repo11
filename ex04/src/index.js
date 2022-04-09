// Create a temps array here
var temps = [
    [31, 32, 19, 37],
    [29 ,27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
];
// End of temps array
// Create a function below this line
function myArrayFunction(arr) {
    var newTemps = [...arr];
    var averageDayTemp = [];

    for (i = 0; i < temps.length; i++) {                                                          
            for (y = 0; y < 4; y++) {
                newTemps = newTemps[i][y] + temps;
                newTemps[i][y];
                averageDayTemp = newTemps[i][y]/4;
            }


    }
    return averageDayTemp;

}
// End of creating a function
console.log(myArrayFunction(temps));
module.exports = myArrayFunction;






