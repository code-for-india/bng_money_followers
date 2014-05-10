json.array!(@subscriptions) do |subscription|
  json.extract! subscription, :id, :name, :company_name, :email_id, :project_category_id, :project_type_id, :contact_no
  json.url subscription_url(subscription, format: :json)
end
