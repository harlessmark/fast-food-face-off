class FoodSerializer
  include FastJsonapi::ObjectSerializer
  attributes :image, :name, :calories, :restaurant, :restaurant_logo
end
