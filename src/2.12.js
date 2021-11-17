// 父类
function Animal(name) {
  this.name = name;
}
Animal.prototype.showName = function () {
  console.log(`名字是: ${this.name}`);
};

// 子类
// 构造函数继承
function Dog(name, color) {
  Animal.call(this, name);
  this.color = color;
}
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;

let d1 = new Dog("wangCai", "white");
d1.showName();
console.log(d1);
