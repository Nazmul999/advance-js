const nums = [1, 55, 3, 4, 5, 6, 77, 8, 9];
const part = nums.slice(2, 6);
// 2 pabe but 6 pabe na tar ag porgonto

console.log(part);

const part2 = nums.splice(1, 7);

console.log(part2);
// 1 - 7 sobpabe.

const part3 = nums.join(",");

console.log(part3);
//just join