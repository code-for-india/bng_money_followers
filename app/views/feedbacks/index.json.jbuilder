json.array!(@feedbacks) do |feedback|
  json.extract! feedback, :id, :proj_id, :comment, :user_name, :status_id
  json.url feedback_url(feedback, format: :json)
end
