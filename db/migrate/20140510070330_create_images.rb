class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.integer :proj_id
      t.integer :user_id
      t.string :user_name
      t.string :url
      t.integer :feedback_id

      t.timestamps
    end
  end
end
