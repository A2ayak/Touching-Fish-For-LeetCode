/* 
目	运输时间
难度	难
题目说明	M（1<=M<=20）辆车需要在一条不能超车的单行道到达终点，起点到终点的距离为N（1<=N<=400）。速度快的车追上前车后，只能以前车的速度继续行驶。求最后一车辆到达目的地花费的时间。
注：每辆车固定间隔一小时出发，比如第一辆车0时出发，第二辆车1时出发，以此类推。
输入描述	第一行两个数字：M N分别代表车辆数和到终点的距离，以空格分隔。
接下来M行，每行1个数字S，代表每辆车的速度。0<S<30。
输出描述	最后一辆车到达目的地花费的时间。
补充说明	无
------------------------------------------------------
示例	
示例1	
输入	2 11
3
2
输出	5.5
说明	2 辆车，距离 11，0 时出发的车速度快，1 时出发的车，到达目的的花费为 5.5。


1、解读与分析
题目解读：
每隔 1 小时发出 1 辆车，如果后车的速度比较快，已经赶上了前车，则速度与前车保持一致。求最后一辆车，从发车到终点，需要多少时间。
2、分析与思路：
虽然此题难度为“难”，但思路却非常简单。
从 0 时开始，依次计算每辆车需要的时间，由于后发的车速度较快，如果后发的车赶上前车，则到达时间为前车时间减 1 。从第 1 辆车开始，一直算到最后一辆车。
*/

function processTransportTime(distance, speeds) {
  var minTime = 0
  for (var i = 0; i < speeds.length; i++) {
    var speed = parseInt(speeds[i])
    var curTime = distance / speed
    if (i == 0) {
      minTime = curTime
      continue
    }
    if (curTime < minTime - 1) {
      minTime = minTime - 1
    } else {
      minTime = curTime
    }
  }
  return minTime
}

console.log(processTransportTime(10, [2, 1, 2, 3]))
