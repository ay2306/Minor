import sys
filename = sys.argv[1]
sys.stdout = open(filename,'w')
import random

fileSize = int(sys.argv[2])

arr = []

for i in range(10):
    arr.append(chr(ord('0')+i))
for i in range(26):
    arr.append(chr(ord('a')+i))
    arr.append(chr(ord('A')+i))

while fileSize > 0:
    print(arr[random.randint(0,len(arr)-1)],end='')
    fileSize -= 1