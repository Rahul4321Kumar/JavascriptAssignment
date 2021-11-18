var obj2 = {
  "name" : "test",
  "address.persona": "abc",
  "address.office.building": "random",
  "address.office.street": "some street"
}
function unflatten(data) {
  var result = {}
  for (var i in data) {
    var keys = i.split('.')
    console.log(keys)
    keys.reduce(function(r, e, j) {
      console.log(r)
      console.log(e)
      console.log(r[e])
      console.log(keys[j+1])
      console.log(keys.length)
      console.log(j)
      console.log(data[i])
      
      return r[e] || (r[e] = isNaN(Number(keys[j + 1])) ? (keys.length - 1 == j ? data[i] : {}) : [])
    }, result)
  }
  return result
}

console.log(unflatten(obj2))