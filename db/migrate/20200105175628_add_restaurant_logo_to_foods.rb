class AddRestaurantLogoToFoods < ActiveRecord::Migration[6.0]
  def change
    add_column :foods, :restaurant_logo, :string
  end
end
