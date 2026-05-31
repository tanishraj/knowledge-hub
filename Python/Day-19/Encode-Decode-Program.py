# Write a python program to translate a message into secret code language. 
# Use the rules below to translate normal English into secret code language

# Coding:
# if the word contains atleast 3 characters, remove the first letter and 
# append it at the end now append three random characters at the starting and the end
# else:
#   simply reverse the string

# Decoding:
# if the word contains less than 3 characters, reverse it
# else:
#   remove 3 random characters from start and end. 
#   Now remove the last letter and append it at the beginning

import random;
import string;

def generate_random_chars(length = 3):
    """Utility function to generate random lowercase letters."""
    return "".join(random.choices(string.ascii_lowercase, k=length))

random_chars = generate_random_chars()
print(random_chars)

def encode_word(word):
    # Rule: if the word contains at least 3 characters
    if len(word) >= 3:
        # Remove the first letter and append it at the end
        modified_word = word[1:] + word[0]
        # Append three random characters at the starting and the end
        start_padding = generate_random_chars(3)
        end_padding = generate_random_chars(3)
        return start_padding + modified_word + end_padding
    else:
        # Else: simply reverse the string
        return word[::-1]
    

def decode_word(word):
    # Rule: if the word contains less than 3 characters
    if len(word) < 3:
        # Reverse it
        return word[::-1]
    else:
        # Else: remove 3 random characters from start and end
        trimmed_word = word[3:-3]
        # Now remove the last letter and place it back at the beginning
        # (This reverses the coding process of moving the first letter to the end)
        return trimmed_word[-1] + trimmed_word[:-1]
    

def process_message(message, mode):
    words = message.split()
    processed_words = []
    
    for word in words:
        if mode == 'encode':
            processed_words.append(encode_word(word))
        elif mode == 'decode':
            processed_words.append(decode_word(word))
            
    return ' '.join(processed_words)


def main():
    print("--- Secret Code Language Translator ---")
    user_choice = input("Type 'encode' to encrypt or 'decode' to decrypt: ").strip().lower()

    if user_choice not in ['encode', 'decode']:
        print("Invalid choice! Please restart and choose 'encode' or 'decode'.")
        return
    
    user_message = input("Enter your message: ").strip()

    if user_choice == 'encode':
        coded_message = process_message(user_message, 'encode')
        print(f"\nEncoded Secret Message:\n{coded_message}")
    else:
        decoded_message = process_message(user_message, 'decode')
        print(f"\nDecoded Original Message:\n{decoded_message}")

if __name__ == "__main__":
    main()