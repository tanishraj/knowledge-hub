# Write a program that takes a name as input and prints a greeting message.

import time

timestamp = time.strftime("%H:%M:%S");

if timestamp < "12:00:00":
    print("Good morning!")
elif timestamp < "18:00:00":
    print("Good afternoon!")
else:
    print("Good evening!")