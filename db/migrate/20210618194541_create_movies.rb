class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.belongs_to :theater, null: false, foreign_key: true
      t.string :title
      t.string :duration
      t.string :rating

      t.timestamps
    end
  end
end
