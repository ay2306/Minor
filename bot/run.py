import sys
filename = sys.argv[1]
sys.stdout = open(filename,'w')
import random

fileSize = int(sys.argv[2])

while fileSize > 0:
    print('A',end='')
    fileSize -= 1