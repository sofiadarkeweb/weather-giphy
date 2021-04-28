//import React from 'react'

const weatherToUrl = (weather) => {
	let searchTerm;
	const baseUrl = "http://api.giphy.com/v1/gifs/search?q=";
	if (weather === "clear sky") {
		searchTerm = "sunny";
	} else {
		searchTerm = "cloudy";
	}

	const requestURLspecific = baseUrl.concat(
		searchTerm,
		"&limit=10&api_key=oj7y67dGoJOLsovSxaoWbyLH3oLftshR"
	);

	return requestURLspecific;
};

export { weatherToUrl };
