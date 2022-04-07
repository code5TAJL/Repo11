// Only change code below this code
var myStr = "Paragon is the best!";

function useMethods(str) {
    var myReverse;
    var countCharacters;

    // Split string into words

    var rijeci = rijeci.split(" ") // (" ") sa razmakom dijeli na rijeci. Bez razmaka na slova.

    // Reverse order of words
    rijeci = rijeci.reverse();

    // Count each word number of characters
    countCharacters = rijeci.map((s) => s.length);

    // Reverse letters of each word
    rijeci = rijeci.map((r) => r.split("").reverse().join("")); // Prolazi kroz svaki element niza i izvrsava funkciju nad njim

    // Join words back to one string
    myReverse = rijeci.join(" ");

    return { myReverse, countCharacters };
}


useMethods(myStr);

console.log(useMethods(myStr));
// Only change code above this code
module.exports = useMethods;