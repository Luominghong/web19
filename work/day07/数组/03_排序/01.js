/**
 * 冒泡排序
 * @param
 * 	arr: [array] 需要排序的数组
 * @return
 * 	[array] 实现排序之后的数组
 */
function bubbleSort (arr) {
	// 轮数
	for (var i = 0; i < arr.length - 1; i++) { 
		// 每轮比较次数
		for (var j = 0; j < arr.length - 1 - i; j++) {
			// 升序：和后面一个数进行比较, 大于则进行交换
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
			// 降序
// 			if (arr[j] < arr[j + 1]) {
// 				temp = arr[j]
// 				arr[j] = arr[j + 1]
// 				arr[j + 1] = temp
// 			}
		}
	}
	
	return arr;
}

var arr = [10, 11, 13, 11, 12, 11, 14]
console.log(bubbleSort(arr));

/*
 * 冒泡排序
 * 原理：
 * 	当前数和下一个数进行比较
 * 
 * 比较轮数 arr.length-1
 * 第一轮：最大的数放置在末尾
 * 	10 15 [10, 15, 12, 18, 16, 14]
 *  15 12 [10, 12, 15, 18, 16, 14]
 *  15 18 [10, 12, 15, 18, 16, 14]
 *  18 16 [10, 12, 15, 16, 18, 14]
 *  18 14 [10, 12, 15, 16, 14, 18]
 * 第二轮：
 * 	...
 * 
 * 每轮比较次数 arr.length-1-当前执行的次数(从0开始)
 * 第一轮：5次 6-1-0
 * 第二轮：4次 6-1-1
 * ...
 * 
 * 两个数交换
 * a = 12
 * b = 13
 * 交换？
 * 	1. 临时变量
 * 	c = a
 *  a = b
 *  b = c
 *  2. 相加(不使用临时变量)
 *  a = a + b => 25
 *  b = a - b => 12
 *  a = a - b => 13
 */