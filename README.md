# Fast Food Face-Off (Work in Progress...)

You're given two random fast food menu items to choose from. Which one do you think has the most calories? Each correct answer gets you one point. Pick the wrong answer then it's GAME OVER. Try to make your way to the leaderboard!

I created three webscrapers to gather data on fast food restaurants and their foods. One scraper was used to get the company's logo, the second scraper was to scrape the food name and number of calories, and the last scraper was to match that food's name with their image. I excluded all foods that were under 400 calories. Foods with a range of calories (e.g. 250-700 calories) were replaced with their average number. There are a total of 423 food items from 9 restaurants.

### Installing

Your computer should have the latest version of [Ruby](https://www.ruby-lang.org/en/documentation/installation/) installed. Then run the following commands:

Run Bundler
```
bundle install
```

Start the backend server

```
rails s
```

Change directory to /frontend

```
cd frontend/
```

Start the frontend server

```
npm start
```

[optional] Run the web scraper from the root folder
```
rails db:seed
```

The scraped data can be found [here](https://api.jsonbin.io/b/5e0bbfcf02ce5777b8b583e6) and [here](https://api.jsonbin.io/b/5e0bbf5f02ce5777b8b583b6).

## Built With

* [Ruby](http://www.yahoo.com) - Backend language
* [Ruby on Rails](https://rubyonrails.org/) - Ruby web application framework
* [React](https://reactjs.org/) - Javascript frontend framework
* [Tailwind CSS](https://www.tailwindcss.com) - CSS framework
* [Nokogiri](https://github.com/sparklemotion/nokogiri) - HTML parser
* [Fast JSON API](https://github.com/Netflix/fast_jsonapi) - Ruby serializer

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

* Thanks to [Alex Pugia](https://github.com/jasminnancy) for originally writing the frontend in plain Javascript.
* The food data was scraped from [Fast Food Nutrition](https://fastfoodnutrition.org).
* Thanks to [Clearbit](http://clearbit.com) for their [free logo API](https://clearbit.com/logo) which was used for the restaurants.
* Thanks to [JSON Bin](http://https://jsonbin.io/) for hosting the restaurant and foods API.
