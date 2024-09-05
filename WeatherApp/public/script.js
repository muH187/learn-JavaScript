const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '99609dca06msh2ed8d5945e90fe1p1f64e8jsn26c42808801b',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch(url, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .then(err => console.error(err))