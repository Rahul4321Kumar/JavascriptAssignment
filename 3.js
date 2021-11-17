// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
    // Write your code here
       let result = {};
     for (const i in unflatObject) {
       if ((typeof unflatObject[i]) === 'object' && !Array.isArray(unflatObject[i])) {
              const temp = flatten(unflatObject[i]);
              for (const j in temp) {
        result[i + '.' + j] = temp[j];
              }
          }
       else {
              result[i] = unflatObject[i];
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