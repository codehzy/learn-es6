// // 类
// function People(name, age) {
//   //   console.log(this);
//   // 实例属性
//   this.name = name;
//   this.age = age;
//   People.count++;
// }

// // 静态属性
// People.count = 0;
// // 静态方法
// People.getCount = function () {
//   console.log(this.age); // undefined
//   console.log(`当前共有 ${People.count} 个人`);
// };

// // 实例方法
// People.prototype.showName = function () {
//   console.log(`我的名字是 ${this.name}`);
// };
// let p1 = new People("hzy", 24);
// console.log(p1);
// p1.showName();

// let p2 = new People("hzy", 24);

// console.log(People.count);
// People.getCount();

// // 实例方法
// let str = new String("123");
// console.log(str);

// let arr = new Array(1, 2, 3);
// console.log(arr);

// // 举例静态方法
// console.log(Math.max(4, 5));
// console.log(Math.random());
