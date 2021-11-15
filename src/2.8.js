// console.log(sum(4, 5));

// function sum(x, y) {
//   return x + y;
// }

// console.log(sum);
// let sum = function (x, y) {
//   return x + y;
// };

// let sum = (x, y) => {
//   return x + y;
// };
// let sum = (x, y) => x + y;
// console.log(sum(3, 4));

// let oBtn = document.querySelector("#btn");
// // oBtn.addEventListener("click", function () {
// //   setTimeout(() => {
// //     console.log(this);
// //   }, 1000);
// // });
// oBtn.addEventListener("click", function () {
//   // setTimeout(() => {
//   //   console.log(this);
//   // }, 1000);
//   setTimeout(
//     function () {
//       console.log(this);
//     }.bind(this),
//     1000
//   );
// });

// 类
// function People(name, age) {
//   console.log(this);
//   this.name = name;
//   this.age = age;
// }

// 箭头函数模拟类的时候，Uncaught TypeError: People is not a constructor
// let People = (name, age) => {
//   this.name = name;
//   this.age = age;
// };

// let hzy = new People("hzy", 23);
// console.log(hzy);

// let foo = (...args) => {
//   console.log(args);
// };
// foo(1, 2, 3);
