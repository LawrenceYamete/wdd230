function toggleMenu() {
    document.getElementById("primarynav").classList.toggle("open"); 
    document.getElementById("togglemenu").classList.toggle("open"); 
}

const x = document.getElementById('togglemenu');
x.onclick = toggleMenu;


const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://community-open-weather-map.p.rapidapi.com/weather?q=Manila%2C%20Philippines&lat=0&lon=0&callback=test&id=1217&lang=null&units=imperial&mode=xml",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "55dd02c407msh017a9136c612aecp105a3ajsn5315ce8262f0"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
