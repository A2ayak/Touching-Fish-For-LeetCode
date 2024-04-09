/* 
题目描述
Excel工作表中对选定区域的数值进行统计的功能非常实用。
仿照Excel的这个功能，请对给定表格中选中区域中的单元格进行求和统计，并输出统计结果。
为简化计算，假设当前输入中每个单元格内容仅为数字或公式两种。
如果为数字，则是一个非负整数，形如3、77
如果为公式，则固定以=开头，且仅包含下面三种情况：

1、等于某单元格的值，例如=B12
2、两个单元格的双目运算（仅为+或-），形如=C1-C2、C3+B2
3、单元格和数字的双目运算（仅为+或-），形如=B1+1、100-B2
注意：

公式内容都是合法的，例如不存在，=C+1、=C1-C2+B3,=5、=3+5
不存在循环引用，例如A1=B1+C1、C1=A1+B2
内容中不存在空格、括号
输入描述
第一行两个整数rows cols，表示给定表格区域的行数和列数，1<=rows<=20，1<=cols<=26。
接下来rows行，每行cols个以空格分隔的字符串，表示给定表格values的单元格内容。
最后一行输入的字符串，表示给定的选中区域，形如A1:C2。

输出描述
一个整数，表示给定选中区域各单元格中数字的累加总和，范围-2,147,483,648 ~ 2,147,483,647

备注
表格的行号1~20，列号A~Z，例如单元格B3对应values[2][1]。
输入的单元格内容（含公式）中数字均为十进制，值范围[0, 100]。
选中区域：冒号左侧单元格表示选中区域的左上角，右侧表示右下角，如可以为B2:C10、B2:B5、B2:Y2、B2:B2,无类似C2:B2、C2:A1的输入。
*/

/**
 * 求和选中区域所有数的和
 * @param {*} matrix 给定表格区域
 * @param {*} rows 给定表格区域的行数
 * @param {*} cols 给定表格区域的列数
 * @param {*} start 选中区域的左上角位置
 * @param {*} end 选中区域的右下角位置
 */
function getResult(matrix, rows, cols, start, end) {
  // 该正则用于分解出Excel单元格位置坐标（形式如A1，B2，C3）的列和行，注意字母是列号，数字是行号
  const regExp = /^([A-Z])(\d+)$/

  // 获取指定坐标pos的单元格内的值，pos形式如A1，B2，C3
  function getCell(pos) {
    let [_, col, row] = regExp.exec(pos)
    col = String(col).charCodeAt() - 65 // 题目说列号取值A~Z，起始列A对应的码值65，A列等价于matrix矩阵的第0行
    row -= 1 // 起始行1，等价于matrix矩阵的第0行

    // 如果单元格内容以=开头，则为公式
    if (String(matrix[row][col]).startsWith('=')) {
      // 公式有三种情况
      // 等于某单元格的值，例如=B12
      // 两个单元格的双目运算（仅为+或-），形如=C1-C2、C3+B2
      // 单元格和数字的双目运算（仅为+或-），形如=B1+1、100-B2
      let [_, cell1, cell2] = matrix[row][col].split(/[\=\+\-]/)
      if (!cell2) cell2 = 0 // 对于 =A1 这种情况，cell2结构出来是undefined，我们需要考虑这种情况将其置为0

      // 如果cell解析出来是值，则直接使用
      if (/^\d+$/.test(cell1)) {
        cell1 -= 0
      }
      // 如果cell解析出来不是值，那就是Excel坐标
      else {
        cell1 = getCell(cell1)
      }

      // 同上
      if (/^\d+$/.test(cell2)) {
        cell2 -= 0
      } else {
        cell2 = getCell(cell2)
      }

      // 如果cell1和cell2是相加
      if (matrix[row][col].includes('+')) {
        matrix[row][col] = cell1 + cell2
      }
      // 如果cell1和cell2是相减
      else if (matrix[row][col].includes('-')) {
        matrix[row][col] = cell1 - cell2
      }
      // 如果没有运算，那就只可能是单值，直接使用
      else {
        matrix[row][col] = cell1
      }
    }
    // 如果单元格内容不以=开头，则为可以直接使用的数值
    else {
      matrix[row][col] -= 0
    }

    return matrix[row][col]
  }

  // 选中区域左上角坐标的解析
  let [_1, col_start, row_start] = regExp.exec(start)
  // 选中区域右下角坐标的解析
  let [_2, col_end, row_end] = regExp.exec(end)

  // 列坐标处理
  col_start = String(col_start).charCodeAt()
  col_end = String(col_end).charCodeAt()
  // 行坐标处理
  row_start -= 0
  row_end -= 0

  let ans = 0
  for (let j = col_start; j <= col_end; j++) {
    for (let i = row_start; i <= row_end; i++) {
      ans += getCell(`${String.fromCharCode(j)}${i}`)
    }
  }

  return ans
}

// const regExp = /^([A-Z])(\d+)$/
// console.log(regExp.exec('A3'))
// console.log('A3'.match(regExp))

// const a = '=C2'
// console.log(a.split(/[\=\+\-]/))

// function getCells(str = 'A4') {
//   const reg = /^([A-Z])(\d+)$/
//   const [_, col, row] = str.match(reg)
//   const realCol = col.charCodeAt() - 65
//   const realRow = row - 1
//   console.log(realRow, realCol)
//   // 公式有三种情况
//   // 等于某单元格的值，例如=B12
//   // 两个单元格的双目运算（仅为+或-），形如=C1-C2、C3+B2
//   // 单元格和数字的双目运算（仅为+或-），形如=B1+1、100-B2
//   if (String(matrix[realRow][realCol]).startsWith('=')) {
//     const isNumberReg = /^\d$/g
//     const [_, l, r] = matrix[realRow][realCol].split(/[\+\-\=]/)
//     if (!r) r = 0
//     if (isNumberReg.test(l)) {
//       l = Number(l)
//     } else {
//       getCells(l)
//     }
//     if (isNumberReg.test(r)) {
//       r = Number(r)
//     } else {
//       getCells(r)
//     }
//     if (matrix[realRow][realCol].includes('+')) {
//       matrix[realRow][realCol] = l + r
//     } else if (matrix[realRow][realCol].includes('-')) {
//       matrix[realRow][realCol] = l - r
//     } else {
//       matrix[realRow][realCol] = Number(l)
//     }
//   } else {
//     matrix[row][col] -= 0
//   }

//   return matrix[realRow][realCol]
// }

console.log(getCells())
