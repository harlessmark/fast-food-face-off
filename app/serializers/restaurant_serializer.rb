class RestaurantSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :logo
  has_many :foods
end
