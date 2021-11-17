// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  
    var max = Math.max( ...array);
    
    var min=array.splice(array.indexOf(max), 1); 
    
    return Math.max(...array); 
  }

  const arr = [20,120,111,215,54,78]

console.log(secondLargest(arr))