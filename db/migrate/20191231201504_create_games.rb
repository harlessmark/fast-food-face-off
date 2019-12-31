class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.integer :score
      t.string :initials
      t.integer :total_calories

      t.timestamps
    end
  end
end
