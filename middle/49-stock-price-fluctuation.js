/**
 * 股票价格波动
 * https://leetcode.cn/problems/stock-price-fluctuation/
 */

var StockPrice = function () {
  this.map = new Map()
  this.maxTimestamp = 0
}

/**
 * @param {number} timestamp
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function (timestamp, price) {
  this.map.set(timestamp, price)
  if (timestamp > this.maxTimestamp) {
    this.maxTimestamp = timestamp
  }
}

/**
 * @return {number}
 */
StockPrice.prototype.current = function () {
  return this.map.get(this.maxTimestamp)
}

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function () {
  // return Math.max(...this.map.values())
  let max = 0
  for (const price of this.map.values()) {
    if (max < price) max = price
  }
  return max
}

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function () {
  // return Math.min(...this.map.values())
  let min = Infinity
  for (const price of this.map.values()) {
    if (min > price) min = price
  }
  return min
}

/**
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */

/* 
输入：
["StockPrice", "update", "update", "current", "maximum", "update", "maximum", "update", "minimum"]
[[], [1, 10], [2, 5], [], [], [1, 3], [], [4, 2], []]
输出：
[null, null, null, 5, 10, null, 5, null, 2] 

解释：
StockPrice stockPrice = new StockPrice();
stockPrice.update(1, 10); // 时间戳为 [1] ，对应的股票价格为 [10] 。
stockPrice.update(2, 5);  // 时间戳为 [1,2] ，对应的股票价格为 [10,5] 。
stockPrice.current();     // 返回 5 ，最新时间戳为 2 ，对应价格为 5 。
stockPrice.maximum();     // 返回 10 ，最高价格的时间戳为 1 ，价格为 10 。
stockPrice.update(1, 3);  // 之前时间戳为 1 的价格错误，价格更新为 3 。
                          // 时间戳为 [1,2] ，对应股票价格为 [3,5] 。
stockPrice.maximum();     // 返回 5 ，更正后最高价格为 5 。
stockPrice.update(4, 2);  // 时间戳为 [1,2,4] ，对应价格为 [3,5,2] 。
stockPrice.minimum();     // 返回 2 ，最低价格时间戳为 4 ，价格为 2 。
*/
