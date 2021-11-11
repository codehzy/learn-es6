let arr1 = [1, 2, 3, 4];
let arr2 = [2, 3, 4, 5, 6];
Array.prototype.push.apply(arr1, arr2);
console.log(arr1);
