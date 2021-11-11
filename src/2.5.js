// // DOM
// let divs = document.getElementsByTagName("div");
// console.log(divs); // HTMLCollection []

// let divs2 = document.getElementsByClassName("xx");
// console.log(divs2); // HTMLCollection []

// let divs3 = document.querySelectorAll(".xxx");
// console.log(divs3); // NodeList []
// divs3.push(123); // 报错

// // slice
// let arr = Array.prototype.slice.call(divs3);
// console.log(arr);
// arr.push(123);
// console.log(arr);

// function foo() {
//   console.log(arguments instanceof Array);
// }
// foo(1, "nice", true);

// // Array.from
// let arrayLike = {
//   0: "es6",
//   1: "es7",
//   2: "es8",
//   length: 3,
// };
// let arr = Array.from(arrayLike);
// arr.push("es9");
// console.log(arr);

// let arr = new Array(1, 2);
// console.log(arr);

// let arr = new Array(3);
// console.log(arr);

// let arr = Array.of(1, 2);
// console.log(arr);

// let arr = Array.of(3);
// console.log(arr);

// let arr = Array.of(1, true, "imooc", [1, 2, 3], { name: "hzy" });
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.copyWithin(1, 3));

// let arr = new Array(3).fill(7);
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// arr.fill("hzy", 1, 3);
// console.log(arr);

// let arr = [1, 2, 3, NAN];
// console.log(arr.indexOf(NAN)); // -1
// console.log(NAN == NAN); // false
// console.log(arr.includes(NaN)); // true
