// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
    // Write your code here
     var freq = {};
      for (var i=0; i<string.length;i++) {
          var character = string.charAt(i);
          if (freq[character]) {
             freq[character]++;
          } else {
             freq[character] = 1;
          }
      }
  
      return freq;
  
  }
  
var str="aabsssd"

console.log(calculateFrequency(str))