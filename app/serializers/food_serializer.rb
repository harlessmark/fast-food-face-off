class FoodSerializer
  include FastJsonapi::ObjectSerializer
  attributes :image, :name, :calories, :restaurant_id
  belongs_to :restaurant
end
