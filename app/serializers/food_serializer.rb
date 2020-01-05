class FoodSerializer
  include FastJsonapi::ObjectSerializer
  attributes :image, :name, :calories
end
