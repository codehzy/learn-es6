// // Symbol是对象的话，会自动调用toString方法转换成字符串，然后再生成Symbol的值
// let s1 = Symbol();
// let s2 = Symbol();
// console.log(s1);
// console.log(s2);
// console.log(s1 === s2); // false

// let s1 = Symbol("foo");
// let s2 = Symbol("bar");
// console.log(s1);
// console.log(s2);
// console.log(s1 === s2); // false

// const obj = {
//   name: "hzy",
//   toString() {
//     return this.name;
//   },
// };
// let s = Symbol(obj);
// console.log(s);

// let s1 = Symbol("foo");
// s1.name = "hzy";
// console.log(s1); // Symbol(foo)
// console.log(s1.description); // foo
// let s2 = Symbol("foo");
// console.log(s1 === s2); // false

// let s1 = Symbol.for("foo");
// let s2 = Symbol.for("foo");
// console.log(s1 === s2); // true

// const s1 = Symbol("foo");
// console.log(Symbol.keyFor(s1)); // undefined

// const s2 = Symbol.for("foo");
// console.log(Symbol.keyFor(s2)); // foo

// const stu1 = Symbol("李四");
// const stu2 = Symbol("张三");
// const grade = {
//   [stu1]: { address: "yyy", tel: "222" },
//   [stu2]: { address: "zzz", tel: "333" },
// };
// console.log(grade);
// console.log(grade[stu1]);
// console.log(grade[stu2]);

// const sym = Symbol("nice");
// const sum = Symbol("hzy");
// class User {
//   constructor(name) {
//     this.name = name;
//     this[sym] = "13123";
//   }
//   getName() {
//     return this.name + this[sym];
//   }
// }
// const user = new User("hzy");
// console.log(user.getName());

// for (let key in user) {
//   console.log(key);
// }

// for (let key of Object.keys(user)) {
//   console.log(key);
// }

// for (let key of Object.getOwnPropertySymbols(user)) {
//   console.log(key);
// }

// for (let key of Reflect.ownKeys(user)) {
//   console.log(key);
// }

// const shapeType = {
//   triangle: Symbol(),
//   circle: Symbol(),
// };

// function getArea(shape) {
//   let area = 0;
//   switch (shape) {
//     case shapeType.triangle:
//       area = 1;
//       break;
//     case shapeType.circle:
//       area = 2;
//     default:
//       break;
//   }
//   return area;
// }
// console.log(getArea(shapeType.triangle));
