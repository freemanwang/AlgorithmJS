str = 'we are happy'

var solution = function (str) {
    if (!str || !str.length)
        return

    // arr = []
    count = 0
    for (let i=0; i<str.length; i++) {
        // arr.push(str[i])
        if (str[i] === ' ') {
            count ++
        }
    }
    // console.log(arr)
    len = str.length - 1
    realLen = len + 2 * count
    res = []
    while (len >= 0 && realLen >= len) {
        if (str[len] === ' ') {
            res[realLen --] = '0'
            res[realLen --] = '2'
            res[realLen --] = '%'
        } else {
            res[realLen --] = str[len]
        }
        len --
    }
    str2 = res.join('')
    return str2
}


console.log(solution(str))


/*
* A1   A2   两个以排序的数组，A1末尾有足够的空间村A2，要求把A2合到A1
* */
a1 = [-3, -2, -1, 0, 2, 4, 6, 8, 10]
a2 = [-5, -4, 1, 3, 5, 7, 9, 11]

var solution2 = function (a1, a2) {
    if (!a2 || !a2.length)
        return a1

    len1 = a1.length - 1
    len2 = a2.length - 1
    len3 = len1 + len2 + 1

    /*
    * a2没复制完，就逐一比对
    * */
    while (len3 >= 0 && len1 >=0 && len2 >= 0) {
        if (a1[len1] > a2[len2]) {
            a1[len3 --] = a1[len1 --]
        } else {
            a1[len3 --] = a2[len2 --]
        }
    }
    while (len2 >= 0) {
        a1[len3 --] = a2[len2 --]
    }
    console.log(a1)
}
console.log(solution2(a1, a2))
