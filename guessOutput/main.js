// 1. Out put code snip it

// console.log(1 + "1"); //11
// console.log(1 - "1"); //0

// 2. Remove dumplicate element from array

// let nums = [1, 2, 2, 3];

// Solution
// console.log([...new Set(nums)]);

// 3. How do you stop var from functional scope by EIFE

// let func = function () {
//   (() => {
//     let l = "let";
//     var v = "var";
//   })();

//   console.log(v);
//   console.log(l);
// };

// func();

// 4. Guess the out put following code
// console.log(5 < 6 < 7); // true
// console.log(7 > 8 > 9); // false

// 5. Guess the out put following code

// let a = () => argument;

// a("hi");

// argument not defined becouse arrow function not bind with argument but function declaration must retrun value

// let a = function () {
//   return arguments;
// };

// console.log(a("hi.."));

// 6. Guess the out put following code
// let x = function () {
//   return {
//     hi: "Rajkumar",
//   };
// };
// console.log(x());

// 7. How to disable the add or updating object properties Object.seal allow for modefied properties, Object.defineProperty(profile,'age',{
//     value:3,
//     writable:false
// })
// let profile = {
//   name: "rajkumar",
// };

// Object.freeze(profile);

// profile.age = 25;

// console.log(profile);

// 8. Guess out put
// console.log(Math.max()); // -Infinity

// 9 Guess output "Thank you for subscribing"

// let subscribe = {
//   name: "Rajkumar",
// };

// subscribe = 500;
// if (!typeof profile === "string") {
//   console.log("Please subscribe");
// } else {
//   console.log("Thank you for subscribing");
// }

// 10 Sort array number in asc order

// const arr = [3, 5, 7, 1, 10, 23];
// console.log(arr.sort((a, b) => a - b));

// Find missing numbers from an array

// const missingNums = (nums) => {
//   let key = nums[0];
//   let i = 0;
//   while (i <= nums.length - 1) {
//     if (nums[i] != key) {
//       console.log(key);
//       key++;
//     } else {
//       key++;
//       i++;
//     }
//   }
// };

// missingNums([2, 4, 6, 7, 20]);

// 11 Merge Array1 and Array2, remove duplicate and sort asc order

// const array1 = [1, 2, 2, 3, 4, 5, 5];
// const array2 = [4, 6, 7, 8, 10];
// console.log([...new Set(array1.concat(array2))].sort((a, b) => a - b));

// 12 Guess output

// const youTube = () => {
//   try {
//     throw new error("I am error");
//   } catch (error) {
//     return "I am catch block";
//   } finally {
//     return "I am finally block";
//   }
// };

// console.log(youTube());

// 13 out put will be 3 3 3 due to the hosting each 1 sec time interval dealy
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 * i);
// }

// (() => {
//   console.log(" i am ananomus function");
// })();

// for (var i = 0; i < 3; i++) {
//   setTimeout(
//     ((i) => {
//       console.log(i);
//     })(i),
//     1000 * i
//   );
// }

// for (var i = 0; i < 3; i++) {
//   setTimeout(
//     ((i) => {
//       return () => {
//         console.log(i);
//       };
//     })(i),
//     1000 * i
//   );
// }

// function example1() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, 1000 + i);
//   }
// }

// example1();

// function example3() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(
//       (function (k) {
//         return function () {
//           console.log(k);
//         };
//       })(i),
//       1000 * i
//     );
//   }
// }
// example3();

//  14 example
// func1();
// func2();
// var func2 = () => {
//   console.log("I will subscribe to geeksForGeeks");
// };
// function func1() {
//   console.log("Welcome to GeeksforGeeks");
// }

// Example 15
// var rate = 10;
// function getRate() {
//   if (rate == undefined) {
//     var rate = 6;
//     return rate;
//   } else {
//     return 10;
//   }
// }
// console.log("Rate is", getRate());

// Example 16
// async function testPromise1() {
//   return Promise.resolve(1);
// }
// async function testPromise2() {
//   return Promise.resolve(2);
// }
// async function testPromise3() {
//   return Promise.resolve(3);
// }

// console.log("Before async await"); // 2
// testPromise1.then((num1) => {
//   testPromise2.then((num2) => {
//     testPromise3.then((num3) => {
//       console.log(num1 + num2 + num3);
//       console.log("After async await"); //4
//     });
//   });
// });

// async function test() {
//   console.log("Before async await"); // 2

//   const num1 = await testPromise1();
//   const num2 = await testPromise2();
//   const num3 = await testPromise3();
//   console.log(num1 + num2 + num3);
//   console.log("After async await"); //4
// }
// console.log("Before calling test"); // 1
// test();
// console.log("After calling test"); // 3

// Example 17
// function test() {
//   var x = 10;
//   var x = 1;
//   console.log("X is " + x);
// }
// test();

// Question 2
// function varTest() {
//   var x = 1;
//   {
//     var x = 2;
//     console.log(x);
//   }
//   console.log(x);
// }

// varTest();

// function init() {
//   var name = "Uncommon Geeks";
//   function displayName() {
//     alert(name);
//   }
//   displayName();
// }
// init();

// function makeFunc() {
//   var name = "Uncommon Geeks";
//   function displayName() {
//     alert(name);
//   }
//   return displayName;
// }

// var myFunc = makeFunc();

// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }
// var add5 = makeAdder(5);
// var add10 = makeAdder(10);
// console.log(add5(2));
// console.log(add10(2));

// function outside() {
//   var x = 5;
//   function inside(x) {
//     return x * 2;
//   }
//   return inside;
// }

// console.log(outside()(10));

// Question 5:
// function timeOut() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//   }
// }
// timeOut();

// Questions 6:
// (function immediateA(a) {
//   return (function immediateB(b) {
//     console.log(a); // What is logged?
//   })(1);
// })(0);

// console.log(1 + "2" + "2");
// console.log(1 + +"2" + "2");
// console.log(1 + -"1" + "2");
// console.log(+"1" + "1" + "2");
// console.log("A" - "B" + "2");
// console.log("A" - "B" + 2);

// function test() {
//   return new Promise((res) => {
//     res("data");
//   });
// }
// const result = test().then();
// console.log(result);

// const promiseOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("I am Promise1");
//   }, 1000);
// });

// console.log(promiseOne.then());

// Question 4:
// function outside() {
//   var x = 5;
//   function inside(x) {
//     return x * 2;
//   }
//   return inside;
// }

// console.log(outside()(10));

// (function immediateA(a) {
//   return (function immediateB(b) {
//     console.log(a); // What is logged?
//   })(1);
// })(0);

// function question1() {
//   const arr1 = [1, 2, 3, 4];
//   const arr2 = [...arr1];
//   arr2.push(10);
//   console.log("Array 2 is " + arr2);
//   console.log("Array 1 is " + arr1);
// }

// question1();

// function question2() {
//   const user1 = {
//     name: "Vasanth",
//     channel: "uncommon_geeks",
//   };
//   const user2 = Object.assign({}, user1);
//   user2.name = "coolVasanth";
//   console.log(user2);
//   console.log(user1);
// }

// question2();

// function question3() {
//   const user1 = {
//     name: "Vasanth",
//     channel: "uncommon_geeks",
//     location: {
//       city: "Bengaluru",
//       state: "karnataka",
//     },
//   };
//   const user2 = JSON.parse(JSON.stringify(user1));
//   user2.location.city = "Mysuru";
//   console.log(user2);
//   console.log(user1);
// }

// function question4() {
//   const testObject1 = {
//     sampleDate: new Date(),
//   };
//   const testObject2 = JSON.parse(JSON.stringify(testObject1));
//   console.log(testObject1);
//   console.log(testObject2);
// }

// question4();

// const twoSum = (arrNums, target) => {
//   let storage = {};
//   for (let [index, num] of arrNums.entries()) {
//     if (storage[num] !== undefined) {
//       return [storage[num], index];
//     } else {
//       storage[target - num] = index;
//     }
//   }
// };

// const arrNums = [2, 3, 4, 8, 5];
// let target = 6;
// const result = twoSum(arrNums, target);
// console.log(result);

// console.log(square);
// console.log(square(5));
// var square = function (n) {
//   return n * n;
// };

// function test(theObject) {
//   theObject.make = "Toyota";
// }
// const car_details = {
//   make: "Honda",
//   model: "Accord",
//   year: 1998,
// };
// console.log("car_details.make 1", car_details.make);
// test(car_details);
// console.log("car_details.make 2" + car_details.make);

// var num1 = 20,
//   num2 = 3,
//   name = "Chamakh";
// function getScore() {
//   var num1 = 2,
//     num2 = 3;
//   function add() {
//     return name + " scored " + (num1 + num2);
//   }
//   return add();
// }
// console.log(getScore());
// console.log(num1, num2);

// function addSquares(a, b) {
//   function square(x) {
//     return x * x;
//   }
//   return square(a) + square(b);
// }
// a = addSquares(2, 3); // 4 + 9 = 13
// b = addSquares(3, 4); // 9 + 16 = 25
// c = addSquares(4, 5);
// console.log(a, b, c);

// function A(x) {
//   function B(y) {
//     function C(z) {
//       console.log(x + y + z);
//     }
//     C(3);
//   }
//   B(2);
// }
// A(1);

// function pushValues(src, destination) {
//   for (let i = 0; i < destination.length; i++) {
//     src.push(destination[i]);
//   }
//   return src;
// }

// Array.prototype.myConcat = function () {
//   const argumentBunch = arguments;
//   let inputArray = this;

//   for (let i = 0; i < argumentBunch.length; i++) {
//     if (Array.isArray(argumentBunch[i])) {
//       inputArray = pushValues(inputArray, argumentBunch[i]);
//     } else {
//       inputArray.push(argumentBunch[i]);
//     }
//   }
//   return inputArray;
// };

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const value1 = "y";
// const value2 = () => {};
// const value3 = undefined;
// const value4 = null;

// console.log(arr1.concat(arr2, value1, value2, value3, value4));
// console.log(arr1.myConcat(arr2, value1, value2, value3, value4));

// let walk = {
//   step: 0,
//   forward() {
//     this.step++;
//     return this;
//   },
//   backward() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     // shows the current step
//     console.log(this.step);
//   },
// };

// walk.forward().backward().backward().showStep();

// const ids = [
//   {
//     id: "alerts",
//   },
//   {
//     id: "explore",
//     children: [
//       {
//         id: "dashboard",
//       },
//       {
//         id: "discover",
//       },
//     ],
//   },
//   {
//     id: "reporting",
//   },
//   {
//     id: "configuration",
//     children: [
//       {
//         id: "general_configuration",
//       },
//       {
//         id: "automation",
//         children: [
//           {
//             id: "rules_configuration",
//           },
//           {
//             id: "entity_of_interest",
//           },
//         ],
//       },
//     ],
//   },
// ];

// function returnOnlyIds(ids) {
//   return ids.map((item) =>
//     item.children ? returnOnlyIds(item.children) : item.id
//   );
// }

// console.log(returnOnlyIds(ids));
