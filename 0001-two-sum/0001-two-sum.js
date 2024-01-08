var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]; // Return indeks, bukan jumlah
      }
    }
  }
  return []; // Jika tidak ditemukan, return array kosong
};

let nums = [2, 7, 11, 15];
let target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]
