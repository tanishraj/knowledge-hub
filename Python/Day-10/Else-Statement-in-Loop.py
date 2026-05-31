"""
Else Statement in For Loop
As we have learnt before, the else statement is used along with the if statement.
Python allows the else keyword to be used with the for and while loop too.
The else block appears after the body of the loop. The statement is the else block
will be executed after all the iterations are completed. The program exits the loop
only after the else statement is executed.
"""
# Example 1:
for i in []:
    print(i);

else:
    print("Sorry no i");


# Example 2:
for i in range(5):
    print(i);

else:
    print("Sorry no i");

# Example 3:
i = 0;
while(i<5):
    print(i)
    i=i+1;

else:
    print("Sorry no i");


# Example 4:
for i in range(5):
    print(i);
    if(i == 4):
        break;

else:
    print("Sorry no i"); # will not print this
# else statement executed only when loop exectutes normally without break