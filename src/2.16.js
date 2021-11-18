// let m = new Map();
// let obj = {
//   name: "hzy",
// };
// m.set(obj, "es");
// console.log(m.get(obj));
// m.delete(obj);
// console.log(m);
// console.log(m.has(obj));

let map = new Map([
  ["name", "hzy"],
  ["age", 5],
]);
// console.log(map.size);
// console.log(map.has("name"));
// console.log(map.has("age"));
// map.set("name", "nice");
// map.delete("name");
// console.log(map);

// 遍历
// map.forEach((value, key) => console.log(value, key));

// for (let [key, value] of map) {
//   console.log(key, value);
// }

// for (let key of map.keys()) {
//   console.log(key);
// }

// for (let value of map.values()) {
//   console.log(value);
// }

// for (let [key, values] of map.entries()) {
//   console.log(key, values);
// }

// map Object

// WeakMap
// let wm = new WeakMap();
// wm.set([1], 2);
// wm.set(
//   {
//     name: "imooc",
//   },
//   "es"
// );
// console.log(wm);
// console.log(wm.size);

let wm = new WeakMap();
let elem = document.getElementsByTagName("h1");
wm.set(elem, "es6");
console.log(wm.get(elem));
