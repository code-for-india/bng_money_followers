class CreateProjectTypes < ActiveRecord::Migration
  def change
    create_table :project_types do |t|
      t.string :name
      t.integer :category_id

      t.timestamps
    end
  end
end
