//typescript core types example
var me = {
    firstname: "Tobiloba",
    lastname: "Ajibade",
    age: 21,
    hobbies: ["Coding", "Watching movies"],
    role: [2, "CEO"] //tuple
};
// Note it is better syntax to let type script inference the object type itself
console.log(me.age);
// array type can be flexible or strict
var data = ["Tobiloba"]; //string[]
// tuples type - looks like an array, but it is a fixed length and fixed type array;
// can be [numeric identifier, string identifier];
// example : let roles = [2, "Am a tuple value"];
// Since typescript can inference with tuples, you have to manually declare it as a type to it e.g roles: [number, string] , this set a fixed lenght of 2 and fixed types of number and "string"
// enum type
