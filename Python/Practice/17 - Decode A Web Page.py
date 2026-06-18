"""
Decode A Web Page
Use the BeautifulSoup and requests Python packages to print 
out a list of all the article titles on the New York Times homepage.
"""

import re
import requests
from bs4 import BeautifulSoup

base_url = 'https://www.cnet.com/tech/mobile/'

# 1. Add a User-Agent header so the website thinks a real browser is visiting
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

# 2. Pass the headers into the request
response = requests.get(base_url, headers=headers)

soup = BeautifulSoup(response.content, 'html.parser')
stories = soup.find_all('h3', class_=re.compile("^c-storiesNeonLatest_hed"))


for index,story in enumerate(stories):
    print(f"{index+1}. {story.text.strip()}")