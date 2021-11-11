let arr = [1, 2, 3, 2, 4, 4];

// for
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 2) {
//     continue;
//   }
//   console.log(arr[i]);
// }

// // forEach : 不改变原数组
// arr.forEach((elem, index, array) => {
//   console.log(elem + index);
// });

// // map
// let result = arr.map((value, index, array) => {
//   return value * 2 + index;
// });

// console.log(result, arr);

// // filter: 筛选满足条件的，不改变原数组
// let result = arr.filter((value) => {
//   return value === 3;
// });
// console.log(result, arr);

// // some
// let result = arr.some((value) => {
//   return value === 4;
// });
// console.log(result);

// // every
// let result = arr.every((value) => {
//   return value === 2;
// });
// console.log(result, arr);

// // reduce
// let res = arr.reduce((pre, cur, index) => {
//   return pre + cur;
// }, 2);
// console.log(res);

// let res = arr.reduce((prev, cur) => {
//   return Math.max(prev, cur);
// });
// console.log(res);

// let res = arr.reduce((prev, cur) => {
//   prev.indexOf(cur) === -1 && prev.push(cur);
//   return prev;
// }, []);
// console.log(res);

// // for...in
// Array.prototype.foo = () => {
//   console.log("foo");
// };
// for (let index in arr) {
//   console.log(index, arr[index]);
// }

// // find
// let res = arr.find((value) => {
//   return value === 2;
// });
// console.log(res);

// // finIndex
// let res = arr.findIndex((value) => {
//   return value === 2;
// });
// console.log(res);

// // for of
// for (let item of arr) {
//   console.log(item);
// }

// 与上方for of 相等

// for (let item of arr.values()) {
//   console.log(item);
// }

// for (let key of arr.keys()) {
//   console.log(key);
// }

// for (let [item, index] of arr.entries()) {
//   console.log(item, index);
// }
