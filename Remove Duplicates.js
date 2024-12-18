/**
 * @param {number[]} nums
 * @return {number}
 */

function removeDuplicates(arr) {
  const n = arr.length;
  if (n <= 1) return n;

  // Start from the second element
  let idx = 1;
  for (let i = 1; i < n; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[idx++] = arr[i];
    }
  }

  return idx;
}
