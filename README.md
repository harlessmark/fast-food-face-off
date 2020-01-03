# Fast Food Face-Off | Work in Progress...

You're given two random fast food menu items to choose from. Which one do you think has the most calories? Each correct answer gets you one point. Pick the wrong answer then it's GAME OVER. Try to make your way to the leaderboard!

I created three webscrapers to gather data on fast food restaurants and their foods. One scraper was used to get the company's logo, the second scraper was to scrape the food name and number of calories, and the last scraper was to match that food's name with their image. I excluded all foods that were under 400 calories. Foods with a range of calories (e.g. 250-700 calories) were replaced with their average number. There are a total of 423 food items from 9 restaurants.

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Built With

* [Ruby](http://www.yahoo.com) - Backend language
* [React](http://www.yahoo.com) - Javascript frontend framework
* [Tailwind CSS](https://www.tailwindcss.com) - CSS framework
* [Nokogiri](https://rometools.github.io/rome/) - Ruby web scraper

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

## Acknowledgments

* Thanks to [Alex Pugia](https://github.com/jasminnancy) for originally writing the frontend in plain Javascript.
* The food data was scraped from [Fast Food Nutrition](https://fastfoodnutrition.org).
* Thanks to [Clearbit](http://clearbit.com) and their logo API for providing the restaurant logos.

