"""
Cows and Bulls:
Create a program that will play the “cows and bulls” game with the user. 

The game works like this:
Randomly generate a 4-digit number. Ask the user to guess a 4-digit number. 
For every digit that the user guessed correctly in the correct place, 
they have a “cow”. For every digit the user guessed correctly in the 
wrong place is a “bull.” Every time the user makes a guess, tell them how 
many “cows” and “bulls” they have. Once the user guesses the correct number, 
the game is over. Keep track of the number of guesses the user makes throughout 
the game and tell the user at the end.
"""
import string
import random

def generate_secret_number():
    digits = list(string.digits)
    random.shuffle(digits)

    if digits[0] == 0:
        digits[0], digits[4] = digits[4], digits[0]
    
    return "".join(digits[:4])

def get_cows_and_bulls(secret, guess):
    cows = 0
    bulls = 0

    for i in range(4):
        if secret[i] == guess[i]:
            cows += 1
        elif guess[i] in secret:
            bulls += 1
    return cows, bulls

def play_game():
    print("========= Welcome to cows and bulls game =========")
    print("Try to guess a 4 unique digit number")

    secret = generate_secret_number()
    attempts = 0

    while True:
        guess = input("Enter your 4 digits guess: ").strip()
        attempts += 1

        if(len(guess) != 4 or not guess.isdigit()):
            print("Invalid input. Please enter exactly 4 digits.")
            continue

        if(len(set(guess)) != 4):
            print("Invalid input. All 4 digits must be unique.")
            continue

        cows, bulls = get_cows_and_bulls(secret, guess)

        if bulls == 4:
            print(f"You WON 🎉. You guessed the secret number {secret} in {attempts} attempts")
        else:
            print(f"🐂 Bulls: {bulls} | 🐄 Cows: {cows}")


if(__name__ == "__main__"):
    play_game()
