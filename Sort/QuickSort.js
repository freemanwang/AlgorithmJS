function partition(arr, left, right) {
    if (!arr || arr.length <= 1 || left >= right) {
        return arr
    }

    // 在 0 ～ length-1 之前取随机数为pivot
    const index = getPivotIndex(arr.length)
    const pivot = arr[index]

    let i = left
    let j = right

    while (i < j) {

        // 跳出循环的条件为：1.右侧出现>pivot的数；2.右侧走到左侧均有序
        while (i < j && arr[j] > pivot) {
            j--
        }
        // 如果跳出条件为1
        if (i < j) {
            swap(arr[i])
        }
    }
}

function swap(x, y) {
    const tmp = x
    x = y
    y = tmp
}

function getPivotIndex(length) {
    return Math.ceil(Math.random() * length)
}
