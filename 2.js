// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
    // Write your code here
     var frequency = {};
      for (var index=0; index<string.length;index++) {
          var character = string.charAt(index);
          if (frequency[character]) {
              console.log(object)
             frequency[character]++;
          } else {
             frequency[character] = 1;
          }
      }
  
      return frequency;
  
  }
  
var str="aabsssd"

console.log(calculateFrequency(str))
