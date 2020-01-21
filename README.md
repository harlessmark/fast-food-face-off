# Fast Food Face-Off (Work in Progress...)

You're given two random fast food menu items to choose from. Which one do you think has the most calories? Each correct answer gets you one point. Pick the wrong answer then it's GAME OVER. Try to make your way to the leaderboard!

Three web scrapers were used to gather data on fast food restaurants and their foods. One scraper was find the restaurant's logo, the second scraper was to scrape the food name and number of calories, and the last scraper was to match that food's name with their image. Any foods with less than or equal to 400 calories were excluded. Foods with a range of calories (e.g. 250-700 calories) were replaced with their average number. There are a total of 423 food items from 9 different restaurants.

## Installing

Your computer should have the latest version of [Ruby](https://www.ruby-lang.org/en/documentation/installation/) installed. Then run the following commands:

Run Bundler

```
bundle install
```

Initialize database

```
rails db:create
rails db:migrate
```

Start the backend server

```
rails s
```

Start the frontend server

```
cd frontend
npm start
```

[optional] Run the web scrapers from the root folder. This will take several minutes to complete and will not affect the game.

```
rails db:migrate
rails db:seed
```

## Built With

- [Ruby](http://www.yahoo.com) - Backend language
- [Ruby on Rails](https://rubyonrails.org/) - Ruby web application framework
- [React](https://reactjs.org/) - Javascript frontend framework
- [Tailwind CSS](https://www.tailwindcss.com) - CSS framework
- [Nokogiri](https://github.com/sparklemotion/nokogiri) - HTML and XML parser
- [Fast JSON API](https://github.com/Netflix/fast_jsonapi) - Ruby serializer

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Thank you [Alex Pugia](https://github.com/jasminnancy) for originally writing the frontend in plain Javascript.
- Thanks to [Brady Pascoe](https://github.com/bpas247), [Ross Wakefield](https://github.com/Ross1309) and [Terry Sahaidak](https://github.com/terrysahaidak) for helping me out with my code.
- The food data was scraped from [Fast Food Nutrition](https://fastfoodnutrition.org).
