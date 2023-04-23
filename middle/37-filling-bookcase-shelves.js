/**
 * 填充书架
 * https://leetcode.cn/problems/filling-bookcase-shelves/
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */

/* 
解题思路 by chatGPT:
这道题可以使用动态规划来解决。我们可以定义一个数组 dp，其中 dp[i] 表示前 i 本书可以堆成的最小高度。对于每一本书，我们可以将它放在当前层或者新开一层。如果我们将它放在当前层，我们需要检查当前层的宽度是否超过了书架的宽度。如果没有超过，我们可以将当前层的宽度增加这本书的宽度，然后更新 dp[i]。如果超过了，我们需要新开一层，将当前层的高度加到 dp[i] 中，并将当前层的宽度和高度重置为当前书的宽度和高度。我们可以使用一个变量 cur_width 来记录当前层的宽度，使用一个变量 cur_height 来记录当前层的高度。
 */

var minHeightShelves = function (books, shelfWidth) {
  const len = books.length
  const dp = new Array(len + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 1; i <= len; i++) {
    let curH = 0
    let curW = 0
    debugger
    for (let j = i - 1; j >= 0; j--) {
      const [t, h] = books[j]
      curH = Math.max(curH, h)
      curW += t
      if (curW > shelfWidth) break
      dp[i] = Math.min(dp[i], dp[j] + curH)
    }
  }
  console.log(dp)
  return dp.at(-1)
}

const books = [
    [1, 1],
    [2, 3],
    [2, 3],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 2]
  ],
  shelfWidth = 4

console.log(minHeightShelves(books, shelfWidth))
