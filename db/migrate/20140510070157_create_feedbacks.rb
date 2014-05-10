class CreateFeedbacks < ActiveRecord::Migration
  def change
    create_table :feedbacks do |t|
      t.integer :proj_id
      t.text :comment
      t.string :user_name
      t.integer :status_id

      t.timestamps
    end
  end
end
