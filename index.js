function isPalindrome(word) {
  Function isPalindrome:
  1. Initialize two pointers, one starting from the beginning of the string and the other from the end.
  2. While the start pointer is less than the end pointer:
      a. If the characters at the two pointers are not equal, return false.
      b. Move the start pointer forward and the end pointer backward.
  3. If the loop completes without returning false, return true.

}

/* 
  Add your pseudocode here
*/
Function isPalindrome:
    Initialize two pointers, one starting from the beginning of the string and the other from the end.
     While the start pointer is less than the end pointer:
        a. If the characters at the two pointers are not equal, return false.
        b. Move the start pointer forward and the end pointer backward.
    If the loop completes without returning false, return true.


/*
  Add written explanation of your solution here
*/function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;
  
  while (start < end) {
      if (str[start] !== str[end]) {
          return false;
      }
      start++;
      end--;
  }
  return true;
}

// Additional Test Cases
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("robot")); // false
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
