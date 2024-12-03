//_________________________ Array (Mảng) __________________________

//------------------ How to make array ------------------

//1. Make array
var languages = ["HTML", "CSS", "JS", undefined, function () {}, 123];
var Languages = new Array("HTML", "CSS", "JS", undefined, function () {}, 123);
console.log(languages);
console.log(Languages);

//2. Check data type
console.log(Array.isArray(languages));

//-------------------- Truy xuất mảng -------------------

//1. Length
console.log(languages.length);

//2. Lấy phần tử theo index
console.log(languages[0]);

//----------------------------- Làm việc với Array ----------------------------

// Key: Javascript Array methods
//1. To String
console.log(languages.toString());

//2. join
console.log(languages.join(", "));

//3. pop
console.log(languages.pop()); // Xóa element cuối và trả về element đã xóa
console.log(languages.pop());
console.log(languages.pop());
console.log(languages.pop());
console.log(languages.pop());
console.log(languages.pop());
console.log(languages.pop());
console.log(languages);

//4. shift
console.log(Languages.shift()); // Xóa element đầu và trả về element đã xóa
console.log(Languages);

//5. push
console.log(languages.push("Python", "JS"));
console.log(Languages.push("C++")); // Thêm một hoặc nhiều element ở cuối và trả về số lượng element trong mảng
console.log(Languages);

//6. unshift
console.log(Languages.unshift("Python")); // Thêm một hoặc nhiều element ở đầu và trả về số lượng element trong mảng
console.log(Languages);

//7. splicing
//7.1. Xóa
Languages.splice(2, 2); //vị trí bắt đầu xóa, số lượng phần tử
console.log(Languages);

//7.2. Chèn
Languages.splice(2, 2, "Pascal");
console.log(Languages);

//8. concat (Nối mảng)
console.log(languages.concat(Languages));

//9. slicing
console.log(Languages.slice(1)); //Cắt từ vị trí đầu đến hết, trả lại mảng đã cắt
console.log(languages.slice(1, 2)); //Vị trí đầu và vị trí cuối, trả lại mảng đã cắt
console.log(Languages.slice(-3, -1)); //Cắt ngược
