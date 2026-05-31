"""
File Handling in Python:
File handling allows your program to read from files and write data to files on computer.

Before you start performing any operation on a file, we must open it first. Python provides
open() function to open a file. It takes 2 args, name of the file and mode you want to open 
the file in.

Modes:
r: read mode (default)
w: write mode
a: append mode
x: create mode
t: text mode (default)
+: read and write mode
"""

# Reading the content of a file
f = open('Day-22/sample-file.txt', 'r');
text = f.read();
print(text); # This is a sample file content.
f.close();

# Write content to a file
f = open('Day-22/sample-file.txt', 'w');
text = f.write("This is updated file content.");
f.close();

# Reading again
f = open('Day-22/sample-file.txt', 'r');
text = f.read();
print(text); # This is a sample file content.
f.close();


# with statemnt: It autmatically close the file, 
# we dont have to explicitly write the close

# Reading again
with open('Day-22/sample-file.txt', 'r') as f:
    text = f.read();
    print(text); # This is a sample file content.
    # file is automatically closed here


# File Methods

# readline() - Reads the first line of content
with open('Day-22/sample-multi-line-file.txt', 'r') as f:
    print(f.readline()) # Line #1. This is updated file content.


# readlines() - Reads all the lines of content
with open('Day-22/sample-multi-line-file.txt', 'r') as f:
    print(f.readlines()) 
    # Output: ['Line #1. This is updated file content.\n', 'Line #2. This is the second line content.']


# write(): write the given content to a file
with open('Day-22/sample-write-file.txt', 'w') as fw:
    fw.write("Line #1. This is sample file content.")

with open('Day-22/sample-write-file.txt', 'r') as fr:
    print(fr.read())


# writelines(): write the given content to a file
with open('Day-22/sample-write-file.txt', 'w') as fw:
    fw.writelines(["Line #1. This is sample file content.\n", "Line #2. This is updated file content."])

with open('Day-22/sample-write-file.txt', 'r') as fr:
    print(fr.read())
    

