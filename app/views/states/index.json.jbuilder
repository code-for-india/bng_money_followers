json.array!(@states) do |state|
  json.extract! state, :id, :name, :url_name, :country_id
  json.url state_url(state, format: :json)
end
