#
# @lc app=leetcode.cn id=225 lang=python3
#
# [225] 用队列实现栈
#

# @lc code=start
class MyStack:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.arr1 = []  # 保存数据
        self.arr2 = []  # 中转用
        self.size = 0   # 当前元素数


    def push(self, x: int) -> None:
        """
        Push element x onto stack.
        """
        self.arr1.append(x)
        self.size += 1
        


    def pop(self) -> int:
        """
        Removes the element on top of the stack and returns that element.
        """
        if self.size > 0:
            length = len(self.arr1)
            for index in range(length):
                if index < length - 1:
                    self.arr2.append(self.arr1.pop(0)) # 取arr1最前存入arr2
                else:
                    item = self.arr1.pop(0)
                    self.arr1, self.arr2 = self.arr2, []
                    self.size -= 1
                    return item
        return None


    def top(self) -> int:
        """
        Get the top element.
        """
        length = len(self.arr1)
        for index in range(length):
            if index < length - 1:
                self.arr2.append(self.arr1.pop(0)) # 取arr1最前存入arr2
            else:
                item = self.arr1.pop(0)
                self.arr2.append(item)
                self.arr1, self.arr2 = self.arr2, []
                return item
        return None

    def empty(self) -> bool:
        """
        Returns whether the stack is empty.
        """
        if self.size == 0:
            return True
        return False



# Your MyStack object will be instantiated and called as such:
# obj = MyStack()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.empty()
# @lc code=end

