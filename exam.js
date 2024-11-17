//      1 Besic variable and data types

let name = "John"
let age = 25
console.log("my name is " + name + " i am " + age + " years Old");


//        2  Conditions
let z = 15
let b = 3

if (z % b == 0) {
  console.log("this is even");
} else console.log("this is Odd");


//        3 Loops
 
for (let index = 1; index < 6; index++) {
  console.log(index);
}


//        4. functions
function addition(num, sum) {
  return num + sum
}
let mySum = addition(3, 7)
console.log(mySum);


//   5. Arrays
let myArr = ["apple", "banana", "cherry"]
myArr.push("orange")
console.log(myArr[0]);

//    6 Array Method: forEach
let empty = []
let myNum = [1, 2, 3, 4, 5]
myNum.forEach(i => {
  empty.push(i*2)
});
console.log(empty);

//   7 DOM Manipulation

let button = document.getElementById('changeText')
let myH1 = document.getElementById('container')
button.addEventListener('click', function() {
  myH1.textContent = 'You Clicked the button'
}) 


//     8 String Manipulation
let myDom = "Hello World"
let updated = myDom.toLocaleUpperCase()
console.log(updated);


// 9 Objects
let person = {
  name: "alice",
  age: 30
}
function greet(name) {
  console.log("Hello, my name is " + name)
}
greet(person.name)