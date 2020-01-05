class AddRestaurantToFoods < ActiveRecord::Migration[6.0]
  def change
    add_column :foods, :restaurant, :string
  end
end
