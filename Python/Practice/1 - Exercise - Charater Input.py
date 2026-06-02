"""
Exercise 1:
Create a program that asks the user to enter their name and their age. 
Print out a message addressed to them that tells them the year that they 
will turn 100 years old. Note: for this exercise, the expectation is that 
you explicitly write out the year (and therefore be out of date the next year)
"""
from datetime import date

def calculate_year_to_complete_100_years(age):
    current_year = date.today().year
    return current_year + 100 - age


name = input("What is your name: ")
age = int(input("How old are you: "))
print(f"Hey {name}!! you will complete 100 years in {calculate_year_to_complete_100_years(age)}")
