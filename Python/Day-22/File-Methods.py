"""
seek and tell method

1. seek(): to move te file pointer to a specific position
Syntax: 
file.seek(offset, whence)
offset: the number of bytes to move
whence: reference point from where offset is measured 
whence possible value: [0,1,2]
0 -> begining of the file
1 -> current position of the pointer
2 -> end of the file (used with rb mode or with r mode to move the cursor at the end)


tell(): get the current position of file pointer

truncate: truncate the content beyond the given size
"""

with open("Day-22/sample-file.txt", 'r+') as fr:
    print(f"Before read tell(): {fr.tell()}") # Before read tell(): 0
    print(f"initial content: {fr.read()}") # initial content: This is updated file content.
    
    print(f"After read tell(): {fr.tell()}") # After read tell(): 29

    # read 6 chars from the 8th position of chars content
    fr.seek(8, 0)
    print(f"After seek with whence 0: {fr.read(6)}") # After seek with whence 0: update

    print(f"After seek and read 6 chars tell(): {fr.tell()}") # After seek and read 6 chars tell(): 14

    fr.truncate(10)
    fr.seek(0)
    print(f"After truncate: {fr.read()}") # After truncate: This is up
