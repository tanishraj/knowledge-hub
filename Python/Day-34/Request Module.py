"""
Request module:

"""

import requests
import json

# Define the base URL for JSONPlaceholder
BASE_URL = 'https://jsonplaceholder.typicode.com'

# --- GET Request (Reading data) ---
# Fetch a specific post by its ID (e.g., post ID 1)
def get_post(post_id):
    print(f"--- Fetching post {post_id} ---")
    url = f"{BASE_URL}/posts/{post_id}"
    
    try:
        response = requests.get(url, timeout=5)
        # Check if the request was successful
        response.raise_for_status() 
        
        # Parse JSON response
        data = response.json()
        print("Response received successfully!")
        print(f"Post Title: {data['title']}\n")
        
    except requests.exceptions.RequestException as e:
        print(f"An error occurred: {e}")

# --- POST Request (Creating data) ---
# Create a new post with a title and body
def create_post(title, body, user_id):
    print("--- Creating a new post ---")
    url = f"{BASE_URL}/posts"
    new_post_data = {
        'title': title,
        'body': body,
        'userId': user_id
    }
    
    try:
        response = requests.post(url, json=new_post_data, timeout=5)
        response.raise_for_status() 
        
        # The API confirms creation by returning the created data with a new ID
        data = response.json()
        print("Post created successfully!")
        print(f"New Post ID: {data['id']}")
        print(f"Full Response: {data}\n")
        
    except requests.exceptions.RequestException as e:
        print(f"An error occurred: {e}")

# --- Run the examples ---
if __name__ == "__main__":
    get_post(1)
    create_post("New API Test", "This is some test content.", 1)