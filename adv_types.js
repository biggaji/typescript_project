// union types
/* it helps in situations where we accept two or more different type of value e.g (number | string).
*/
//You can have any number of types in a union, each eperated by a pipe |.
// Example
function combineInputs(input1, input2) {
    /*here you might decide a logic based on the value type you are getting. e.g. for a number, you might use an if statement to check the typeof the input,  then use any of the math operator you want, or if it's a string, you might want to convert each inputs toString before concatenating it*/
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + " " + input2.toString();
    }
    return result;
}
var numSum = combineInputs(4, 6);
console.log(numSum);
var strSum = combineInputs("I love", "you!");
console.log(strSum);
// literial type
//Note - Google this!
// type aliases
// used for store values to be referenced to
// Look at an example @ line 6 for variedInputType
