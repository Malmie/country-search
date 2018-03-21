$(document).ready(function(){
	var url = 'https://restcountries.eu/rest/v2/region/';
	var countriesList = $('#countries');

	$('#search').click(searchCountries);

	function searchCountries() {
		regionName = $('#region-name').val();
		if(!regionName.length) regionName = 'No data';
		$.ajax({
			url: url + regionName,
			method: 'GET',
			success: showCountriesList
		});
	}

	function showCountriesList(resp) {
		countriesList.empty();
		resp.forEach(function(item){
			$('<li>').text(item.name).appendTo(countriesList);
		});
	}
});