"""
Rock Paper Scissors:
Make a two-player Rock-Paper-Scissors game. 
(Hint: Ask for player plays (using input), compare them, 
print out a message of congratulations to the winner, and ask if 
the players want to start a new game)

Remember the rules:
Rock beats scissors
Scissors beats paper
Paper beats rock
"""

def play():
    while True:
        player1 = input("Player 1, enter your move (rock, paper, scissors): ").lower()
        player2 = input("Player 2, enter your move (rock, paper, scissors): ").lower()

        if player1 == player2:
            print("It's a tie!")
        elif (player1 == "rock" and player2 == "scissors") or \
             (player1 == "scissors" and player2 == "paper") or \
             (player1 == "paper" and player2 == "rock"):
            print("Player 1 wins!")
        else:
            print("Player 2 wins!")

        play_again = input("Do you want to play again? (yes/no): ").lower()
        if play_again != "yes":
            break


# Start the game
play()



# Using Classes
class RockPaperScissors:
    def __init__(self):
        self.moves = ["rock", "paper", "scissors"]
    
    def get_player_move(self, player):
        move = input(f"{player}, enter your moved {self.moves}: ").lower()
        while move not in self.moves:
            print("Invalid move. Please try again.")
            move = input(f"{player}, enter your move {self.moves}: ").lower()
        return move
    
    def determine_winner(self, move1, move2):
        if move1 == move2:
            return "It's a tie!"
        elif (move1 == "rock" and move2 == "scissors") or \
             (move1 == "scissors" and move2 == "paper") or \
             (move1 == "paper" and move2 == "rock"):
            return "Player 1 wins!"
        else:
            return "Player 2 wins!"

    def play(self):
        while True:
            move1 = self.get_player_move("Player 1")
            move2 = self.get_player_move("Player 2")
            result = self.determine_winner(move1, move2)
            print(result)

            play_again = input("Do you want to play again? (yes/no): ").lower()
            if play_again != "yes":
                break
# Start the game
game = RockPaperScissors()
game.play()