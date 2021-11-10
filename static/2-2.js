/**
 * 给某个对象添加属性
 * 3.14
 */
// Object.defineProperty(window, "PI", {
//   value: 3.14,
//   writable: false,
// });
// console.log(PI);
// PI = 5;
// console.log(PI);

/**
 * const 定义不能被改变
 */
// const a = 5;
// a = 6;

/**
 * const 定义不能被改变
 */
// const a
// a = 5

/**
 * a is not defined
 * a在块内
 */
// if (true) {
//   const a = 5;
// }
// console.log(a);

/**
 * Cannot access 'a' before initialization
 * const 没提升
 */
// if (true) {
//   console.log(a);
//   const a = 5;
// }

/**
 * Object.freeze浅层冻结
 */

// const obj = {
//   name: "hzy",
//   age: 23,
//   skill: {
//     name: "code",
//     year: 11,
//   },
// };

// Object.freeze(obj);
// Object.freeze(obj.skill);
// console.log(obj);
// obj.school = "nice";
// obj.skill.year = 12;
// console.log(obj);

// const arr = [1, 2, 3]
// arr.push(4)
// console.log(arr)
