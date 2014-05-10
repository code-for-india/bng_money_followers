json.array!(@images) do |image|
  json.extract! image, :id, :proj_id, :user_id, :user_name, :url, :feedback_id
  json.url image_url(image, format: :json)
end
