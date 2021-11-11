// function foo(x, y) {
//   y = y || "world";
//   console.log(x, y);
// }
// foo("hello", 0);

// function foo(x, y = "world") {
//   console.log(x, y);
// }
// foo("hello", 0);

// function ajax(url, { body = "", method = "GET", headers = {} } = {}) {
//   console.log(method);
// }
// ajax("www.baidu.com", {
//   method: "POST",
// });

// let x = 1;
// function foo(y = x) {
//   let x = 2;
//   console.log(y);
// }
// foo();

// function foo(x, y) {
//   console.log(this, x, y);
// }
// foo.bind({ name: "hzy" })(1, 2);

// console.log(function () {}.bind({}).name);
