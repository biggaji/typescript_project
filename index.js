var btn = document.querySelector('#btn');
var num1 = document.querySelector('#num1');
var num2 = document.querySelector('#num2');
function add(num1, num2) {
    return num1 + num2;
}
btn.addEventListener("click", function () {
    // to turn the incoming value into a number, concatenate a plus (+) sign to the parameter value
    console.log(add(+num1.value, +num2.value));
});
