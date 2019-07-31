/**
 * 快速排序
 * 	1. 先找到中间项
 *  2. 剩余项的每一个值和中间项进行比较，
 * 		小的放到中间项的左边（新数组）
 * 		大的放到中间项的右边（新数组）
 *  3. 新数组执行上面的第1，2步（递归），直到只剩下一个元素
 */
function quickSort(arr) {
	// 如果传递进来的数组只有一项或是空的，不再进行拆分，直接返回
	if(arr.length <= 1) {
		return arr;
	}
	
	// 获取中间项索引
	var middleIndex = Math.floor(arr.length / 2);
	// 获取中间项的值，并在原有数组中删除
	// splice 返回一个数组，这个数组中包含了删除的内容
	var middleValue = arr.splice(middleIndex, 1)[0];
	// 用剩余数组中的每一项和中间项比较，比中间项小的放在左边，大大放在右边（左右两边都是新数组）
	var arrLeft = [];
	var arrRight = [];
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] <= middleValue){
			arrLeft.push(arr[i]);
		}else if(arr[i] > middleValue){
			arrRight.push(arr[i]);
		}
	}
	
	// 递归调用并返回
	return quickSort(arrLeft).concat(middleValue, quickSort(arrRight));
}

var arr = [10, 11, 13, 11, 12, 11, 14]
console.log(quickSort(arr))
