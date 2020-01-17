class RemoveTotalCaloriesFromGames < ActiveRecord::Migration[6.0]
  def change
    remove_column :games, :total_calories, :integer
  end
end
