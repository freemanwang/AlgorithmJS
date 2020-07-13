/**
有 N 件物品和一个容量是 V 的背包。每件物品只能使用一次。

第 i 件物品的体积是 vi，价值是 wi。

求解将哪些物品装入背包，可使这些物品的总体积不超过背包容量，且总价值最大。
输出最大价值。

输入格式
N，V 分别表示物品数量和背包容积；weights表示体积数组，values表示价值。

输出格式
输出一个整数，表示最大价值。

数据范围
0<N,V≤1000
0<vi,wi≤1000
输入样例
4, 5, [1, 2, 3, 4], [2, 4, 5, 5]
输出样例：
8 (选重量2，3的2个，价值8)
 */

N = 3
W = 4
weights = [2, 1, 3]
values = [4, 2, 3]

function bag0_1(N, W, weights, values) {
    if (N <= 0 || W <= 0) {
        return 0
    }

    // 二维数组记录状态
    dp = []
    for (let i=0; i<=N; i++){ // dp[0][...]表示没有物品，自然价值0；dp[...][0]表无容量，价值也是0
        dp.push([])
        for (let j=0; j<=W; j++) {
            dp[i].push(0)
        }
    }

    // console.log(dp)

    for (let i=1; i<=N; i++) { // i 代表在抉择第i个选不选，最多第N个,从第1个开始；但计算重量和价值时对应的 数组下标是 i-1
        for (let j=1; j<=W; j++) { // j代表当前负重有多少，从小往大带memo的推，最大不超过W
            if (j >= weights[i-1]) { // 当前容量大于目前便利的第i个元素需要的体积，因此需要从 取i 和 不取i 中取价值最大值
                dp[i][j] = Math.max(dp[i-1][j - weights[i-1]] + values[i-1], dp[i-1][j]) // 前者是 在i-1中给j-weights[i]的容积取最大值，后者是 在 i-1中给j的容积取最大值，取两者中较大的
            } else { // 当前遍历的第i个放不下，只能不选它
                dp[i][j] = dp[i-1][j]
            }
        }
    }
    // console.log(dp)
    return dp[N][W]
}
res = bag0_1(N, W, weights, values)
console.log(res)

function  bag0_1SpaceOptimize() {
    if (N <= 0 || W <= 0) {
        return 0
    }

    // 因为dp[i]只与dp[i-1]有关，可优化为一维数组，节约空间
    dp = [0]
    for (let i=0; i<N; i++) {
        dp.push(-Infinity)
    }

    for (let i=1; i<=N; i++) {
        for (let j=W; j>=weights[i-1]; j--) { // 0-1背包在容量这里就是从大往小遍历，切记
            dp[j] = Math.max(dp[j], dp[j-weights[i-1]] + values[i-1])

        }
    }
    console.log(dp)
    return dp[N]
}
res2 = bag0_1SpaceOptimize(N, W, weights, values)
console.log(res2)
