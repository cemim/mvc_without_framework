$(document).ready(function(){  
	var url = "controllers/starwars_p.php"; // controller
	var content = document.getElementById("content"); 
	var dados = {
		function:"getPeople"
	}; 

	$.get(
		url,
		dados
	).done(function(data){
		table = people_view(data);
		content.innerHTML = table;	
	});
});

$(document).on('click','.page_people', function(){
	document.getElementById("notice").style.display = "none";
	var val = $(this).val();
	var url = "controllers/starwars_p.php"; // controller
	var content = document.getElementById("content"); 	 
	var dados = {
		function:"getPeople",
		page:val
	};
  
	$.get(
		url,
		dados
	).done(function(data){
		table = people_view(data);
		content.innerHTML = table;  
	});	
});

$(document).on('click','#people', function(){
	document.getElementById("notice").style.display = "none";	
	var url = "controllers/starwars_p.php"; // controller
	var content = document.getElementById("content"); 	 
	var dados = {
		function:"getPeople"
	};
  
	$.get(
		url,
		dados
	).done(function(data){
		table = people_view(data);
		content.innerHTML = table;   
	});	
});

$(document).on('click','#planet', function(){
	document.getElementById("notice").style.display = "none";
	var url = "controllers/starwars_p.php"; // controller
	var content = document.getElementById("content"); 	 
	var user_text = document.getElementById("user_text").value;
	var dados = {
		function:"getPlanet",
		planet: user_text
	};
  
	$.get(
		url,
		dados
	).done(function(data){
		table = planet_view(data);
		content.innerHTML = table; 
	});	
});

$(document).on('click','.page_planet', function(){
	document.getElementById("notice").style.display = "none";
	var val = $(this).val();	
	var url = "controllers/starwars_p.php"; // controller
	var content = document.getElementById("content"); 	 
	var user_text = document.getElementById("user_text").value;
	var dados = {
		function:"getPlanet",
		planet: user_text,
		page:val
	};
  
	$.get(
		url,
		dados
	).done(function(data){
		table = planet_view(data);
		content.innerHTML = table;
	});	
});

$(document).on('click','#starships', function(){	
	var url = "controllers/starwars_p.php"; // controller
	var content = document.getElementById("content"); 	 
	var user_text = document.getElementById("user_text").value;

	if(user_text){
		document.getElementById("notice").style.display = "none";
		var dados = {
			function:"getStarships",
			id: user_text
		};
	  
		$.get(
			url,
			dados
		).done(function(data){
			table = starships_view(data);
			content.innerHTML = table;
		});		
	}
	else{
		document.getElementById("notice").style.display = "block";
	}
	
});


$(document).on('click','#average', function(){
	document.getElementById("notice").style.display = "none";	
	var url = "controllers/starwars_p.php"; // controller
	var content = document.getElementById("content"); 	 	
	var dados = {
		function:"getAverage"
	};
  
	$.get(
		url,
		dados
	).done(function(data){
		table = average_view(data);
		content.innerHTML = table;
	});	
});

function pageVerify(obj){
	qtd = Math.ceil(obj / 10);		
	return qtd;
}

function people_view(data){
	json = JSON.parse(data); // Objeto principal
	results = json.results;	// Resultados
	num_pages = pageVerify(json.count);
	table = "";
	table += "<h2>Characters</h2>";
	table += "<table class='table table-striped table-dark'>";	
	table += "<thead><tr>";
	table += "<th scope='col'>Name</th>" + 
			 "<th scope='col'>Height</th>" +
			 "<th scope='col'>Mass</th>" +
			 "<th scope='col'>Hair Color</th>" +
			 "<th scope='col'>Skin Color</th>" +
			 "<th scope='col'>Eye Color</th>" +
			 "<th scope='col'>Birth Year</th>" +
			 "<th scope='col'>Gender</th>";
	table += "</tr></thead><tbody>";
	for(var i in results){
		table += "<tr>";
		table += "<td scope='row'>" + results[i]['name'] + "</td>";
		table += "<td>" + results[i]['height'] + "</td>";
		table += "<td>" + results[i]['mass'] + "</td>";
		table += "<td>" + results[i]['hair_color'] + "</td>";
		table += "<td>" + results[i]['skin_color'] + "</td>";
		table += "<td>" + results[i]['eye_color'] + "</td>";
		table += "<td>" + results[i]['birth_year'] + "</td>";
		table += "<td>" + results[i]['gender'] + "</td>";
		table += "</tr>";			
	}
	table += "<tr><td colspan='8'>";
	for(j=1;j<=num_pages;j++){
		table += "<button value='" + j + "' class='page_people'>" + j + "</button>";
	}
	table += "</td></tr>";	
	table += "</tbody></table>";

	return table;
}

function planet_view(data){
	json = JSON.parse(data); // Objeto principal
	results = json.results;	// Resultados
	num_pages = pageVerify(json.count);
	table = "";
	table += "<h2>Planets</h2>";
	table += "<table class='table table-striped table-dark'>";
	table += "<thead><tr>";
	table += "<th>Name</th>" + 
			 "<th>Rotation Period</th>" +
			 "<th>Orbital Period</th>" +
			 "<th>Diameter</th>" +
			 "<th>Climate</th>" +
			 "<th>Gravity</th>" +
			 "<th>Terrain</th>" +
			 "<th>Surface Water</th>" +
			 "<th>Population</th>";
	table += "</tr></thead><tbody>";
	for(var i in results){
		table += "<tr>";
		table += "<td scope='row'>" + results[i]['name'] + "</td>";
		table += "<td>" + results[i]['rotation_period'] + "</td>";
		table += "<td>" + results[i]['orbital_period'] + "</td>";
		table += "<td>" + results[i]['diameter'] + "</td>";
		table += "<td>" + results[i]['climate'] + "</td>";
		table += "<td>" + results[i]['gravity'] + "</td>";
		table += "<td>" + results[i]['terrain'] + "</td>";
		table += "<td>" + results[i]['surface_water'] + "</td>";
		table += "<td>" + results[i]['population'] + "</td>";
		table += "</tr>";			
	}
	table += "<tr><td colspan='9'>";
	for(j=1;j<=num_pages;j++){
		table += "<button value='" + j + "' class='page_planet'>" + j + "</button>";
	}
	table += "</td></tr>";	
	table += "</tbody></table>";

	return table;
}

function starships_view(data){
	json = JSON.parse(data); // Objeto principal
	table = "";
	table += "<h2>Starships</h2>";
	table += "<table class='table table-striped table-dark'>";
	table += "<thead><tr>";
	table += "<th>Name</th>" + 
			 "<th>Model</th>" +
			 "<th>Manufacturer</th>" +
			 "<th>Cost In Credits</th>" +
			 "<th>Length</th>" +
			 "<th>Max Atmosphering Speed</th>" +
			 "<th>Crew</th>" +
			 "<th>Passengers</th>" +
			 "<th>Cargo Capacity</th>" +
			 "<th>Consumables</th>" +
			 "<th>hyperdrive Rating</th>" +
			 "<th>MGLT</th>" +
			 "<th>Starship Class</th>";
	table += "</tr></thead><tbody>";
	table += "<tr>";
	table += "<td scope='row'>" + json['name'] + "</td>";
	table += "<td>" + json['model'] + "</td>";
	table += "<td>" + json['manufacturer'] + "</td>";
	table += "<td>" + json['cost_in_credits'] + "</td>";
	table += "<td>" + json['length'] + "</td>";
	table += "<td>" + json['max_atmosphering_speed'] + "</td>";
	table += "<td>" + json['crew'] + "</td>";
	table += "<td>" + json['passengers'] + "</td>";
	table += "<td>" + json['cargo_capacity'] + "</td>";
	table += "<td>" + json['consumables'] + "</td>";
	table += "<td>" + json['hyperdrive_rating'] + "</td>";
	table += "<td>" + json['MGLT'] + "</td>";
	table += "<td>" + json['starship_class'] + "</td>";
	table += "</tr>";			
		
	table += "</tbody></table>";

	return table;
}

function average_view(data){
	json = JSON.parse(data); // Objeto principal
	cont = 0;
	sum = 0;
	table = "";
	table += "<h2>Average</h2>";
	table += "<table class='table table-striped table-dark'>";
	table += "<thead><tr>";
	table += "<th>Name</th>" + 
			 "<th>Consumables</th>" +
			 "<th>Days</th>";
	table += "</tr></thead><tbody>";
	for(var i in json){
		str = json[i]['consumables'];
		num = str.replace(/[^\d]+/g,'');
		text = str.replace(/0|1|2|3|4|5|6|7|8|9/gi, '');
		text = text.trim(text);
		cont++;

		table += "<tr>";
		table += "<td scope='row'>" + json[i]['name'] + "</td>";
		table += "<td>" + json[i]['consumables'] + "</td>";		

		switch (text) {
			case 'years':
				days = num * 365;
				sum += parseInt(days);
				table += "<td>" + days + "</td>";
				break;
			case 'year':
				days = num * 365;
				sum += parseInt(days);
				table += "<td>" + days + "</td>";
				break;
			case 'months':
				days = num * 30;
				sum += parseInt(days);
				table += "<td>" + days + "</td>";
				break;
			case 'month':
				days = num * 30;
				sum += parseInt(days);
				table += "<td>" + days + "</td>";
				break;
			case 'weeks':
				days = num * 7;
				sum += parseInt(days);
				table += "<td>" + days + "</td>";
				break;
			case 'week':
				days = num * 7;
				sum += parseInt(days);
				table += "<td>" + days + "</td>";
				break;
			case 'days':
				days = num;
				sum += parseInt(days);
				table += "<td>" + days + "</td>";
				break;
			case 'day':
				days = num;
				sum += parseInt(days);
				table += "<td>" + days + "</td>";
				break;

			case 'hours':
				days = num / 24;
				sum += parseInt(days);
				table += "<td>" + days + "</td>";
				break;

			case 'hour':
				days = num / 24;
				sum += parseInt(days);
				table += "<td>" + days + "</td>";
				break;							
			
			default:
				table += "<td>Not Found Date</td>";
				break;
		}

		table += "</tr>";
	}	
	table += "</tbody></table>";
	
	total = sum / cont;

	table += "<br><br>";
	table += "Total of Starships: " + cont;
	table += "<br>";
	table += "Total Days: " + sum;
	table += "<br>";
	table += "Average: " + total;


	return table;
}