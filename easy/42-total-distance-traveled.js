/**
 * 总行驶距离
 * https://leetcode.cn/problems/total-distance-traveled
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 **/

var distanceTraveled = function (mainTank, additionalTank) {
  let ans = 0
  while (mainTank >= 5) {
    mainTank -= 5
    ans += 50
    if (additionalTank > 0) {
      additionalTank--
      mainTank++
    }
  }
  return ans + mainTank * 10
}
const mainTank = 5,
  additionalTank = 10

console.log(distanceTraveled(mainTank, additionalTank))
