import requests
from bs4 import BeautifulSoup as bs
import os

url = 'https://www.pexels.com/search/art/'

page = requests.get(url)
soup = bs(page.text, 'html.parser')

image_tags = soup.findAll('img')

if not os.path.exists('images'):
    os.makedirs('images')

os.chdir('images')

x = 0

for image in image_tags:
    try:
        url = ['src']
        response = requests.get(url)
        if response.status_code == 200:
            with open('images-' + str(x) + '.jpg', 'wb') as f:
                f.write(requests.get(url).content)
                f.close()
                x += 1
    except:
        pass
