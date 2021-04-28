import React, { useState, useEffect } from "react";
import { weatherToUrl } from "./utils";

// const cloudy

function Giphy({ description }) {
	let [gif, setGif] = useState("");

	//run function that takes the paramteter of the desciption in. Clear sky

	// const requestURL =
	// 	"http://api.giphy.com/v1/gifs/search?q=snowy&limit=10&api_key=oj7y67dGoJOLsovSxaoWbyLH3oLftshR";

	useEffect(() => {
		const url = weatherToUrl(description);
		console.log(url);
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				let newGif =
					data.data[Math.floor(Math.random() * 10)].images.original.url;
				console.log(newGif);
				console.log(data);
				setGif(newGif);
			});
	}, [description]);

	return (
		<div>
			<h1>Weather Today</h1>
			<img src={gif} alt="gif" />
		</div>
	);
}

export default Giphy;
