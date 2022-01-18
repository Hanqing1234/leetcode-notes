// A phrase is a palindrome if, after converting all uppercase letters 
// into lowercase letters and removing all non-alphanumeric characters, 
// it reads the same forward and backward. 
// Alphanumeric characters include letters and numbers.
// Example:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Input: s = " "
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g,"");
    let left = 0;
    let right = s.length - 1;
    while (right > left) {
        if(s[right] !== s[left]) {
            return false;
        }
        right--;
        left++;
    }
    return true;
  };

s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));

s = "race a car";
console.log(isPalindrome(s));

s = " ";
console.log(isPalindrome(s));
