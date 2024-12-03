// ______________ Number _________________

//1. Tạo giá trị Number
var age = 16;
var pi = 3.14;
var height = new Number(166);
var match = 20 / "ABC"; //Số không hợp lệ và sẽ in ra NaN

//2. Kiểm tra Data type
console.log(match);
console.log(isNaN(match)); //Kiểm tra giá trị NaN khi người dùng nhập sai giá trị

//3. Cách làm việc với Number
//3.1. To string
console.log(age);
console.log(age.toString());

//3.2. To fixed (Làm tròn)
var PI = 3.143993764;
console.log(pi.toFixed(), typeof pi.toFixed()); //Làm tròn và thành kiểu chuỗi
console.log(PI.toFixed(4));
