
var key="INSERTAR KEY OMDBAPI";

function buscar(){
 var titulo=document.getElementById("titulo").value;
 var url="http://www.omdbapi.com/?apikey="+key+"&t="+titulo;
 fetch(url)
 .then(response => response.json())
 .then(data => {
	// insertar el poster en la pagina web
 });


}


