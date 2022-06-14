/**
 * 高度检查器
 * https://leetcode.cn/problems/height-checker/
 * @param {number[]} nums
 * @return {number}
 */

 var heightChecker = function(heights) {
  return [...heights].sort((a,b)=>a-b).reduce((p, c, i)=>(heights[i] !== c) ? p+1 : p, 0)
};

console.log(heightChecker([1,1,4,2,1,3]))
