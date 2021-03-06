// let s = new Set();
// console.log(s);

// let s = new Set([1, 2, 3, 2]);
// s.add("hzy").add("es");
// console.log(s);
// s.delete(2);
// s.clear();
// console.log(s);
// console.log(s.has("hzy"));

// // 遍历
// s.forEach((item) => console.log(item));
// for (let item of s) {
//   console.log(item);
// }
// for (let item of s.keys()) {
//   console.log(item);
// }
// for (let item of s.values()) {
//   console.log(item);
// }
// for (let item of s.entries()) {
//   console.log(item[0], item[1]);
// }

// // 数组去重
// let arr = [1, 2, 3, 4, 2, 3];
// let s = new Set(arr);
// console.log(s);

// // 合并去重 set -> array
let arr1 = [1, 2, 3, 4];
let arr2 = [2, 3, 4, 5, 6];
// let s = new Set([...arr1, ...arr2]);
// console.log(s);
// console.log([...s]);
// console.log(Array.from(s));

// 交集
let s1 = new Set(arr1);
let s2 = new Set(arr2);
// let result = new Set(arr1.filter((item) => s2.has(item)));
// console.log(Array.from(result));

// 差集
// let arr3 = new Set(arr1.filter((item) => !s2.has(item)));
// let arr4 = new Set(arr2.filter((item) => !s1.has(item)));
// console.log(arr3);
// console.log(arr4);
// console.log(Array.from([...arr3, ...arr4]));

// WeakSet
let ws = new WeakSet();
const obj1 = {
  name: "hzy",
};
const obj2 = {
  age: 5,
};
ws.add(obj1);
ws.add(obj2);
console.log(ws);
ws.delete(obj1);
// ws.forEach((item) => console.log(item));

// 垃圾回收机制 GC + 1  + 1
// WeakSet是弱引用，不能被遍历
