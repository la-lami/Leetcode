/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let filteredString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let reversedString = filteredString.split("").reverse().join("");

  return filteredString === reversedString;
};
