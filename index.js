function isPalindrome(word) {
// Write your algorithm here

  // Algorithm:
  // 1. Convert the word to lowercase.
  // 2. Remove non-alphabetic characters from the word.
  // 3. Compare the cleaned word with its reverse.
  // 4. Return true if they are equal, indicating a palindrome; otherwise, return false.

  const cleanedWord = word.toLowerCase().replace(/[^a-z]/g, '');
  return cleanedWord === cleanedWord.split('').reverse().join('');
}

/* 
  Add your pseudocode here
  - Set cleanedWord to the lowercase version of the input word with non-alphabetic characters removed
  - Return true if cleanedWord is equal to its reverse, otherwise return false

  Written Explanation:
  The function first converts the input word to lowercase and removes any non-alphabetic characters from it using regular expressions.
  Then, checks if the cleaned word is equal to its reverse. If they are equal, the function returns true, indicating that the word is a palindrome.
  Otherwise, it returns false, indicating that the word is not a palindrome.

  - Input: "Michelle, Wanjiku, Nasirisi, and Software Engineering."
  - Cleaned word: "michellewanjikunasirisiansoftwareengineering"
  - Reversed: "gnireenigneerawtupniiasirisansikiujnawellehcim" (not equal to the cleaned word)
  - Output: false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("Michelle, Wanjiku, Nasirisi, and Software Engineering."));
}

module.exports = isPalindrome;
