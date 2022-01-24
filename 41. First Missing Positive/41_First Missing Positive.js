//Time complexity is O(nlog(n) + n)
/**
 * @param {number[]} nums
 * @return {number}
 */
 var firstMissingPositive = function(nums) {
     let min = 1;
     nums.sort((a,b) => a - b);
     for(let i = 0; i < nums.length; i++) {
         if(nums[i] == min) {
             min++;
         }
     }
     return min;
 }

 console.log(firstMissingPositive([7,8,9,11,12]))