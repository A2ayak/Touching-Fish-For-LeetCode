/**
 * 删除子文件夹
 * https://leetcode.cn/problems/remove-sub-folders-from-the-filesystem/
 * @param {string[]} folder
 * @return {string[]}
 */

var removeSubfolders = function (folder) {
	// folder.sort()
	// const ans = [folder[0]]
	// for (let i = 1; i < folder.length; ++i) {
	// 	const pre = ans[ans.length - 1].length
	// 	if (
	// 		!(
	// 			pre < folder[i].length &&
	// 			ans[ans.length - 1] === folder[i].substring(0, pre) &&
	// 			folder[i].charAt(pre) === '/'
	// 		)
	// 	) {
	// 		ans.push(folder[i])
	// 	}
	// }
	// return ans

	folder.sort()
	const res = [folder[0]]
	for (let i = 1; i < folder.length; i++) {
		const pre = res[res.length - 1]
		if (
			!(
				pre.length < folder[i].length &&
				folder[i].substring(0, pre.length) === pre &&
				folder[i].charAt(pre.length) === '/'
			)
		) {
			res.push(folder[i])
		}
	}
	return res
}
const folder = ['/a/b/c', '/a/b/ca', '/a/b/d']
console.log(removeSubfolders(folder))
