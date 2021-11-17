// let target = {
//   a: {
//     b: {
//       c: 1,
//     },
//     e: 4,
//     f: 5,
//     g: 6,
//   },
// };
// let source = {
//   a: {
//     b: {
//       c: 1,
//     },
//     e: 2,
//     f: 3,
//   },
// };

// // 检查类型
// let checkType = (data) => {
//   return Object.prototype.toString.call(data).slice(8, -1);
// };

// let deepClone = (target) => {
//   let targetType = checkType(target);
//   let result;
//   if (targetType === "Object") {
//     result = {};
//   } else if (targetType === "Array") {
//     result = [];
//   } else {
//     return target;
//   }

//   for (let i in target) {
//     let value = target[i];
//     let valueType = checkType(value);
//     if (valueType === "Object" || valueType === "Array") {
//       result[i] = deepClone(value);
//     } else {
//       result[i] = value;
//     }
//   }
//   return result;
// };

// let obj1 = {
//   name: "hzy",
//   hobby: ["coding", "eating"],
// };
// let obj2 = deepClone(obj1);
// obj2.hobby[0] = "nice";
// console.log(obj1);
// console.log(obj2);
