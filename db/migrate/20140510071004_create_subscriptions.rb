class CreateSubscriptions < ActiveRecord::Migration
  def change
    create_table :subscriptions do |t|
      t.string :name
      t.string :company_name
      t.string :email_id
      t.integer :project_category_id
      t.integer :project_type_id
      t.string :contact_no

      t.timestamps
    end
  end
end
