"""
Reverse Word Order
Write a program (using functions!) that asks the user for a long 
string containing multiple words. Print back to the user the same string, 
except with the words in backwards order. For example, say I type the string:

 My name is Michele
Then I would see the string:
  Michele is name My
shown back to me.
"""


def reverse_word_order(text):
    reversed_order = ""
    last_space_index = 0
    
    for index,char in enumerate(text):
        # print(last_space_index, index, char)
        if char == " ":
            text_order = text[last_space_index:index]
            # print("TExt order", text_order)
            reversed_order = text_order + " " + reversed_order
            last_space_index = index + 1
        
    last_word = text[last_space_index:]
    # print("TExt order", last_word)
    reversed_order = last_word + " " + reversed_order
    
    return reversed_order

text = "My name is Michele"
print(f"Output: {reverse_word_order(text)}")



# Better Solution using split and join
def reverse_word_order(text):
    return " ".join(text.split(" ")[::-1])

text = "My name is Michele"
print(f"Output: {reverse_word_order(text)}")


# Single line solution using slicing
text = "My name is Michele"
print(f"Output: {' '.join(text.split(' ')[::-1])}")