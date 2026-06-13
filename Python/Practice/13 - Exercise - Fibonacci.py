"""
Fibonacci
Write a program that asks the user how many Fibonnaci numbers 
to generate and then generates them. Take this opportunity to 
think about how you can use functions. Make sure to ask the 
user to enter the number of numbers in the sequence to generate.
(Hint: The Fibonnaci seqence is a sequence of numbers where the 
next number in the sequence is the sum of the previous two numbers 
in the sequence. The sequence looks like this: 1, 1, 2, 3, 5, 8, 13, …)
"""

def fibonacci(n):
    if n <= 0:
        return []
    elif n == 1:
        return [1]
    elif n == 2:
        return [1, 1]
    
    sequence = [1, 1]
    for i in range(2, n):
        next_number = sequence[i-1] + sequence[i-2]
        sequence.append(next_number)
    
    return sequence

num = int(input("How many Fibonacci numbers to generate? "))
result = fibonacci(num)
print(result)