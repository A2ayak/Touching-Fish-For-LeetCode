/**
 *
 * @param {*} tid 指定的ID
 * @param {*} arr [[发送者id,接收者id]]
 * @returns
 */
function getResult(tid, arr) {
  // send记录 tid发送短信给“哪些人”
  const send = []
  // receive记录  “哪些人”发送短信给tid
  const receive = []

  // sendCount记录 tid发送了“几次”（对象属性值）短信给某个人（对象属性）
  const sendCount = {}
  // receiveCount记录 某人（对象属性）发送了“几次”（对象属性值）短信给tid
  const receiveCount = {}

  for (let [sid, rid] of arr) {
    if (sid == tid) {
      send.push(rid)
      sendCount[rid] ? sendCount[rid]++ : (sendCount[rid] = 1)
    }
    if (rid == tid) {
      receive.push(sid)
      receiveCount[sid] ? receiveCount[sid]++ : (receiveCount[sid] = 1)
    }
  }

  const sendSet = new Set(send)
  const receiveSet = new Set(receive)
  // connect记录和tid有交互的id
  const connect = [...sendSet].filter((id) => receiveSet.has(id))

  const l = sendSet.size - connect.length
  const m = send.length - receive.length

  let isSpammers = l > 5 || m > 10

  // 如果已经通过l和m确定了tid是垃圾短信发送者，那就不需要再确认n了，否则还是需要确认n
  if (!isSpammers) {
    // for (let id of connect) {
    //   if ((sendCount[id] ?? 0) - (receiveCount[id] ?? 0) > 5) {
    // 根据网友指正，第三条规则中，X不一定非要和A存在交互，即存在A发送6条短信给X，但是X没有发送过短信给A，此时也符合第三条规则
    // 因此，这里id应该遍历自sendSet，而不是connect
    for (let id of sendSet) {
      if (sendCount[id] - (receiveCount[id] ?? 0) > 5) {
        // 一旦发现x,则可以判断，则确定tid是垃圾短信发送者，可提前结束循环
        isSpammers = true
        break
      }
    }
  }

  return `${isSpammers} ${l} ${m}`
}
