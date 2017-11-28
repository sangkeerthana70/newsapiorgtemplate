/*global $ APIKEY*/

$(document).ready(function() {

    $.ajax({
   
        method: "GET",
        url: "https://newsapi.org/v2/sources",
        data: {category:"business", country:"us", language:"en", apikey:APIKEY},
        success: function(data){
          if (data.status === "ok")  {
           //alert(data.status);
           console.log(data);
           for (var i = 0; i < data.sources.length; i++){
            var source =   document.createElement("OPTION");
            source.setAttribute("value", data.sources[i].id);
            source.innerHTML = data.sources[i].name;
            document.getElementById('selection').appendChild(source);
          }
        }
      }
})



// .done(function(data) {
    //console.log(data);
    //console.log(data.status);

      $('#source').submit(function(event) {
         event.preventDefault();
        // alert(document.getElementById("selection").value);
         var sourceId=document.getElementById('selection').value;
         console.log(sourceId);


     $.ajax({
        
        method: "GET",
        url: "https://newsapi.org/v2/top-headlines",
        data: {sources:sourceId, apikey:APIKEY },
        //console.log(data);
            success: function(data){
              if (data.status === "ok")  {
               //alert(data.status);
               console.log(data);
               for (var i = 0; i < data.articles.length; i++){
                var articles =   document.createElement("LI");
                articles.setAttribute("value", data.articles[i].title);
                articles.innerHTML = data.articles[i].title;
                document.getElementById("list").appendChild(articles);
              }
            }
          }
    })
})
})
