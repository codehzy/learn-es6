/**
 * 解构赋值数组
 */
// let arr = [1, 2, 3];
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
// let [a, b, c] = [1, 2, 3];
// console.log(a, b, c);

// let [a, b, [c, d]] = [1, 2, [3, 4]];
// console.log(a, b, c, d);

// let [a, b, [c]] = [1, 2, [3, 4]];
// console.log(a, b, c);

// let [a, b, c] = [1, 2, [3, 4]];
// console.log(a, b, c);

// let [a, b, c, d = 5] = [1, 2, [3, 4], 6];
// console.log(a, b, c, d);

/**
 * 对象解构赋值
 */
// let user = {
//   name: "hzy",
//   age: 23,
// };
// let { age: uage, name: uname } = user;
// console.log(uage, uname);

/**
 * 字符串解构赋值 = 类似于数组
 */
// let str = "hzzya";
// let [a, b, c, d, e] = str;
// console.log([a, b, c, d, e]);

// let [a, b, c = 8] = [4, 5, 6];
// console.log(a, b, c);

/**
 * 函数中参数中使用解构赋值
 */
// let { name, age = 18 } = { name: "hzy" };
// console.log(name, age);

// function foo() {
//   console.log(123);
// }
// let [a = foo()] = [];

// function foo([a, b, c]) {
//   console.log(a, b, c);
// }
// let arr = [1, 2, 3];
// foo(arr);

// function foo({ name, age, school = "nice" }) {
//   console.log(name, age, school);
// }
// let obj = {
//   name: "hzy",
//   age: 23,
//   school: "xx",
// };
// foo(obj);

// function foo() {
//   let obj = {
//     name: "hzy",
//     age: 23,
//     school: "xxxx",
//   };
//   return obj;
// }

// let { name, age, school } = foo();
// console.log(name, age, school);

// json
// let json = '{"a": "hello", "b": "world"}';
// let { a, b } = JSON.parse(json);
// console.log(a, b);
