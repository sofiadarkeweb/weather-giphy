import React, { useState, useEffect } from "react";
import Giphy from "./Giphy";
require("dotenv").config();

// import dotenv from "dotenv";
// dotenv.config();
// console.log(process.env);

const key = process.env.REACT_APP_API_KEY;

function Weather(props) {
	let [temperature, setTemperature] = useState("");
	let [feelsLike, setFeelsLike] = useState("");
	let [description, setDescription] = useState("");
	let [textDescription, setTextDescription] = useState("");

	const url = "https://api.openweathermap.org/data/2.5/weather";
	const city = "stockholm";
	const unit = "metric";
	const requestURL = url.concat("?q=", city, "&appid=", key, "&units=", unit);

	useEffect(() => {
		getData();
	}, []);

	// make a fetch data function, make it async -- const getData = async() => {fetch data with await in here and set state}

	// useeffetc -- call the getData funtion once when the component loads

	const getData = async () => {
		const data = await fetch(requestURL)
			.then((res) => res.json())
			.catch((error) => {
				setTemperature("Big problem happened, Sorry :(");
			});

		let newTemperature = data.main.temp;
		let newFeelsLike = data.main.feels_like;
		let newDescription = data.weather[0].main;
		let newTextDescription = data.weather[0].description;

		setTemperature(newTemperature);
		setFeelsLike(newFeelsLike);
		setDescription(newDescription);
		setTextDescription(newTextDescription);
	};

	return (
		<div>
			<Giphy description={description} />
			<h2>Today its: {textDescription}</h2>
			<p>Temp today: {temperature}</p>
			<p>Feels like: {feelsLike}</p>
		</div>
	);
}

export default Weather;
