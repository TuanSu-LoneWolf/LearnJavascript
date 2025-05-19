// _____________________ Object ____________________

//1. Tạo object
var myInfo = {
  name: "TuanSu",
  age: 16,
  address: "Tp HCM, VN",
  "my-friend": "Nam", //Đối với gạch nối thì phải thêm ""
};

//2. Thêm key vào object
myInfo.email = "tuansu1561@gmail.com";
myInfo["my-email"] = "tuanss1561@gmail.com";

console.log(myInfo);
console.log(myInfo.name);
console.log(myInfo["my-email"]);

//3. Cách thêm biến vào object

var myKey = "address";
var emailKey = "myEmail";
var Info = {
  [emailKey]: "tuansu@gmail.com",
};

console.log(myInfo[myKey]); //Chỉ dùng được []
console.log(Info);

//4. Xóa key
delete myInfo.age;
console.log(myInfo);

//5. Function trong object
var Info = {
  [emailKey]: "tuansu@gmail.com",
  getEmail: function () {
    return this[emailKey]; //This là tên object (Info)
  },
};

console.log(Info.getEmail());

//Function --> Phương thức / method
//Others --> Thuộc tính / property

//------------------------ Object Constructor (Bản thiết kế ngôi nhà) ------------------------

function User(firstName, lastName, avatar) {
  //Viết hoa tên của Object Constructor
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

var author = new User("Tuan", "Su", "Avatar");
var user = new User("Nam", "Lau", "Avatar");

//Thêm thuộc tính cho đối tượng
author.title = "I am lonely";
user.comment = "Hi bro!";

console.log(author);
console.log(user);
console.log(user.constructor);
console.log(author.getName());

//Xem bản thiết kế
console.log(user.constructor === User);

// --------------------------------- Object prototype (Nguyên liệu tạo ra ngôi nhà) - basic ------------------------------------

function User(firstName, lastName, avatar) {
  //Viết hoa tên của Object Constructor
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

var author = new User("Tuan", "Su", "Avatar");
var user = new User("Nam", "Lau", "Avatar");

User.prototype.className = "THCS Thoại Ngọc Hầu";
User.prototype.getClassName = function () {
  return this.className;
};

console.log(user.className); //Thêm thuộc tính từ ngoài vào object
console.log(author.className);
console.log(author.getClassName());

//-------------------------- Date -------------------------

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

console.log(date);
console.log(year);
console.log(month); //0 --> 11
console.log(day);
console.log(`${day}/${month}/${year}`);

//Key: Javascript date object mozilla
