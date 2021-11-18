// 模板字符串换行

// const str4 = `
// <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
// </ul>
// `;
// console.log(str4);

console.log(String.fromCharCode(0x20bb7));
console.log(String.fromCodePoint(0x20bb7));

// indexOf
const str = "hzy";
console.log(str.indexOf("nice"));
console.log(str.includes("z"));
console.log(str.startsWith("h"));
console.log(str.endsWith("zy"));
const newStr = str.repeat(10);
console.log(newStr);
