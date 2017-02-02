var movies=[
{title:"The Shawshank Redemption",year: 1994,IMDb:9.2}, 
{title:"The GodFather",	year: 1972,	IMDb: 9.2}, 
{title:"The GodFather 2",year: 1974,IMDb: 9.0}, 
{title:"The Dark knight",year: 2008,IMDb: 8.9}, 
{title:"12 Angry Men",year: 1957,IMDb: 8.9}, 
{title:"Schindler's List",year: 1993,IMDb: 8.9}, 
{title:"Pulp Fiction",year: 1994,IMDb: 8.9}, 
{title:"The Lord of the Rings: The Return of the King",year: 2003,IMDb: 8.9}, 
{title:"The Good The Bad & The Ugly",year: 1966,IMDb: 8.9}, 
{title:"Fight Club",year: 1999,IMDb: 8.8} ];
function showMovies(){
	//alert("showMovies funktionen är anropad")
	var html = "<table>";
	html+= "<tr>";
		html+="<td>"+ "Title: " + "</td>";
		html+="<td>"+ "Year: "+ "</td>";
		html+="<td>" + "IMDb: " + "</td>";
		html+="</tr>";
	for (var i = 0; i < movies.length ; i++) {
		html+= "<tr>";
		html+="<td>"+ movies[i].title + "</td>";
		html+="<td>"+ movies[i].year + "</td>";
		html+="<td>" + movies[i].IMDb + "</td>";
		html+="</tr>";
	}
	html+="</table>";
	document.getElementById("box").innerHTML = html;
}
function ShowBlue(){	
	document.getElementById("box").style.backgroundImage ="none";
	document.getElementById("box").style.backgroundColor ="blue";
	showMovies();
}
function ShowRed(){
	document.getElementById("box").style.backgroundImage ="none";
	document.getElementById("box").style.backgroundColor ="red";
	showMovies();
}
function ShowRetro(){
	document.getElementById("box").style.backgroundColor ="none";
	document.getElementById("box").style.backgroundImage ="url('images/retro-bgd.jpeg')";
	document.getElementById("box").style.backgroundSize ="450px 265px";
	showMovies();
}
function ShowFruit(){

	document.getElementById("box").style.backgroundImage ="url('images/fruits-bgd.jpeg')";
	document.getElementById("box").style.backgroundSize ="450px 265px";
	showMovies();
}
function Search(){
	//alert("Search funkar");
	var searchedWord = document.getElementById("searched-word").value;
	var counter;
	var tempStr;
	counter=0;
	//alert(searchedWord);
	 for (var i = 0 ; i < movies.length; i++) {
	 	//var compare2Words = movies[i].year.localeCompare(searchedWord);
	 	//if (compare2Words == 0)
	 	if (movies[i].title.toLowerCase() === searchedWord.toLowerCase() || movies[i].year == searchedWord || movies[i].IMDb == searchedWord)
	 		 
	 		{	alert(" One title is found");
	 			 tempStr = showSpeficMovies(i);
	 			 		}

	 		else {
	 				counter++;
	 				//alert("Title you seek doesnt exist in our database");
	 			 }
	  }
	  if(counter===movies.length) { 
	 	alert("Title you seek doesnt exist in our database");
	 }
		document.getElementById("box").innerHTML=tempStr;
}
function showSpeficMovies(index){
				var html1 = "<table film-box='1'>";
					html1+= "<tr>";
					html1+="<td>"+ "Title: " + "</td>";
					html1+="<td>"+ "Year: "+ "</td>";
					html1+="<td>" + "IMDb: " + "</td>";
					html1+="</td>";
					html1+= "<tr>";
					html1+="<td>"+ movies[index].title + "</td>";
					html1+="<td>"+ movies[index].year + "</td>";
					html1+="<td>" + movies[index].IMDb + "</td>";
					html1+="</td>";
					
				html1+="</table>";
		return		 html1;
}