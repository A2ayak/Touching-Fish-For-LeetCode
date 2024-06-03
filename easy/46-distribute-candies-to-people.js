/**
 * 分糖果 II
 * https://leetcode.cn/problems/distribute-candies-to-people
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 **/

var distributeCandies = function (candies, num_people) {
  const res = new Array(num_people).fill(0)
  let index = 0
  let distributeNum = 1
  while (candies > 0) {
    res[index % num_people] += candies > distributeNum ? distributeNum : candies
    candies -= distributeNum
    distributeNum++
    index++
  }
  return res
}

// const candies = 10,
//   num_people = 3 // [5,2,3]
const candies = 7,
  num_people = 4 // [1,2,3,1]
console.log(distributeCandies(candies, num_people))
