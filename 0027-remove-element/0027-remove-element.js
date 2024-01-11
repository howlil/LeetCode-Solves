/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  for (var i = nums.length - 1; i >= 0; i--) {
 if (nums[i] === val) {
  nums.splice(i, 1);
 }
}

    
};
let arr = [3,2,2,3];
let x = 3;
console.log(removeElement(arr,x));