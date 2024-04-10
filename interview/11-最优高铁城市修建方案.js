/* 
题目描述
高铁城市圈对人们的出行、经济的拉动效果明显。每年都会规划新的高铁城市圈建设。

在给定：城市数量，可建设高铁的两城市间的修建成本列表、以及结合城市商业价值会固定建设的两城市建高铁。


请你设计算法，达到修建城市高铁的最低成本。

注意，需要满足城市圈内城市间两两互联可达(通过其他城市中转可达也属于满足条件）。

输入描述
第一行，包含此城市圈中城市的数量、可建设高铁的两城市间修建成本列表数量、必建高铁的城市列表。三个数字用空格间隔。
可建设高铁的两城市间的修建成本列表，为多行输入数据，格式为3个数字，用空格分隔，长度不超过1000。
固定要修建的高铁城市列表，是上面参数2的子集，可能为多行，每行输入为2个数字，以空格分隔。
城市id从1开始编号，建设成本的取值为正整数，取值范围均不会超过1000

输出描述
修建城市圈高铁的最低成本，正整数。如果城市圈内存在两城市之间无法互联，则返回-1。
*/

/**
 *
 * @param {*} n 一共几个城市
 * @param {*} cans 哪些城市之间可以修建高铁，以及修建费用
 * @param {*} musts 哪些城市之间必须修建高铁
 */
function getResult(n, cans, musts) {
  const ufs = new UnionFindSet(n)

  // 这里因为不知道题目用例输入的城市序号是否是按顺序的，因此需要排个序。
  // 并且为了方便统计“必建高铁”的费用，我们需要将cans数组改造为对象，key为'1-2' 两个城市，val为 这两个城市建高铁的费用
  const cansObj = {}
  for (let [c1, c2, fee] of cans) {
    const key = c1 < c2 ? `${c1}-${c2}` : `${c2}-${c1}`
    cansObj[key] = fee
  }

  // must数组中元素也改造为'1-2' 两个城市字符串的形成，方便从cansObj中获取对应的费用
  musts = musts.map((must) => {
    const [c1, c2] = must
    return c1 < c2 ? `${c1}-${c2}` : `${c2}-${c1}`
  })

  let minFee = 0
  for (let must of musts) {
    // 计入必建高铁的费用到minFee中
    minFee += cansObj[must]
    const [c1, c2] = must.split('-').map(Number)
    // 并将必建高铁的两个城市纳入同一个连通分量重
    ufs.union(c1, c2)
  }

  // 如果必建高铁本身已经满足所有城市通车了，那么直接返回minFee
  if (ufs.count === 1) return minFee

  // 否则，按照求解最小生成树的Kruskal算法，将高铁线（即图的边）按照成本费用（即边的权重）升序
  cans.sort((a, b) => a[2] - b[2])

  // 遍历排序后的cans，每次得到的都是当前的最小权重边
  for (let [c1, c2, fee] of cans) {
    // 如果对应城市已经接入高铁线（即处于连通分量中）则再次合入就会产生环，因此不能合入，否则就可以合入
    // if (ufs.fa[c1] !== ufs.fa[c2]) {
    if (ufs.find(c1) !== ufs.find(c2)) {
      ufs.union(c1, c2)
      // 若可以合入，则将对应的建造成本计入minFee
      minFee += fee
    }

    // 如果此时，所有城市都通车了（即并查集中只有一个连通分量），则提前结束循环
    if (ufs.count === 1) break
  }

  // 如果循环完，发现并查集中还有多个连通分量，那么代表有的城市无法通车，因此返回-1
  if (ufs.count > 1) return -1

  return minFee
}

// 并查集
class UnionFindSet {
  constructor(n) {
    this.fa = new Array(n + 1).fill(0).map((_, i) => i)
    this.count = n
  }

  find(x) {
    if (x !== this.fa[x]) {
      return (this.fa[x] = this.find(this.fa[x]))
    }
    return x
  }

  union(x, y) {
    const x_fa = this.find(x)
    const y_fa = this.find(y)

    if (x_fa !== y_fa) {
      this.fa[y_fa] = x_fa
      this.count--
    }
  }
}
