import os
import sys

os.remove(sys.argv[1])
os.remove('../central/uploads/'+sys.argv[1])