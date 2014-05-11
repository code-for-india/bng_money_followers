var text;
var states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh","Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur","Meghalaya", "Mizoram", "Nagaland", "Orissa", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];


var sanctioned = [];
var money = [];

for(var i = 0; i < 30 ; i++)
{
	sanctioned[i] = money[i] = 0;
}

$.get( "rows.json", function( data ) {
	text = "<table style=\"width:300px\" border=\"2\">";
	for(i = 0; i < data.data.length; i++)
	{
	//	console.log(data.data[i][14]+"|"+ data.data[i][16]+"|"+ data.data[i][20]+"|"+ data.data[i][21]+"|"+ data.data[i][26]);
//				alert( "Load was performed." );
		
		text += "<tr><td>"+data.data[i][14]+"</td><td>"+data.data[i][16]+"</td><td>"+data.data[i][20]+"</td><td>"+data.data[i][21]+"</td><td>Rs."+data.data[i][26]*60+"</td></tr>";
		
		
		for(var state = 0; state < 30; state++)
		{
			var n = data.data[i][14].search(states[state]);
//					console.log(i);
//					if(isNaN(data.data[i][21])
//						console.log("Found null at "+i);
//			var k = data.data[i][21].search(states[state]);
			if( n != -1 )//|| k != -1)
			{
				sanctioned[state]++;
				money[state] += data.data[i][26]*60;
			}
		}
		
		
		
	}
	console.log(sanctioned);
	console.log(money);
	text += "</table>";
//			console.log(text);
//			document.write(text);
});
//console.log(text);
//document.write(text);
//console.log(json);





function plotDistrict()
{
	clearStates();
	clearDistricts();
	var text;
	$.get( "rows.json", function( data ) {
		text = "<table style=\"width:300px\" border=\"2\">";
		console.log(text);
		var ap = 0;
		var content = [];
		var index = [];
		for(i=0; i < 3000; i++)
		{
		//	console.log(data.data[i][14]+"|"+ data.data[i][16]+"|"+ data.data[i][20]+"|"+ data.data[i][21]+"|"+ data.data[i][26]);
	//				alert( "Load was performed." );
			var n = data.data[i][14].search("Andhra Pradesh");
			if( n != -1)
				ap++;
//		text += "<tr><td>"+i+"</td><td>"+data.data[i][14]+"</td><td>"+data.data[i][16]+"</td><td>"+data.data[i][20]+"</td><td>"+data.data[i][21]+"</td><td>Rs."+data.data[i][26]*60+"</td></tr>";
	//				console.log(text);
			 content[i] = data.data[i][21];	
			 index[i] = i;
		}
		var words = [];
		for(i=0; i < content.length ; i++){
			words[i] = content[i].split(" ");
		}
		var dist = [];
		var no = [];
		var j=0, k=0;
		for(i=0;i<words.length;i++){
			for(j=0;j<words[i].length;j++){
				if(/dist/i.test(words[i][j])){
					no[i] = index[i];
					if(words[i][j-1] == "IN"){
						dist[k] = words[i][j-2];
						k++;
					}
					else{
						dist[k] = words[i][j-1];
						k++;
					}
				}
			}
		}
//		var new_dist = [];
//		new_dist = unique(dist);
//		function unique(list) {
//			  var result = [];
//			  $.each(list, function(i, e) {
//				if ($.inArray(e, result) == -1) {
//					result.push(e);
//				}
//			  });
//			  return result;
//		}
		var final_no = [];
		var remove = ["TO","KVA","IN","32","SUB","OF","FOR",":","-",null,"-","HOSPITAL","DRAIN","PRIVATIZATION","POWER","EXISTING"];
		for(i=0;i<dist.length;i++){
			for(j=0;j<remove.length;j++){
				if(dist[i] == remove[j]){
					dist.splice(i,1);
				}
			}	
		}
		var project_name = [];
		var project_type = [];
		var project_abstract = [];
		var project_cost = [];
		j=0;
		for(i=0; i < 8000; i++)	{
			if(i == no[i]){
				 project_name[i] = data.data[i][14];
				 project_type[i] = data.data[i][20];
				 project_abstract[i] = data.data[i][21];
				 project_cost[i] = data.data[i][26]*60;
				 j++;
			}
			else{
				continue;
			}
		}
		var project_name1 = [];
		i=0;
		text += "</table>";
	//console.log(text);
	//	document.write(text);	
		project_name = jQuery.grep(project_name, function(n){ return (n); });
		project_type = jQuery.grep(project_type, function(n){ return (n); });
		project_abstract = jQuery.grep(project_abstract, function(n){ return (n); });
		project_cost = jQuery.grep(project_cost, function(n){ return (n); });
		console.log(project_name);
		console.log(project_type);
		console.log(dist);
		
		var sumDist = [];
		
		for(i = 0 ; i < dist.length; i++)
		{
			if(isNaN(sumDist[dist[i]]))
				sumDist[dist[i]] = 0;
			sumDist[dist[i]]++;
		}
		
		console.log(sumDist);
		
		dist = [];
		for(var key in sumDist){
			if(sumDist.hasOwnProperty(key))
				dist.push(key);
		}
		
		console.log(dist);
		
		for(var i = 0; i < dist.length ; i++)
		{	
	
		geocoder = new google.maps.Geocoder();
	//	var address = document.getElementById("address").value;
		(function(i){
			geocoder.geocode( { 'address': dist[i]}, function(results,status){
				console.log("address",dist[i]);
				if (status == google.maps.GeocoderStatus.OK) {
					console.log(results[0].geometry.location.k);
					console.log(results[0].geometry.location.A);
					distMarker[i] = new google.maps.Marker({
						position: new google.maps.LatLng(results[0].geometry.location.k,results[0].geometry.location.A),
						map: map,
						title: dist[i]
					});
					console.log("Before event listener",i);
					google.maps.event.addListener(distMarker[i], 'click', function(){
						
						console.log(project_name[i]);
					});
				}
			});
		}(i));
		}
	});
}
function clearDistricts(){
	for (var i = 0; i < distMarker.length; i++ ) {
		distMarker[i].setMap(null);
	}
	distMarker.length = 0;
}














		