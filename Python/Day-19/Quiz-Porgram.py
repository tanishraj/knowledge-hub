"""
Quiz Program in Python
"""

questions_dictionary = [
    {
        "question": "Which river is the longest river in India and is also considered the most sacred by Hindus?",
        "options": ["Yamuna", "Ganges", "Brahmaputra", "Godavari"],
        "correct_answer_index": 2,
        "levels_amount": 1000
    },
    {
        "question": "Who was the leader of the Indian independence movement against British rule, famously known as 'Mahatma'?",
        "options": ["Subhas Chandra Bose", "Jawaharlal Nehru", "Mohandas Karamchand Gandhi", "Bhagat Singh"],
        "correct_answer_index": 3,
        "levels_amount": 2000
    },
    {
        "question": "Which famous white marble monument, located in Agra, was built by Emperor Shah Jahan in memory of his favorite wife?",
        "options": ["Qutub Minar", "Hawa Mahal", "Red Fort", "Taj Mahal"],
        "correct_answer_index": 4,
        "levels_amount": 3000
    },
    {
        "question": "What is the capital city of India?",
        "options": ["Mumbai", "New Delhi", "Kolkata", "Bengaluru"],
        "correct_answer_index": 2,
        "levels_amount": 4000
    },
    {
        "question": "What is the national animal of India?",
        "options": ["Asiatic Lion", "Indian Elephant", "Royal Bengal Tiger", "One-horned Rhinoceros"],
        "correct_answer_index": 3,
        "levels_amount": 5000
    }
]

total_winning_amount = 0;
right_answers_count = 0;

try:
    for index, item in enumerate(questions_dictionary, start=1):
        print(f"{index}. {item['question']}")
        formatted_options = [f"{i}. {opt}" for i, opt in enumerate(item["options"], start=1)]
        print(*formatted_options, sep="\n")

        
        user_input = input("Choose you answer:")

        if user_input == 'Q':
            print(f"You chose to exit the game.\nYour winning amount is: Rs.{total_winning_amount}")
        else:
            if item["correct_answer_index"] == int(user_input):
                print("Correct Answer");
                right_answers_count = right_answers_count + 1
                total_winning_amount = total_winning_amount + item["levels_amount"];
            else:
                print("Incorrect Answer");
                total_winning_amount = total_winning_amount - 1000

except Exception:
    print(f"Something went wrong.\nYour winning amount is: Rs.{total_winning_amount}")

finally:
    print(f"You got right for {right_answers_count}/{len(questions_dictionary)}.\nYour winning amount is: Rs.{total_winning_amount}")