/**
 * 插入排序
 */
function insertSort(arr){
	// 排序后的数组
	var activeArr = [];
	// 先获取第一个元素，放入到排序的数组
	activeArr.push(arr[0]);
	
	for(var i = 1; i < arr.length; i++){
		var current = arr[i];
		// 拿当前的项和 activeArr 中的元素进行比较，从后往前
		for(var j = activeArr.length - 1; j >= 0; j--){
			// 若当前项大，则插入到后面
			if(current >= activeArr[j]) {
				activeArr.splice(j+1, 0, current);
				break;
			}
			// 若比 sorted 中的第一项的值还要小，则插入到最前面
			if(j === 0){
				activeArr.unshift(current);
			}
		}
	}
	
	return activeArr;
}

var arr = [10, 11, 13, 11, 12, 11, 14]
// [10]
// [10,11]
// [10,11,13]
// [10,11,11,13]
console.log(insertSort(arr))
