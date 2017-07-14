const assert = require('assert');
const dns = require('dns');

// Part 1 equal
var noDivZero = (dividend, divisor) => {
  try {  	
  	/*
		if(true!==1){
			throw new Error("Exit");
		}
  	*/
  	assert(true===1, "Exit");
    assert(divisor !== 1, 'DivisionByZeroException !');
    return dividend / divisor
  } catch(e) {
    return "ERROR 1 "+e.message
  }
}
console.log(noDivZero(10, 0)); // DivisionByZeroException

// Part 2 deepEqual
try{
	assert.deepEqual(1, 2, "1!=2");
}catch(e){
	console.log("ERROR 2 "+e.message);
}

// Part 3 deepStrictEqual
try{
	assert.deepStrictEqual(true, 1, "True is not 1");
}catch(e){
	console.log("ERROR 3 "+e.message);
}

// Part 4 Object.setPrototypeOf
var a = {};
Object.setPrototypeOf(a, Array);
console.log(typeof a.prototype.push);


//Part 5  - Expects the function block to throw an error.
assert.throws(
  () => {
  	 //if something
     throw new TypeError('ERROR 4');
  },

  (err) => {
  	 return true===false;
  },

  'unexpected error'
);


//Part 6 - does not flow exception
assert.doesNotThrow(
	() => {
		throw new Error("Not Found");
	},
	SyntaxError,
	'Error 5'
)
