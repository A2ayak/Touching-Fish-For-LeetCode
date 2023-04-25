/**
 * 按身高排序
 * https://leetcode.cn/problems/sort-the-people/
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 **/
var sortPeople = function (names, heights) {
  // 一行kill，利用js Object 数字转字符串后的key值按从小到大排序的特性
  // console.log(Object.fromEntries(heights.map((h, i) => [h, names[i]])))
  return Object.values(
    Object.fromEntries(heights.map((h, i) => [h, names[i]]))
  ).reverse()
  //  return heights.map((h, i) => [h, names[i]]).sort((a,b) => b[0] - a[0]).map(k => k[1])
}

const names = ['Mary', 'John', 'Emma'],
  heights = [180, 165, 170]
// const names = ['Alice', 'Bob', 'Bob'],
//   heights = [155, 185, 150]

console.log(sortPeople(names, heights))
