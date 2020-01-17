require 'nokogiri'
require 'httparty'
require 'byebug'

Food.destroy_all

@restaurant_list = [
  {
    name: "Arby's",
    website: "arbys.com",
    route: "/arbys"
  },
  {
    name: "Burger King",
    website: "bk.com",
    route: "/burger-king"
  },
  {
    name: "Chick-Fil-A",
    website: "chick-fil-a.com",
    route: "/chick-fil-a"
  },
  {
    name: "Dairy Queen",
    website: "dairyqueen.com",
    route: "/dairy-queen"
  },
  {
    name: "Five Guys",
    website: "fiveguys.com",
    route: "/five-guys"
  },
  {
    name: "KFC",
    website: "kfc.com",
    route: "/kfc"
  },
  {
    name: "McDonald's",
    website: "mcdonalds.com",
    route: "/mcdonalds"
  },
  {
    name: "Taco Bell",
    website: "tacobell.com",
    route: "/taco-bell"
  },
  {
    name: "Wendy's",
    website: "wendys.com",
    route: "/wendys"
  }
]

@food_list = []

def nutrition_scraper
  url = "https://fastfoodnutrition.org"

  @restaurant_list.each do |restaurant|
    unparsed = HTTParty.get(url + restaurant[:route])
    parsed = Nokogiri::HTML(unparsed)
    food_list = parsed.css('div.filter_target')

    food_list.each do |food|

      if food.text.split("Facts")[1].include? "-"
        # Finds the average calories if food has a range (e.g. 600-800 calories)

        first_num = food.text.split("Facts")[1].split(" calories")[0].split("-")[0].to_i
        second_num = food.text.split("Facts")[1].split(" calories")[0].split("-")[1].to_i
        calories = (first_num + second_num) / 2
      end

      if food.text.split("Facts")[1].split(" calories")[0].to_i >= 400
        # filters out foods with 400 calories or less

        name = food.text.split(" Nutrition")[0]
        calories = food.text.split("Facts")[1].split(" calories")[0].to_i

        @food_list << {
          image: "",
          calories: calories,
          name: name,
          restaurant: restaurant[:name],
          restaurant_logo: ""
        }
      end
    end
  end
end

def logo_scraper
  # adds logo from clearbit.com to restaurant list

  url_start = "http://logo.clearbit.com/"
  url_end = "?size=700"

  @food_list.each do |food|

    @restaurant_list.each do |restaurant|
      logo = url_start + restaurant[:website] + url_end

      if food[:restaurant] === restaurant[:name]
        food[:restaurant_logo] << logo
      end
    end
  end
end

def food_image_scraper
  # adds food image and creates instance

  start_url = "https://images.search.yahoo.com/search/images;_ylt=AwrJ7FxRKAFedMUA5ClXNyoA;_ylu=X3oDMTE0bWZmNWI0BGNvbG8DYmYxBHBvcwMxBHZ0aWQDQjY4MzNfMQRzZWMDcGl2cw--?p="
  end_url = "&fr2=piv-web&fr=yfp-t"

  counter = 0

  @food_list.each do |food|
    new_food_name = food[:name]

    if food[:name].include? " "
      # replaces empty spaces with +
      new_food_name = food[:name].gsub(" ", "+")
    end


    if food[:restaurant].include? " "
      # replaces empty spaces with +
      food[:restaurant] = food[:restaurant].gsub(" ", "+")
    end

    search_url = start_url + food[:restaurant] + "+" + new_food_name + end_url
    search_url = search_url.delete("'").delete("\u2122").delete("\u2013").delete("\u2019").delete("\u00AE").delete("\u0303").delete("\u00E9")
    # removes escape characters

    unparsed = HTTParty.get(search_url)
    parsed = Nokogiri::HTML(unparsed)

    sleep 3
    # allows time for the page to fully load

    food[:image] << parsed.css("img").first.values.first.split("&")[0]

    Food.create(
      image: food[:image],
      name: food[:name],
      calories: food[:calories],
      restaurant: food[:restaurant],
      restaurant_logo: food[:restaurant_logo]
    )

    counter += 1
    puts "+#{counter} #{food[:restaurant]} #{food[:name]}"
  end
end

nutrition_scraper
logo_scraper
food_image_scraper
