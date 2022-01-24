var findSmallestPositiveNumber = function(nums) {
  let l = 0;
  let r = 1; 
  nums.sort((a, b) => a - b);

  if(nums[nums.length - 1] < 0 || nums[0] > 1 ) return 1;
  
  while(r < nums.length) {
    if(nums[l] >= 0 && nums[r] >= 0) {
      if(nums[r] - nums[l] == 1 || nums[r] - nums[l] == 0) {
          r++;
          l++;
      }
      else {
      return nums[l] + 1;
      }
    }
    else if(nums[l] <= 0 && nums[r] > 0) {
      if(nums[r] == 1) {
        r++;
        l++;
      }
      else return 1;
    }
    else {
        r++;
        l++;
    }
  }
  return nums[l] + 1;
}

// console.log(findSmallestPositiveNumber([1,3,6,4,1,2]))
// console.log(findSmallestPositiveNumber([1,2,3]))
console.log(findSmallestPositiveNumber([0,-1,3,1]))