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
