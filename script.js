/*
// ES 6

// difference between var and let

// var is hoisted - moved to the top
console.log(num)
var num = 23

// let is not hoisted

// console.log(str) // -> ReferenceError: Cannot access 'str' before initialization
let str = '23'

// var can be redeclared 
// var user = 'foo'
// var user = 'bar'
// console.log(user)

// let cannot be redeclared -> Uncaught SyntaxError
// let user = 'foo'
// let user = 'bar'
// console.log(user)

// scoping of var and let

// var is function scoped
function run() {
	var output = '42'
	return output
}

if (true) {
	var user1 = 'baz'
}
// console.log(user1) // this works

// console.log(output) // -> Reference Error

// let is block scoped 

function run2() {
	let output2 = '42'
}
// console.log(output2) // Error

if (true) {
	let user2 = 'baz'
}
// console.log(user2) // Reference Error

// ternary operator
// const password = 'foo'
// let user
// if (password === '123') {
// 	user = 'authenticated'
// } else {
// 	user = 'unauthenticated'
// }
// console.log(user)

// <condition> ? <do this> : <otherwise do this>
const password = '123'
let user = password === '123' ? 'authenticated' : 'unauthenticated'
// console.log(user)


// object shorthand
console.log({ user })
// this is the short version for: 
console.log({ user: user })

// const age = 34
// const obj = { age: age }
// short: obj = {age}

console.clear()

// bonus
/*
const adventurer = {
  name: 'Alice',
  cat: {
	name: 'Dinah'
  },

};

const dogName = adventurer.dog?.name;
console.log(dogName);


// Destructuring

const person = {
	username: 'foo',
	email: 'foo@gmail.com',
	age: 30,
	address: {
		street: 'Friedrichstr',
		location: 'Berlin'
	}
}

// now we need 3 variables
// const username = person.username
// const email = person.email
// const age = person.age
// const street = person.address
// console.log(username, email, age, street)

// object destructuring
// we destructure a nested object by doing this: address: { street } 
// we can alias a variable by using key: newName
const { username, email: useremail, age, address: { street } } = person
console.log(username, useremail, age, street)
console.clear()

const root = {
	first: 'foo',
	middle: 'bar',
	age: 23,
	last: 'baz'
}
// write a function that gets the object and returns a string
// like 'firstname middlename lastname' using object destructuring

// function display(user) {
// 	const { first, middle, last } = user
// 	return `${first} ${middle} ${last}`
// }

// console.log(display(root))

// bonus: destructure directly in the parameter - used in React a lot
// function display({ first, middle, last }) {
// 	return `${first} ${middle} ${last}`
// }

// Aray destructuring

const numbers = [10, 20, 30, 40, 50]
// const first = numbers[0]
// const second = numbers[1]
// to skip an element just add a comma
const [a, , c] = numbers
console.log(a, c)

const chars = ['x', 'y', 'z']
// set a default value
const [one = '#', two, three, four = '#'] = chars
console.log(one, four) // -> undefined

// you can also destructure from a string
const [firstChar, SecondChar] = 'hello'
console.log(firstChar, SecondChar)
console.clear()

// spread operator
const array = ['a', 'b']
const copy = [...array]
console.log(copy)

const nmbrs = [23, 42, 111]
const max = Math.max(...nmbrs)
console.log(max)

const list1 = [2, 4, 6]
const list2 = [10, 20, 30]
const combined = [...list1, ...list2]
console.log(combined)

// spread as 'rest' operator
function sum(...nums) {
	console.log(nums) // -> [ containing all the arguments]
	return nums.reduce(function (acc, val) {
		return acc + val
	})
}

const result = sum(2, 5, 7, 5, 12, 23)
console.log(result)

*/

// Exercises

// Objects

const car = {
	make: 'Volvo',
	year: 1995,
	engine: {
		fuel: 'petrol',
		hp: 80
	}
}


// extract the make and year from the car in one line
const { make, year } = car
console.log(make, year)

// extract the fuel and hp from the car in one line
// const { fuel, hp } = car.engine
const { engine: { fuel, hp } } = car
console.log(fuel, hp);

// Arrays

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Extract the first two values
const [zero, one] = numbers
console.log(zero, one); // 0 1

// Extract all the values but the first one from the array
// const [, ...greaterThan0] = numbers
const greaterThan0 = numbers.slice(1)
console.log(greaterThan0); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// Strings

const str = "Hello World!"

// Using the spread, return an array of all characters in `str` upperCased and reversed
const reversedUppercase = [...str.toUpperCase()].reverse()
console.log(reversedUppercase); // [ '!', 'D', 'L', 'R', 'O', 'W', ' ', 'O', 'L', 'L', 'E', 'H' ]
console.log('hello');

console.clear()

// Arrow functions

const array1 = [1, 4, 9, 15]

const map1 = array1.map(num => num * 2)

console.log(map1)

const greet = function () {
	return 'hello'
}
// as an arrow function
// const greet = () => 'hello'

console.clear()

// Promises - a JS object that represents the eventual completion or
// failure of an asynchronous operation

function createRandomNumber(min, max) {
	return new Promise(function (resolve, reject) {
		if (min === 1) {
			return reject(new Error('invalid argument'))
		}
		setTimeout(function () {
			resolve(Math.floor(Math.random() * (max - min + 1) + min))
		}, 3000)
	})
}

function createRandomNumber2(min, max) {
	return new Promise(function (resolve, reject) {
		if (min === 1) {
			return reject(new Error('invalid argument'))
		}
		setTimeout(function () {
			resolve(Math.floor(Math.random() * (max - min + 1) + min))
		}, 3000)
	})
}

// how to use a function that is async and returns a promise
// using .then and .catch -> .then() defines what we want to do with  
// the succesful result / .catch() defines what we want to do with an 
// error
// console.log(createRandomNumber(3, 5)) // -> Promise pending
// createRandomNumber(3, 10)
// 	.then(function (result) {
// 		console.log(result)
// 	})
// 	.catch(function (error) {
// 		console.log('an errror occurred : ', error.message)
// 	})
// 	.finally(function () {
// 		// this executes in any case in the end
// 		console.log('done')
// 	})

// using async await
// async function run() {
// 	// for error handling we add a try catch
// 	try {
// 		const result = await createRandomNumber(1, 10)
// 		console.log(result)
// 	} catch (error) {
// 		console.log('an errror occurred : ', error.message)
// 	} finally {
// 		// this always executes
// 		console.log('done')
// 	}
// }
// run()

// IIFE - declaring and calling a function at once 

// (async function () {
// 	// for error handling we add a try catch
// 	try {
// 		const result = await createRandomNumber(1, 10)
// 		console.log(result)
// 	} catch (error) {
// 		console.log('an errror occurred : ', error.message)
// 	} finally {
// 		// this always executes
// 		console.log('done')
// 	}
// })()


// if we have multiple async functions and we want to wait until
// all of them are finished -> Promise.all()
console.log(createRandomNumber(3, 5))
console.log('start')
// Promise.all([
// 	createRandomNumber(3, 7),
// 	createRandomNumber2(4, 9)
// ]).then(function (result) {
// 	console.log(result)
// }).catch(function (err) {
// 	console.log(err)
// })



