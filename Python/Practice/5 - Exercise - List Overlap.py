"""
List Overlap:
Take two lists, say for example these two:

  a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
  b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
and write a program that returns a list that contains only the elements 
that are common between the lists (without duplicates). Make sure 
your program works on two lists of different sizes.

Extras:

Randomly generate two lists to test this
Write this in one line of Python (don’t worry if you can’t 
figure this out at this point - we’ll get to it soon)
"""

# Naive Approach
def compare_duplicates(list1, list2):
    overlapping_list = []
    for list1_item in list1:
        for list2_item in list2:
            if list1_item == list2_item:
                if len(overlapping_list) == 0:
                    overlapping_list.append(list1_item)
                duplicate = False
                for overlapping_item in overlapping_list:
                    if(overlapping_item == list1_item):
                        duplicate = True
                    else:
                        duplicate = False
                
                if(duplicate == False):
                    overlapping_list.append(list1_item)
    return overlapping_list

a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
print("Output-1:", compare_duplicates(a,b))


# Slightly Better Approach
def compare_duplicates_better(list1, list2):
    overlapping_list = []
    for list1_item in list1:
        for list2_item in list2:
            if list1_item == list2_item and list1_item not in overlapping_list:
                overlapping_list.append(list1_item)
                
    return overlapping_list

a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
print("Output-2:", compare_duplicates_better(a,b))



# Even better approach
def compare_duplicates_better(list1, list2):
    return list(dict.fromkeys([list1_item for list1_item in list1 if list1_item in list2 ]))

a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
print("Output-3:", compare_duplicates_better(a,b))



# Finally, one liner
a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

print(f"Output-4: {list(dict.fromkeys([list1_item for list1_item in a if list1_item in b]))}")