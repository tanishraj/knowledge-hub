class Library:
    def __init__(self, books):
        # We initialize using the setter logic below to process our input safely
        self._books = [] 
        self.books = books 
        
    def no_of_books(self):
        return len(self._books)
    
    # 1. The Getter: Note that it only takes 'self'
    @property
    def books(self):
        return self._books
    
    # 2. The Setter: Manages how new books are added
    @books.setter
    def books(self, new_books):
        # Pythonic way to check for string type
        if isinstance(new_books, str):
            self._books.append(new_books)
        else:
            # Assumes it's an iterable collection (list, tuple, set)
            self._books.extend(new_books)

# --- Execution ---

# 1. Passing a single string
library = Library("Book 1")
print(library.no_of_books())  # Output: 1
print(library.books)          # Output: ['Book 1']

# 2. Passing a list of strings
library2 = Library(["Book A", "Book B", "Book C"])
print(library2.no_of_books()) # Output: 3
print(library2.books)         # Output: ['Book A', 'Book B', 'Book C']