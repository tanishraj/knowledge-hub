"""
Write a program to pronounce list of names using win32 API. 
if you are fiven a list as follows...

list = ["Tanish", "Velen"]

Output:
Shoutout to Tanish
Shoutout to Velen
"""

import subprocess

names = ["Tanish", "Velen"]

for name in names:
    message = f"Shoutout to {name}"
    print(message)
    
    # Pass the command as a list of arguments for security and cleanliness
    subprocess.run(["say", message])