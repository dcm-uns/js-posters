
var key="91d05c89";

function buscar(){
 var titulo=document.getElementById("titulo").value;
 var url="http://www.omdbapi.com/?apikey="+key+"&t="+titulo;
 fetch(url)
 .then(response => response.json())
 .then(data => {
	console.log(data);
    document.getElementById("poster").src = data.Poster;
	document.getElementById("info").innerHTML = data.Year;
 });


}


