/**
 * 复写0
 * https://leetcode.cn/problems/defanging-an-ip-address/
 * @param {string} address
 * @return {string}
 */

var defangIPaddr = function(address) {
  return address.replace(/\./g, '[.]')
  // const result = []
  // for (let i = 0; i < address.length; i++) {
  //     result.push(address[i] === '.' ? '[.]' : address[i])
  // }
  // return result.join('')
};


console.log(defangIPaddr('1.1.1.1'));