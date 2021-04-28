import React, { useState, useEffect } from "react";
import { weatherToUrl } from "./utils";

// const cloudy

function Giphy({ description }) {
	let [gif, setGif] = useState("");

	//run function that takes the paramteter of the desciption in. Clear sky

	// const requestURL =
	// 	"http://api.giphy.com/v1/gifs/search?q=snowy&limit=10&api_key=oj7y67dGoJOLsovSxaoWbyLH3oLftshR";

	// make this asynch as well??

	const getData = async (url) => {
		if (description) {
			const data = await fetch(url).then((response) => response.json());
			console.log(data);
			let newGif =
				data.data[Math.floor(Math.random() * 20)].images.original.url;
			setGif(newGif);
		}
	};

	useEffect(() => {
		getData(weatherToUrl(description));
	}, [description]);

	return (
		<div>
			<h1>Weather Today</h1>
			<img className="generated-gif" src={gif} alt="gif" />
		</div>
	);
}

export default Giphy;
