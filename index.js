const A = true;
const B = false;
// 逻辑非
console.log(!A);

// 逻辑与
console.log(A && B);

// 逻辑或
console.log(A || B);

// 逻辑异或
console.log(Boolean(A ^ B));

// 非A或B(蕴含)
console.log(Boolean(A ? B : true));
