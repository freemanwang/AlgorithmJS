// 选择当前最大元素，和最后一个元素交换位置
function selectionSort(arr) {
    if (!arr || !arr.length) {
        return
    }

    len = arr.length - 1
    for (let i=len; i>= 0; i--) {
        maxIdx = 0
        // 优化方式在于内部这个选最值，目前是 n，使用堆排序可以优化到 logn 级别，总体是 nlogn
        for (let j=0; j<= i; j++) {
            if (arr[j] > arr[maxIdx]) {
                maxIdx = j
            }
        }
        swap(arr, maxIdx, i)
    }
}


function swap(arr, i, j) {
    tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}

arr = [3, 5, 2, 1, 8, 6, 19, 15]
selectionSort(arr)
console.log(arr)
