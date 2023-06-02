/**
 * 统计范围内的元音字符串数
 * https://leetcode.cn/problems/count-vowel-strings-in-ranges/
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */

var vowelStrings = function (words, queries) {
  // 法一：暴力解法，超时
  // return queries.map(([s, e]) => {
  //   return words
  //     .slice(s, e + 1)
  //     .filter((i) => ['a', 'e', 'i', 'o', 'u'].includes(i.charAt(0))).length
  // })

  //  法二：前缀和
  function isStartEndVowel(word) {
    const Vowel = ['a', 'e', 'i', 'o', 'u']
    console.log(
      Vowel.includes(word.charAt(0)) &&
        Vowel.includes(word.charAt(word.length - 1))
    )
    return (
      Vowel.includes(word.charAt(0)) &&
      Vowel.includes(word.charAt(word.length - 1))
    )
  }
  let arr = new Array(words.length + 1).fill(0)
  for (let i = 0; i < words.length; i++) {
    arr[i + 1] = arr[i] + (isStartEndVowel(words[i]) ? 1 : 0)
  }

  return queries.map(([s, e]) => arr[e + 1] - arr[s])
}

const words = ['aba', 'bcb', 'ece', 'aa', 'e'],
  queries = [
    [0, 2],
    [1, 4],
    [1, 1]
  ]
// const words = [
//     'bzmxvzjxfddcuznspdcbwiojiqf',
//     'mwguoaskvramwgiweogzulcinycosovozppl',
//     'uigevazgbrddbcsvrvnngfrvkhmqszjicpieahs',
//     'uivcdsboxnraqpokjzaayedf',
//     'yalc',
//     'bbhlbmpskgxmxosft',
//     'vigplemkoni',
//     'krdrlctodtmprpxwditvcps',
//     'gqjwokkskrb',
//     'bslxxpabivbvzkozzvdaykaatzrpe',
//     'qwhzcwkchluwdnqjwhabroyyxbtsrsxqjnfpadi',
//     'siqbezhkohmgbenbkikcxmvz',
//     'ddmaireeouzcvffkcohxus',
//     'kjzguljbwsxlrd',
//     'gqzuqcljvcpmoqlnrxvzqwoyas',
//     'vadguvpsubcwbfbaviedr',
//     'nxnorutztxfnpvmukpwuraen',
//     'imgvujjeygsiymdxp',
//     'rdzkpk',
//     'cuap',
//     'qcojjumwp',
//     'pyqzshwykhtyzdwzakjejqyxbganow',
//     'cvxuskhcloxykcu',
//     'ul',
//     'axzscbjajazvbxffrydajapweci'
//   ],
//   queries = [
//     [4, 4],
//     [6, 17],
//     [10, 17],
//     [9, 18],
//     [17, 22],
//     [5, 23],
//     [2, 5],
//     [17, 21],
//     [5, 17],
//     [4, 8],
//     [7, 17],
//     [16, 19],
//     [7, 12],
//     [9, 20],
//     [13, 23],
//     [1, 5],
//     [19, 19]
//   ]

console.log(vowelStrings(words, queries))
