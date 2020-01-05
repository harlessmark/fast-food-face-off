class RemoveRestaurantIdFromFoods < ActiveRecord::Migration[6.0]
  def change

    remove_column :foods, :restaurant_id, :integer
  end
end
