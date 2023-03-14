let array = []

console.log(typeof(array) === 'object')

// 2nd method
if(Object.prototype.toString.call(array) === '[object Array]') {
  console.log('Array!');
}

// 3rd method
console.log(Array.isArray(array))
