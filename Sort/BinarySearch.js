/**
 *
 * @param arr 查找数组，需要有序
 */
function binarySearch(arr, num) {
    if (!arr || !arr.length) {
        return -1
    }
    let idx = search(arr, num, 0, arr.length)
    return idx
}

function search(arr, num, start, end) {
    if (start === end) { // 重合了都没找到，证明没有，不加退出条件会无限迭代，然后爆炸
        return -1
    }
    /**
     *  mid > num:  在 [min+1, end)
     *  mid < num:  在 [start, mid)
     *  mid == num：返回mid
     */

    mid = Math.floor((start + end) / 2 )
    if (arr[mid] < num) {
        return search(arr, num, mid + 1, end)
    } else if (arr[mid] > num) {
        return search(arr, num, start, mid)
    } else {
        return mid
    }
    return -1
}
arr = [3, 5, 7, 9, 11, 28]
console.log(binarySearch(arr, 11))
console.log(binarySearch(arr, 13))
