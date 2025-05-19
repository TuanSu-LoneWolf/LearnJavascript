// _______________________ STRING _________________________

// ---------------- TẠO STRING --------------------
// 1. Các cách tạo string
var fullName = "TuanSu";
var fullName = new String("TuanSu");

// 2. Kiểm tra data type
console.log(typeof fullName);

// Một số cách sử dụng backslash (\)
lastname = ' Họ "Su" \\'; //Dùng trước dấu "
console.log(lastname);

// Xem độ dài chuỗi
console.log(fullName.length);

// Chú ý độ dài khi viết code
var poem = "Nam quốc sơn hà nam đế cư" + "Tuyệt nhiên định phận tại thiên thư";

// Kết hợp tên
var firstName = "Tuan";
var lastName = "Su";
console.log("Toi là: " + firstName + lastName);
//or
// Template string ES6
console.log(`Tôi là: ${firstName} ${lastName}`);

// ------------- CÁCH LÀM VIỆC VỚI CHUỖI ---------------

var myString = "Học Javascript";
var a = "a b a a c";
// Keyword: javascript string methods

// 1. Length
console.log("Độ dài chuỗi " + myString.length);
// 2. Find index (tìm vị trí, vị trí đầu là 0)
// 2.1. indexOf
console.log("Vị trí " + myString.indexOf("Javascript"));
console.log("Vị trí " + myString.indexOf("ABC") + "(không tìm được)"); //Không tìm được ra -1
console.log(a.indexOf("a", 3)); //7 là vị trí bắt đầu tìm kiếm
console.log(a.lastIndexOf("a")); // a tại vị trí cuối cùng
// 2.2. search (ko đặt được vị trí bắt đầu)
console.log(a.search("a"));

// 3. Cut String
console.log(a.slice(2, 5));
console.log(myString.slice(-10, -6)); //Cắt ngược
console.log(myString.slice(4));

// 4. Replace (Thay thế)
console.log(myString.replace("Javascript", "JS"));
console.log(a.replace(/a/g, "abc")); //Thay đổi tất cả

// 5. Convert to upper case (Chuyển chuỗi thành In hoa)
console.log(a.toUpperCase());

// 6. Convert to lower case (Chuyển chữ thành in thường)
console.log(myString.toLowerCase());

// 7. Trim (Loại bỏ khoảng trắng thừa ở hai đầu)
var b = "   df   ";
console.log(b.trim());
console.log(b.trim().length);

// 8. Split (Tìm điểm chung để cắt thành array(mảng))
var languages = "HTML, CSS, JS";
console.log(languages.split(", "));
console.log(fullName.split(""));

// 9. Get a character by index
const myString2 = "My name is Su"; //Dùng const để gán giá trị sẽ không thể thay đổi
console.log(myString2.charAt(3));
console.log(myString2.charAt(100)); // Ngoài vị trí cho chuỗi rỗng
console.log(myString2[0]);
console.log(myString2[100]);
