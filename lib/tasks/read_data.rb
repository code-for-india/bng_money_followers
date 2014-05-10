require 'open-uri'
page_content = open("http://your_page.com").read
page_body = page_content.scan(/<body>(.*)<\/body>/i).first


'http://search.worldbank.org/api/v2/projects?format=json&regionname_exact=South+Asia&source=IBRD&countryname_exact=Republic+of+India&kw=N'