// let ages = 10;
// console.log(age); // 10
// let blue = 0x0000ff;
// console.log(blue); // 255
// let p1 = 3.14159;
// console.log(p1); // 3.14159

// //String type
// let firstName = 'boubpha';
// let lastName = 'houngthachack';
// console.log(firstName +""+ lastName); // john Don

// //Boolean type
// let isReading = true;
// let isSleeping = false;
// console.log(isReading); // true
// console.log(isSleeping); // false

// //Null  type
// let car = null;
// console.log(car); // null

// //Undefined type
// let x;
// console.log(x); // undefined

// //Symbol type
// let sym1 = Symbol('foo');
// confirm.log(sym1); // Symbol(foo)

// //object type
// let mycar = new Object();
// mycar.make = 'ford';
// mycar.model = 'Mustang';
// console.log(mycar.make);// Ford

// // use case sample of \n
// console.log("Hello\nworld");

// // use case sample of \t
// console.log("Hello\tworld");

// // use case sample of \' and \""
// console.log('I\'m boubpha');
// console.log("I'm boubpha");


// //Sample case of\\
// console.log('C:\\program files\\Myprogram');


// //use case of ${}
// let name = 'boubpha';
// let ages = 24;
// console.log(`Hello, my name is ${name} and I'm ${age} years old`);

// // use case of object
// var obj ={
//     name: 'boubpha',
//     age: 24,
//     isMarried: true
// };

// console.log(`Hello, my name is ${obj.name} and
// I'm ${obj.age} years old.
// I'm ${obj.isMarried ? 'married' : 'not married'}.`);

// //function
// function sayHello(name) {
//     return 'Hello, $(name)';
// }
// console.log(sayHello('boubpha'));


// // function use case of =>
//     let sayHello2 =(name) => `Hello, ${name}`;
// console.log(sayHello2('boubpha'));

// // use case of object destructuring
// let obj = {
//     name: 'boubpha',
//     age: 24,
//     isMarried: true
// };

// let { name, age, isMarried } = obj;
// console.log(`Hello, my name is ${name} and
// I'm  ${age} years old.
// I'm ${isMarried ? 'isMarried' : 'not isMarried'}.`);

// //use case of array destructuring
// let arr = ['boubpha', 24, true];
// let [ name2, age2, isMarried2]= arr;
// console.log(`Hello, my name is ${name} and
// I'm ${name2} years old.
// I'm ${isMarried2 ?'isMarried2' : 'not isMarried2'}`);

// //sample of spead operator
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];

// let arr3 = [...arr1, ...arr2];

// console.log(arr3); // [1, 2, 3, 4, 5, 6, 7, 8, 9 ,1o]

// //sample of spead operator in case of object

// let obj1 = {name: 'jonh', age: 30}
// let obj2 = {width: 55, height: 160}

// let obj3 = {...obj1, ...age2};
// console.log(arr3);


// //Rest parameter
// function getMyName(...args){
//     return args.join('');
// }

// console.log(getMyName('Jonh','Doe'));
// console.log(getMyName(24));

// sample of default parameter

// function getMyName(a = 1, b = 2){
//     console.log(a, b, c);
// }
// getNum();
// getNum(4);
// getNum(4, 5);
// getNum(4, 5, 6);

// let arr = [1, 2, 3, 4 ,5];
// let mix = [1, "a", "b", ];
// let obj = [{name: 'Pannoi'}, {name: 'taiy'}];
// let arr2 = [arr,arr];

// console.log(arr);
// console.log(mix);
// console.log(obj);
// console.log(arr2);
// console.log(mix[1]);



// //sample of loop foreach

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// //sample of for of
// let arr = [1,2,3,4,5];

// for (let value of arr){
//     console.log(value);
// }

// //sample of for in
// let obj = {
//     name: 'boubpha',
//     age: 24,
//     isMarried: true
// };
// for (let key in obj) {
//     console.log(key, obj [key]);
// }


// //array function push and pop
// let arr = [1,2,3,4,5];
// arr.push(6);
// console.log(arr); // [1,2,3,4,5,6]
// arr.pop();
// console.log(arr); // [1,2,3,4,5,]


// //sample of array function shift and unshift 
// let arr = [1,2,3,4,5];
// arr.unshift(0);
// console.log(arr); // [1,2,3,4,5,6]
// arr.shift();
// console.log(arr); // [1,2,3,4,5,]


// //sample of array function concat
// let arr = [1,2,3,4,5];
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let arr3 =arr1.concat(arr2);
// console.log(arr3); // [1,2,3,4,5,6,7,8,9,10]


// //sample of array function slice
// let arr4 = [1,2,3,4,5];
// let arr5 = arr4.slice(1, 3);
// console.log(arr5); // [2,3]

//sample of array function splice
let arr6 = [1,2,3,4,5];
arr6.splice(1,2)
console.log(arr6); // [1, 4, 5]


//sample of array function copywithin
let arr7 = [1,2,3,4,5];
arr6.copywithin(0,3)
console.log(arr7); // [1, 2, 3, 4, 5]

//sample of array function fill
let arr8 = [1,2,3,4,5];
arr6.fill(0,3)
console.log(arr8); // [1, 0, 0, 4, 5]

//sample of array function reverse
let arr9 = [1,2,3,4,5];
arr6.reverse()
console.log(arr8); // [5,4,3,2,1]

//sample of array function sort
let arr10 = [5,4,3,2,1];
arr6.sort(0,3)
console.log(arr10); // [1,2,3,4,5]
