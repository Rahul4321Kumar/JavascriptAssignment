// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
    // Write your code here
     var freq = {};
      for (var index=0; index<string.length;index++) {
          var character = string.charAt(index);
          if (freq[character]) {
              console.log(object)
             freq[character]++;
          } else {
             freq[character] = 1;
          }
      }
  
      return freq;
  
  }
  
var str="aabsssd"

console.log(calculateFrequency(str))