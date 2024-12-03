// Toán tử logical

/** Các giá trị Boolean luôn ra kết quả false
 * null
 * NaN
 * false
 * ' '
 * 0
 * undefined
 */

// Cách hoạt động của &&
var result = "A" && "B" && "C"; //Nếu khác 6 value trên thì tử chuyển sang value tiếp theo
var results = "A" && null && "C"; // Nếu giống 1 trong 6 value trên thì lấy value đó

console.log(result);
console.log(results);

if (result) {
  console.log("Điều kiện đúng");
} else {
  console.log("Điều kiện sai");
}

if (results) {
  console.log("Điều kiện đúng");
} else {
  console.log("Điều kiện sai");
}

// Cách hoạt động của ||
var ketqua = "A" || null || "C"; //Nếu khác 6 value trên thì lấy luôn giá trị đó và ngược lại sẽ chuyển đến giá trị tiếp theo
var ketquar = NaN || null || 0; // Nếu tất cả nằm trong 6 giá trị trên thì false, chỉ cần 1 cái ko nằm trong 6 trên thì true

console.log(ketqua);
console.log(ketquar);

if (ketqua) {
  console.log("Điều kiện đúng");
} else {
  console.log("Điều kiện sai");
}

if (ketquar) {
  console.log("Điều kiện đúng");
} else {
  console.log("Điều kiện sai");
}
