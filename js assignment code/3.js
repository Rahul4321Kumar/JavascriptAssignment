// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
    // Write your code here
       let result = {};
     for (const index in unflatObject) {
       if ((typeof unflatObject[index]) === 'object' && !Array.isArray(unflatObject[index])) {
              const temp = flatten(unflatObject[index]);
              for (const newIndex in temp) {
        result[index + '.' + newIndex] = temp[newIndex];
              }
          }
       else {
              result[index] = unflatObject[index];
          }
      }
      return result;
  }

  var obj={
    "user": {
        "key_value_map": {
            "CreatedDate": "123424",
            "Department": {
                "Name": "XYZ"
            }
        }
    }
}

console.log(flatten(obj))