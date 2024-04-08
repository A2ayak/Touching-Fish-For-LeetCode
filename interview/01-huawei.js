/* 
*一、题目描述：
小王在进行游戏大闯关，有一个关卡需要输入一个密码才能通过。密码获得的条件如下：
在一个密码本中，每一页都有一个由26个小写字母组成的若干位密码，每一页的密码不同，需要从这个密码本中寻找这样一个最长的密码，从它的末尾开始依次去掉一位得到的新密码也在密码本中存在。请输出符合该要求的密码，如果有多个符合要求的密码，则返回字典序最大的密码。若没有符合要求的密码，则返回空字符串。
输入描述：
密码本由一个字符串数组组成，不同元素之间使用空格隔开，每一个元素代表密码本每一页的密码

输出描述：
一个字符串
示例1 输入输出示例仅供调试，后台判题数据一般不包含示例
输入
h he hel hell hello

输出
hello

说明
＂hello＂从末尾依次去掉一位得到的hell＂，＂hel＂，＂he＂和h＂在密码本中都存在。

示例2 输入输出示例仅供调试，后台判题数据一般不包含示例
输入

eredderd bw bww bwwl bwwlm bwwln

输出

bwwln
说明

＂bwwlm＂和＂bwwln＂从末尾开始依次去掉一位得到密码在密码本中都存在。但是＂bwwln＂比＂bwwlm＂字典序排序大，所以应该返回＂bwwln＂
备注：
1＜=密码本的页数＜=105
1＜=每页密码的长度＜=105
*/

function getDesStr(str = '') {
  const arr = str.split(' ').sort((a, b) => a - b)
  const validSet = new Set([''])
  let res
  arr.map((i) => {
    const n = i.slice(0, i.length - 1)
    if (validSet.has(n)) {
      validSet.add(i)
      res = i
    }
  })
  return res
}

// console.log(getDesStr('h he hel hell hello'))
console.log(getDesStr('eredderd b bw bww bwwl bwwlm bwwln'))
