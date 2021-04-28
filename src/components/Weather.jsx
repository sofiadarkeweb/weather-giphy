import React, { useState, useEffect } from "react";
import Giphy from "./Giphy";

function Weather(props) {
	let [temperature, setTemperature] = useState("");
	let [feelsLike, setFeelsLike] = useState("");
	let [description, setDescription] = useState("");

	const apiKey = "ac0d90037b7074279effe6660cc6161e"; // <= add API key here. Register in the site to get the API key
	const url = "https://api.openweathermap.org/data/2.5/weather";
	const city = "stockholm";
	const unit = "metric";
	const requestURL = url.concat(
		"?q=",
		city,
		"&appid=",
		apiKey,
		"&units=",
		unit
	);

	// make a fetch data function, make it async -- const getData = async() => {fetch data with await in here and set state}

	// useeffetc -- call the getData funtion once when the component loads

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const data = await fetch(requestURL)
			.then((res) => res.json())
			.catch((error) => {
				setTemperature("Big problem happened, Sorry :(");
			});

		let newTemperature = data.main.temp;
		let newFeelsLike = data.main.feels_like;
		let newDescription = data.weather[0].description;
		//console.log(data.weather[0].description);

		setTemperature(newTemperature);
		setFeelsLike(newFeelsLike);
		setDescription(newDescription);
	};

	// fetch(requestURL)
	// 	.then((response) => response.json())
	// 	.then((data) => {
	// 		let newTemperature = data.main.temp;
	// 		let newFeelsLike = data.main.feels_like;
	// 		let newDescription = data.weather[0].description;
	// 		console.log(data.weather[0].description);

	// 		setTemperature(newTemperature);
	// 		setFeelsLike(newFeelsLike);
	// 		setDescription(newDescription);
	// 	})
	// 	.catch((error) => {
	// 		setTemperature("Big problem happened, Sorry :(");
	// 	});

	return (
		<div>
			{description === "clear sky" ? <Giphy description={description} /> : null}
			<h2>Today its: {description}</h2>
			<p>Temp today: {temperature}</p>
			<p>Feels like: {feelsLike}</p>
		</div>
	);
}

export default Weather;
