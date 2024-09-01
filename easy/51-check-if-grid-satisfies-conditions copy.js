/**
 * 在既定时间做作业的学生人数
 * https://leetcode.cn/problems/number-of-students-doing-homework-at-a-given-time
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 **/

var busyStudent = function (startTime, endTime, queryTime) {
  let res = 0
  for (let i = 0; i < startTime.length; i++) {
    if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
      res++
    }
  }
  return res
}

const startTime = [4],
  endTime = [4],
  queryTime = 4 // 1
console.log(busyStudent(startTime, endTime, queryTime))
