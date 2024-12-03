//______________________ Function ________________________

//--------------- Tạo hàm đầu tiên -----------------

function showDialog() {
  console.log("Xin chào");
}
showDialog();

//------------------ Tham số hàm ---------------------

//1. Truyền tham số
function writeLog(message, message2) {
  console.log(message, message2);
}
writeLog("Chào bạn");
writeLog(123);
writeLog(["Js", "Html"]);
writeLog("LoneWolf", "Usagi");

//2. Arguments?
function fullName() {
  console.log(arguments);
}
fullName("Tuan", "Su");

//2.1. For of
function writelog() {
  myString = "";
  for (var param of arguments) {
    myString += param + "-";
  }
  console.log(myString);
}
writelog("hello", "hi", "excuse me");

//------------------- Return ------------------

var isConfirm = confirm("");
console.log(isConfirm);

function cong(a, b) {
  return a + b;
}
var result = cong(1, 1);
console.log(result);

//-------------- Hàm trong hàm ---------------
function showMessage() {
  function showMessage2() {
    console.log("Message 2");
  }
  showMessage2();
}
showMessage();

//------------------------- Các loại function --------------------------------

//1. Declaration function (có thể gọi được trước khi định nghĩa)
function showMessage3() {
  console.log("Declaration function");
}

//2. Expression function
var showMessage4 = function () {};
setTimeout(function () {});
var myObject = {
  function: function () {},
};
//3.
