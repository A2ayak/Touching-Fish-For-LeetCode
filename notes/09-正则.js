// 1、匹配括号内的内容
const regBracketMatch = /(?<=\()(.+?)(?=\))/g // 分三个括号看
const strBracketMatch = '123{456}hhh[789]zzz[yyy]bbb(90ba)kkk'
console.log(strBracketMatch.match(regBracketMatch))

// 2、密码强度，必须包含大小写字母、数字和特殊字符，并且不能包含部分字符(数字0、小写o、大写I、小写l)，且长度至少为8
const regValidatePsw = /^(?=.*[a-km-np-z])(?=.*[A-HJ-NR-Z])(?=.*[!@#$%^&*+=.<>?])(?!.*[o0Il]).{8,}$/g
const strValidatePsw = 'Test@#123'
console.log(regValidatePsw.test(strValidatePsw))
