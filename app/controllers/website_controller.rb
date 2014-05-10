class WebsiteController < ApplicationController
require "net/http"
require "uri"
require "json"


  def index
  	result = Net::HTTP.get_response(URI.parse('http://search.worldbank.org/api/v2/projects?format=json&regionname_exact=South+Asia&source=IBRD&countryname_exact=Republic+of+India&kw=N'))
  	data = JSON.parse(result.body)
  	@projects = data['projects']
  end
end
