/*global $ APIKEY*/
 

$(document).ready(function() {
    $.ajax({
        method: "GET",
        url: "https://newsapi.org/v2/sources",
        data: {category:"business", country:"us", language:"en", apikey:APIKEY},
        success: function(data){
			if (data.status === "ok")  {
			//alert(data.status);
			//console.log(data);
			   for (var i = 0; i < data.sources.length; i++){
					var source =   document.createElement("OPTION");
					source.setAttribute("value", data.sources[i].id);
					source.innerHTML = data.sources[i].name;
					document.getElementById('selection').appendChild(source);
			  }
			}
		}
	})
});  



$('#source').submit(function(event) {
 event.preventDefault();
 	$.ajax({
		method: "GET",
		url: "https://newsapi.org/v2/top-headlines",
		data: {sources:document.getElementById("selection").value, apikey:APIKEY},
		success: function(data){
			if (data.status === "ok")  {
				document.getElementById('headline').style = "display:block";
				$("#headline").empty();
				var list;
				var list_html;

 				for (var i=0;i < data.articles.length; i++){
					list = document.createElement("LI");
					list_html = '<a href="'+ data.articles[i].url +'">'+ data.articles[i].title+'</a><br>'+data.articles[i].description;
					list.innerHTML = list_html;
					document.getElementById('headline').appendChild(list);
				}
			}
		}	
	})
});
