// 插入排序的时间复杂度和逆序对数量成正相关
// 因为逆序对意味着后移数量；逆序的数组排序时间会需要 n^2
// 插入排序的时间复杂度
// 最好  n        最坏  n^2       平均  n^2
// 空间复杂度为 1，原地更改，只用了个 tmp 临时变量

function insertionSort(arr) {
    if (!arr || !arr.length || arr.length === 1) {
        return
    }

    for (let i = 1; i<arr.length; i++) { // 从1开始往后每次挑1个插入到有序序列，初始默认 0 为有序序列
        for (let j=i; i>0; j--) { // 当前的 i 是需要插入 0-(i-1) 这段已经有序的区间
            if (arr[j] < arr[j-1]) { // 如果arr[i]比前一个小往和前一个交换
                temp = arr[j]
                arr[j] = arr[j - 1]
                arr[j-1] = temp
            } else {
                break // 挪不动证明已经到了 arr[i] 该在的位置了，前面是有序的序列，不需要比较，退出本次循环
            }
        }
    }
}

function insertionSort1(arr) { // 优化方案1，不交换，先整体后移1位，然后插入，这样减少交换的操作，交换的3次降为挪动的1次
    if (!arr || arr.length <= 1) {
        return arr
    }

    for (let i=0; i<arr.length; i++) {
        for (let j=i+1; i< arr.length; i++) {

        }
    }

    for (let i=1; i<arr.length; i++) { // 从1开始向后扫描
        const tmp = arr[i] // 储存当前遍历的数
        for (j=i; j>0 && arr[j-1] > tmp; j--) { // 在找到 arr[i] 正确位置前，比它大的数字后移一位
            arr[j] = arr[j-1]
        }
        arr[j] = tmp
    }
}

/**
 * 在寻找插入地址时使用二分查找进行搜索
 * @param arr
 * @constructor
 */
function InsertionSort2(arr) {
    if (!arr || arr.length <= 1) {
        return arr
    }

    function binarySearch(idx) { // [0, idx) 是有序的，arr[idx]是待插入元素，求它该插入的下标
        start = 0
        end = idx  //待插入数字之前的都是有序的
        while (start < end) {
            let mid = Math.floor((start + end) / 2)
            if (arr[idx] >= arr[mid]) {// >= 是因为如果等于，将相同的数放到后面，即减少了移动次数又保证了稳定性
                start = mid + 1
            } else {
                end = mid
            }
        }
        return start // 此时start == end，也就是i要插入的位置
    }

    for (let i=1; i<arr.length; i++) {
        let idx = binarySearch(i)
        console.log(idx, arr[i])
        let temp = arr[i]
        for (let j=i; j>=idx; j--) {
            arr[j] = arr[j-1]
        }
        arr[idx] = temp
    }

}



arr1 = [2, 4, 1, 0, 3, 7, 5, 8, 6]
arr2 = [2, 4, 1, 0, 3, 7, 5, 8, 6]
arr3 = [2, 4, 1, 0, 3, 7, 5, 8, 6]

// console.time(1)
// insertionSort(arr1)
// console.timeEnd(1) // 1: 0.139ms
// console.log(arr1)

// console.time(2)
// insertionSort1(arr2)
// console.timeEnd(2) // 2: 0.073ms；的确更节约时间
// console.log(arr1)


// console.log(arr1)

InsertionSort2(arr3)
console.log(arr3)
