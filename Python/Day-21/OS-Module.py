"""
Python OS Module:
OS module provides a way to interact with the operating system.

Why use OS?
1) interact with files and folders
2) work with paths
3) run system commands
4) make cross-platform programs
"""

import os;

# Example 1: os.name
print(os.name) # posix

# Example 2: os.getcwd()
working_dir = os.getcwd()
print(working_dir) # /Users/tanish/Tanish/Python

# Example 3: os.mkdir()
if not os.path.exists("Day-21/data"):
    os.mkdir("Day-21/data")

# Example 4: 
print(os.listdir("Day-21")) # ['OS-Module.py', 'data']

# Example 5:
if not os.path.exists("Day-21/data/newDir"):
    os.makedirs("Day-21/data/newDir") # Creates nested directories

# Example 6:
if os.path.exists("Day-21/data/newDir"):
    os.rmdir("Day-21/data/newDir") # Removes directory

# Example 7:
if os.path.exists("Day-21/data/test-file.py"):
    os.remove("Day-21/data/test-file.py") # Removes file

# Example 8:
if not os.path.exists("Day-21/data/os_created_file.txt"):
    filename = "Day-21/data/os_created_file.txt"
    flags = os.O_CREAT | os.O_WRONLY
    file_descriptor = os.open(filename, flags)
    os.close(file_descriptor)
    print(f"File '{filename}' created successfully.") # File 'Day-21/data/os_created_file.txt' created successfully.
    # Rename it once created
    os.rename("Day-21/data/os_created_file.txt", "Day-21/data/os_created_file_updated.txt");
    print("File name updated"); # File name updated