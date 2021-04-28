require("dotenv").config();

const weatherToUrl = (weather) => {
	let searchTerm;
	const baseUrl = "http://api.giphy.com/v1/gifs/";
	const search = "search?q=";
	const apiKey = "oj7y67dGoJOLsovSxaoWbyLH3oLftshR";
	const limit = "20";

	if (weather === "clear") {
		searchTerm = "sunny";
	} else {
		searchTerm = weather;
	}

	const requestURLspecific = baseUrl.concat(
		search,
		searchTerm,
		"&limit=",
		limit,
		"&api_key=",
		apiKey
	);

	return requestURLspecific;
};

export { weatherToUrl };
