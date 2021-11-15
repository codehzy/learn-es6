// let name = "hzy";
// let age = 34;
// let s = "school";
// let obj = {
//   name,
//   age,
//   [s]: "nice",
//   study() {
//     console.log(this.name + "正在学习");
//   },
// };

// console.log(obj);
// obj.study();

// console.log(Object.is(2, "2"));
// console.log(Object.is(NaN, NaN));
// console.log(Object.is(+0, -0));
// let obj1 = {
//   name: "hzy",
//   age: 24,
// };

// let obj2 = {
//   name: "hzy",
//   age: 24,
// };

// // console.log(obj1 === obj2);

// // console.log(Object.is(obj1, obj2));

// // let obj2 = obj1;

// // console.log(Object.is(obj1, obj2));

// let x = {
//   a: 3,
//   b: 4,
// };

// // let y = { ...x };
// // console.log(y);

// let y = {
//   c: 5,
//   d: 6,
// };
// Object.assign(y, x);
// // console.log(y);
// // console.log("aa" in x);

// let arr = [1, 2, 3];
// console.log(2 in arr);

// let obj3 = {
//   name: "hzy",
//   age: 23,
//   school: "imooc",
// };

// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// Object.keys(obj).forEach((key) => {
//   console.log(key, obj[key]);
// });

// for (const [key, value] of Object.entries(obj3)) {
//   console.log(`${key} --- ${value}`);
// }

// Object.getOwnPropertyNames(obj).forEach((key) => {
//   console.log(key, obj[key]);
// });

// Reflect.ownKeys(obj).forEach((key) => {
//   console.log(key, obj[key]);
// });
