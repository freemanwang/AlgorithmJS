arr = [
    [1, 2, 8, 9],
    [2, 4, 9, 12],
    [4, 7, 10, 13],
    [6, 8, 11, 15]
]

var solution = function (arr, number) {
    if (!arr || !arr.length || !arr[0].length)
        return false

    /*
    * 从左下角num开始比
    * 如果 number > num, 排除num所在的列，col ++
    * 如果 number < num, 排除num所在的行，row --
    * */
    row = arr.length - 1
    col = 0
    ROW = -1 // 最低就是0行，row > ROW
    COL = arr[0].length // 总共有多少列，是col的上限，col < COL

    while (row > ROW && col < COL) {
        if (arr[row][col] === number) {
            return true
        } else  if (arr[row][col] < number) {
            col ++
        } else {
            row --
        }
    }
    console.log(row, col)
    return false
}
console.log(solution(arr, 7))
