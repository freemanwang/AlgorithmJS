# coding=utf-8
import random

def quickSort(arr, left, right):
    if len(arr) <= 1:
        return arr
    if left < right:
        idx = getPivotIndex(arr, left, right)
        quickSort(arr, left, idx-1)
        quickSort(arr, idx+1, right)

def getPivotIndex(arr, left, right):
    # temp 记录分隔元素
    temp = arr[left]

    while left < right:
        while left < right and arr[right] >= temp:
            right -= 1
        # 退出循环即出现比 temp 小的，将其放到左边
        arr[left] = arr[right]
        while left < right and arr[left] <= temp:
            left += 1
        arr[right] = arr[left]
    
    # 退出循环时left=right，即此处为temp的最终位置
    arr[left] = temp
    # 返回分隔下标
    return left

arr = [2, 5, 3, 13, 8, 6]
quickSort(arr, 0, len(arr)-1)
print(arr)
    

def randomQuickSort(arr, left, right):
    if not arr or len(arr) <= 1:
        return
    idx = getRandomPivotIndex(arr, left, right)
    if idx > left:
        randomQuickSort(arr, left, idx-1)
    if idx < right:
        randomQuickSort(arr, idx+1, right)

def getRandomPivotIndex(arr, left, right):
    # temp 记录分隔元素
    idx = getRandomIndex(left, right)
    swap(arr, left, idx)
    temp = arr[left]

    while left < right:
        while left < right and arr[right] >= temp:
            right -= 1
        # 退出循环即出现比 temp 小的，将其放到左边
        arr[left] = arr[right]
        while left < right and arr[left] <= temp:
            left += 1
        arr[right] = arr[left]
    
    # 退出循环时left=right，即此处为temp的最终位置
    arr[left] = temp
    # 返回分隔下标
    return left




def getRandomIndex(left, right):
    return random.randint(left, right) # 生成 left <= N <= right 的随机数

def swap(arr, x, y):
    arr[x], arr[y] = arr[y], arr[x]

arr = [2, 5, 3, 13, 8, 6]
randomQuickSort(arr, 0, len(arr)-1)
print(arr)

# quickSort(arr, 0, len(arr)-1)

# print(arr)