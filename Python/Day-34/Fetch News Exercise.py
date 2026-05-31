"""
News API Exercise:
Use the newsApi and the requests module to fetch the daily news
related to different topics

goto: newsapi.org and explore the options

Create interaction with numbers for different categories on news.
For example: Press 1 for Sports News 2 for weather news etc....
"""

import requests

# Constants
API_KEY = "c1c444e86c874eeaa97693c233564a48"  # <-- Replace with your actual News API key
BASE_URL = "https://newsapi.org/v2/top-headlines"

# Category mapping matching the options provided by News API
CATEGORIES = {
    "1": {"name": "Business", "query_param": "business"},
    "2": {"name": "Entertainment", "query_param": "entertainment"},
    "3": {"name": "General/Current Events", "query_param": "general"},
    "4": {"name": "Health", "query_param": "health"},
    "5": {"name": "Science", "query_param": "science"},
    "6": {"name": "Sports", "query_param": "sports"},
    "7": {"name": "Technology", "query_param": "technology"}
}

def display_menu():
    print("\n" + "="*35)
    print("      DAILY NEWS HEADLINES")
    print("="*35)
    for key, info in CATEGORIES.items():
        print(f" Press {key} for {info['name']} News")
    print(" Press Q to Quit")
    print("="*35)

def fetch_news(category_param, category_name):
    print(f"\nFetching the latest headlines for {category_name}...")
    
    # Define query parameters required by News API
    # We restrict language to English ('en') for consistent readability
    params = {
        "category": category_param,
        "language": "en",
        "pageSize": 5,          # Limit results to top 5 articles
        "apiKey": API_KEY
    }
    
    try:
        response = requests.get(BASE_URL, params=params, timeout=5)
        
        # Will raise an exception for 4xx or 5xx status codes (e.g., invalid API key)
        response.raise_for_status() 
        
        data = response.json()
        articles = data.get("articles", [])
        
        if not articles:
            print("No articles found for this category right now.")
            return

        print(f"\n--- Top 5 {category_name.upper()} Headlines ---")
        for index, article in enumerate(articles, start=1):
            title = article.get("title", "No Title Available")
            source = article.get("source", {}).get("name", "Unknown Source")
            
            print(f"\n[{index}] {title}")
            print(f"    Source: {source}")
            
    except requests.exceptions.HTTPError as http_err:
        if response.status_code == 401:
            print("❌ Error: Invalid API key. Please check your News API key configuration.")
        else:
            print(f"❌ HTTP Error occurred: {http_err}")
    except requests.exceptions.RequestException as e:
        print(f"❌ Network connection issue: {e}")

def main():
    # Defensive check for the placeholder string
    if API_KEY == "YOUR_NEWS_API_KEY_HERE":
        print("⚠️ Setup Required: Please replace the placeholder API_KEY variable with your key from newsapi.org.")
        return

    while True:
        display_menu()
        choice = input("Enter your choice: ").strip()
        
        if choice.lower() == 'q':
            print("\nThank you for using Daily News Headlines. Goodbye!")
            break
            
        if choice in CATEGORIES:
            selected = CATEGORIES[choice]
            fetch_news(selected["query_param"], selected["name"])
            
            # Pause to let the user read before displaying the menu again
            input("\nPress Enter to return to the main menu...")
        else:
            print("\n❌ Invalid option. Please select a valid number from the menu or 'Q' to quit.")

if __name__ == "__main__":
    main()