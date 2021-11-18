//For loop
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i, len, text;
for (i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "\n";
}
console.log(text)

//For in
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x] + "\n"; 
}
console.log(txt)


//while loop
let text1 = "";
let ia = 0
while (ia < 10) {
  text1 += "The number is " + ia + "\n";
  ia++;
}
console.log(text1)