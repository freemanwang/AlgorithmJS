function bubbleSort1(arr) {
    if (!arr || !arr.length || arr.length === 1) {
        return arr
    }

    // 从右往左，最小放最左
    for (let i=arr.length; i>=1; i--) {
        for (let j=i; j>=1; j--) {
            if (arr[j-1] > arr[j]) {
                tmp = arr[j - 1]
                arr[j - 1] = arr[j]
                arr[j] = tmp
            }
        }
    }
}

function bubbleSort2(arr) {
    if (!arr || !arr.length || arr.length === 1) {
        return arr
    }

    // 优化1，加flag，flag没变化证明没有逆序对，可以提前退出
    // 从左往右遍历，最大的放到最后；右侧限界每次-1
    for (let i=arr.length - 1; i>0; i--) {
        flag = true // 本轮扫描是否已经有序
        for (let j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                flag = false
                tmp = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = tmp
            }
        }
        // 某一次从头到尾扫描如果没发现逆序，证明数组已有序
        if (flag) {
            break
        }
    }
}

function bubbleSort3(arr) {
    if (!arr || !arr.length || arr.length === 1) {
        return arr
    }

    // 优化2，记录最后一次交换的位置，因为后面没发生交换就证明后面都有序了
    for (let i=arr.length-1; i>0; i--) {
        let lastChangeIndex = 1 // 当未发生改变时， - 1 后为0，跳出循环
        for (let j=0; j<i; j++) {
            if (arr[j] > arr[j+1]) {
                tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
                lastChangeIndex = j+1
            }
        }
        i = lastChangeIndex
    }
}

arr1 = []
arr2 = []
arr3 = []
for (let i=0; i<10000; i++) {
    // tmp = Math.ceil(Math.random()*1000)
    tmp = i
    arr1.push(tmp)
    arr2.push(tmp)
    arr3.push(tmp)
}
function testFunctionTime(fn, param) {
    var start = new Date().getTime();
    if (fn) fn(param);
    var end = new Date().getTime();
    console.log(end-start);
}
console.log(arr1)
console.time(1)
bubbleSort1(arr1)
console.timeEnd(1)

console.time(2)
bubbleSort2(arr2)
console.timeEnd(2)

console.time(3)
bubbleSort3(arr3)
console.timeEnd(3)


// testFunctionTime(bubbleSort1, arr1)
// testFunctionTime(bubbleSort2, arr2)
// testFunctionTime(bubbleSort3, arr3)
// console.log(arr1)
