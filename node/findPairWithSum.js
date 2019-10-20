// Problem -----------------
// Given an array, find if any such pair exists which has a given Sum
// e.g. [1, 2, 3, 5], sum = 8 => true
// e.g. [1, 3, 4, 6], sum = 8 => false

// Approach1: Brute Force Approach
// Assumption: none
// Time Compexity: O(n^2)
function doesPairExistsWithSum(arr, sum) {
  for (const item1 of arr) {
    for (const item2 of arr) {
      if (item1 + item2 === sum) {
        return true
      }
    }
  }
  return false
}

// Approach2: Loop + Binary Search
// Assumption: array is sorted
// Time Compexity: O(nlogn)

// Approach3: Loop from both side and check if the addition of the pair is less than sum, move the left cursor, if the addition is greater than sum then move the right cursor. Go till the cursors have crossed or we have found our pair.
// Assumption: array is sorted
// Time Compexity: O(n)
function doesPairExistsWithSum2(arr, sum) {
  let left = 0
  let right = arr.length - 1
  while(left < right) {
    const addition = arr[left] + arr[right]
    if (addition === sum) {
      return true
    } else if (addition < sum) {
      left++
    } else if (addition > sum) {
      right++
    }
  }
  return false
} 

// Approach4: Store the complement of the current item in a object, and check at each step if the complement already exists => O(n)
// Assumption: array is not orted
// Time Compexity: O(n)
function doesPairExistsWithSum3(arr, sum) {
  const hashSet = {}
  for (const item of arr) {
    const complement = sum - item
    if (hashSet[complement]) {
      return true
    }
    hashSet[complement] = true
  }
  return false
}
