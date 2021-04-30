import React, { useState, useEffect } from "react";
import Giphy from "./Giphy";
import Button from "./Button";
import Header from "./Header";
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
		<div className="container">
			<Header />
			<h1 className="weather-heading">It's {textDescription}!</h1>
			<Button title="New GIF" />
			<Giphy description={description} />
			<p className="temp-text">
				Today the temperature in Stockholm is {Math.round(temperature)}°C, but
				it feels more like {Math.round(feelsLike)}°C.
			</p>
		</div>
	);
}

export default Weather;
