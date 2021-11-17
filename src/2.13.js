// // static extends constructor static super get/set
// class People {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sex = -1;
//   }
//   // 静态属性
//   get sex() {
//     if (this._sex === 1) {
//       return "male";
//     } else if (this._sex === 0) {
//       return "female";
//     } else {
//       return "error";
//     }
//   }
//   set sex(val) {
//     // 1:male 0:false
//     if (val === 0 || val === 1) {
//       this._sex = value;
//     }
//   }
//   showName() {
//     console.log(this.name);
//   }
//   // 静态方法
//   static getCount() {
//     return 5;
//   }
// }

// People.count = 9;

// let p1 = new People("hzy", 23);
// console.log(p1);
// p1.sex = 5;
// console.log(p1.sex);
// console.log(People.getCount());

// class Coder extends People {
//   constructor(name, age, company) {
//     super(name, age);
//     this.company = company;
//   }
//   showCompany() {
//     console.log(this.company);
//   }
// }

// let coder = new Coder("hzy", 24, "jinBei");
// console.log(coder);
// coder.showCompany();
