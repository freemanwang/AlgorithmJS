arr = [2, 3, 1, 0, 2, 5, 3]
var solution = function (arr) {
    if (!arr || !arr.length)
        return null
    // start = new Date().getTime()

    hash = {}
    for (num of arr) {
        if (num in hash) { // 存在就累加
            hash[num] ++
        } else {
            hash[num] = 1 // 不存在就初始化为1
        }
    }

    res = []
    for (num in hash) {
        if (hash[num] > 1) {
            res.push(num)
        }
    }
    // console.log(`耗时 ${(new Date().getTime() - start)} ms`)
    return res
}
console.log(solution(arr))
console.log(solution(null))
console.log(solution([]))

// 抽屉法
var solution2 = function (arr) {
    if (!arr || !arr.length)
        return null

    function swap(idx1, idx2) {
        temp = arr[idx1]
        arr[idx1] = arr[idx2]
        arr[idx2] = temp
    }

    let idx = 0
    const res = []
    while (idx < arr.length) {
        if (arr[idx] != idx) {
            if (arr[idx] === arr[arr[idx]]) { // 该数字应在的位置已经有一个正确的数字了，所以重复
                res.push(arr[idx])
                idx ++
            }
            swap(idx, arr[idx])
            idx ++
        } else {
            idx ++
        }
    }
    return  res
}
console.log(solution2(arr))
