"""
Python import:
importing in python is a process of loading code from a python module into
the current script. This allows you to ue the functions and variables defined
in the module in your current script, as well as any additional modules that the 
imported module can depend on.

To import a module in Python, you use the import statement followed by the name of
the module. For example, to import the math module, which contains a variety of
mathematical functions, you would use the following statement...

import math

Once the module is imported, you can use any of the functions and variable defined 
in the module by using the dot notation. 
"""

import math;

# Example:
result = math.sqrt(9);
print(result) # 3.0


"""
from keyword:
you can also import specific functions or variables from a module using the from keyword.
"""
from math import sqrt;
result = sqrt(9);
print(result) # 3.0