json.array!(@countries) do |country|
  json.extract! country, :id, :name, :url_name
  json.url country_url(country, format: :json)
end
