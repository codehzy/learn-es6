/**
 * var -> variable
 * 定义在全局，不可以被删除
 */
// var a = 5;
// console.log(a);
// console.log(window.a);
// delete a
// console.log(window.a);

/**
 * 定义在全局，可以被删除
 */
// b = 5
// console.log(b);
// console.log(window.b);
// delete b
// console.log(window.b);

/**
 * 块级作用域问题，不会被添加到全局变量
 */
// let a = 5;
// console.log(a);
// console.log(window.a);

/**
 * Uncaught SyntaxError: Identifier 'a' has already been declared
 * let不可重复声明
 */
// let a = 5;
// let a = 6;
// console.log(a);

/**
 * undefined
 * var先定义
 */
// console.log(a);
// var a = 5;

/**
 * Uncaught ReferenceError: Cannot access 'a' before initialization
 * 没有声明提升
 */
// console.log(a);
// let a = 5;

/**
 * Uncaught ReferenceError: Cannot access 'a' before initialization
 * 之前声明过
 */
// var a = 5;
// if (true) {
//   a = 6;
//   let a;
// }

/**
 * 代码从左到右执行
 */
// function foo(a = 2, b = a) {
//   console.log(a, b);
// }
// foo();

/**
 * 使用let声明外部的i访问不到
 */
// for (let i = 0; i < 3; i++) {
//   console.log("循环内: " + i);
// }
// console.log("循环外:" + i);

/**
 * Uncaught ReferenceError: a is not defined
 * 块级作用域
 */
// if (false) {
//   let a = 5;
// }
// console.log(a);

/**
 * 解决方式一：立即执行函数：保存闭包
 */
// for (var i = 0; i < 3; i++) {
//   (function (j) {
//     setTimeout(function () {
//       console.log(j);
//     });
//   })(i);
// }

/**
 * 解决方式二：let声明块
 */
// for (let i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   });
// }
