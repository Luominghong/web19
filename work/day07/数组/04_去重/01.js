/**
 * 对象键值对方式去重
 */
function unique(arr) {
	// 临时对象 obj 用于存储键值对 {10: 10}
	var obj = {};
	for (var i = 0; i < arr.length; i++) {
		var item = arr[i];
		// 说明该元素已经存在
		if (typeof obj[item] !== "undefined") {
			// 将最后一个元素的值赋给当前元素
			arr[i] = arr[arr.length - 1];
			// 数组总长度-1
			arr.length--;
			// 从上一轮开始比较，因为当前元素赋了新值
			i--;
			continue;
		}
		// 元素不才在，则加入到 obj 对象中
		obj[item] = item;
		console.log(obj)
	}
	// 将临时用的 obj 对象清除
	obj = null;
	return arr;
}

var arr = [10, 11, 26, 11, 10, 5, 8, 8]
console.log(unique(arr))
