const cars = ["Saab","Volvo","BMW"];
cars[0]="Audi"
console.log(cars)

const cars1 = new Array("Saab", "Volvo", "BMW");
console.log(cars1)

const person = ["John", "Doe", 46]; //array are of object datatype
console.log(person[0])

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length)

//accessing array element using for loop
const fruit = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruit.length;

var res=""
for (let i = 0; i < fLen; i++) {
    res+=fruit[i]
}
console.log(res)