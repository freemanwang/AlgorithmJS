# codeing=utf-8

# 核心思想 ： 切分，合并，合并后为已排序数组，继续合并
def mergeSort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    a = mergeSort(arr[:mid])
    b = mergeSort(arr[mid:])
    return mergeArray(a, b)


def mergeArray(a, b):
    i, j = 0, 0
    temp = []
    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            temp.append(a[i])
            i += 1
        else:
            temp.append(b[j])
            j += 1
    temp.extend(a[i:])
    temp.extend(b[j:])
    return temp
    

arr = [2, 5, 3, 13, 8, 6]
arr2 = mergeSort(arr)
# print(arr)
print(arr2)



    