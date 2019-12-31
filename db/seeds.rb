require 'nokogiri'
require 'httparty'
require 'byebug'

Restaurant.destroy_all
Food.destroy_all

@restaurant_list = [
  {
    name: "Arby's",
    website: "arbys.com",
    route: "/arbys",
    logo: ""
  },
  {
    name: "Burger King",
    website: "bk.com",
    route: "/burger-king",
    logo: ""
  },
  {
    name: "Chick-Fil-A",
    website: "chick-fil-a.com",
    route: "/chick-fil-a",
    logo: ""
  },
  {
    name: "Dairy Queen",
    website: "dairyqueen.com",
    route: "/dairy-queen",
    logo: ""
  },
  {
    name: "Five Guys",
    website: "fiveguys.com",
    route: "/five-guys",
    logo: ""
  },
  {
    name: "KFC",
    website: "kfc.com",
    route: "/kfc",
    logo: ""
  },
  {
    name: "McDonald's",
    website: "mcdonalds.com",
    route: "/mcdonalds",
    logo: ""
  },
  {
    name: "Taco Bell",
    website: "tacobell.com",
    route: "/taco-bell",
    logo: ""
  },
  {
    name: "Wendy's",
    website: "wendys.com",
    route: "/wendys",
    logo: ""
  }
]
@food_list = []

def logo_scraper
  # adds logo from clearbit.com to restaurant list

  url_start = "http://logo.clearbit.com/"
  url_end = "?size=700"

  @restaurant_list.each do |single_restaurant|
    logo = url_start + single_restaurant[:website] + url_end
    single_restaurant[:logo] << logo

    Restaurant.create(
      name: single_restaurant[:name],
      logo: single_restaurant[:logo]
    )
  end
end

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
        restaurant_id = Restaurant.find_by(name: restaurant[:name]).id
        calories = food.text.split("Facts")[1].split(" calories")[0].to_i

        @food_list << {
          image: "",
          calories: calories,
          restaurant_id: restaurant_id,
          name: name
        }
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

    restaurant_name = Restaurant.find_by(id: food[:restaurant_id])[:name]

    if restaurant_name.include? " "
      # replaces empty spaces with +
      restaurant_name = restaurant_name.gsub(" ", "+")
    end

    search_url = start_url + restaurant_name + "+" + new_food_name + end_url
    search_url = search_url.delete("'").delete("\u2122").delete("\u2013").delete("\u2019").delete("\u00AE").delete("\u0303").delete("\u00E9")
    # removes escape characters

    unparsed = HTTParty.get(search_url)
    parsed = Nokogiri::HTML(unparsed)

    sleep 1
    # allows time for the page to fully load

    food[:image] << parsed.css("img").first.values.first.split("&")[0]

    Food.create(
      image: food[:image],
      name: food[:name],
      calories: food[:calories],
      restaurant_id: food[:restaurant_id]
    )

    counter += 1
    puts "+#{counter} #{restaurant_name} #{food[:name]}"
  end
end

logo_scraper
nutrition_scraper
food_image_scraper

# Restaurant data stored at
# https://api.jsonbin.io/b/5e0bbfcf02ce5777b8b583e6

# Food data stored at
# https://api.jsonbin.io/b/5e0bbf5f02ce5777b8b583b6
