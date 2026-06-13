"""
Password Generator
Write a password generator in Python. 
Be creative with how you generate passwords - 
strong passwords have a mix of lowercase letters, 
uppercase letters, numbers, and symbols. 

The passwords should be random, generating a new password 
every time the user asks for a new password. Include 
your run-time code in a main method.

Extra:
Ask the user how strong they want their password to be. For weak passwords, pick a word or two from a list.
"""

import random

# All Available Names
# print(dir(random))

# For functions/methods with details, use help():
# help(random)

"""
Print only callable functions/methods

available_names = dir(random)
for name in available_names:
    item = getattr(random, name)
    if callable(item):
        print(name)
"""

"""
import string
print(string.digits) # 0123456789
print(string.ascii_letters) # abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
print(string.punctuation) # !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~

So, we have everything to form a password
"""


import string

def generatePassword(level):
    if level == 'weak':
        chars  = string.ascii_letters
        length = 6
        pass

    if level == 'medium':
        chars  = string.ascii_letters + string.digits
        length = 10
        pass

    if level == 'strong':
        chars  = string.ascii_letters + string.digits + string.punctuation
        length = 16
        pass

    password = ""

    for _ in range(length):
        password += random.choice(chars)

    return password

print(generatePassword('weak')) # vBARZF
print(generatePassword('medium')) # XLLTtR5pez
print(generatePassword('strong')) # _6{=)ymma/&CfgrT