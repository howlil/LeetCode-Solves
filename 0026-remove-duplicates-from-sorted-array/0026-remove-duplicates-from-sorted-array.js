/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   let k=0;
    for(let i = 0 ; i<nums.length ; i++){
        if(nums.indexOf(nums[i])=== i){
            nums[k++]= nums[i];
        }
    }
    return k;
    
    
};

let nums =[1,1,2];
console.log(removeDuplicates(nums));

