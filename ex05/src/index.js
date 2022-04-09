// Create a monitorsListArray array here
var monitorsListArray = ["Apple", "Peach", "Berry"];
// End of monitorsListArray array                      
// Create a function below this line
function myMonitorsFunction(arr) {
    var newMonitorsList = [...arr];
    var brojac = 0;
    var monitorsList = [];
    for (i = 0; i < monitorsListArray.length ; i++) {
        brojac++;
        monitorsList.push(monitorsListArray[i]);
        monitorsList.push(brojac);
        newMonitorsList.push(monitorsList);
    }                         
     return monitorsList;

}
console.log(myMonitorsFunction(monitorsListArray));
// End of creating a function
module.exports = myMonitorsFunction;

