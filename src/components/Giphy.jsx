import React, { useState, useEffect } from "react";
import { weatherToUrl } from "./utils";

// const cloudy

function Giphy({ description }) {
	let [gif, setGif] = useState("");

	const getData = async (url) => {
		if (description) {
			const data = await fetch(url).then((response) => response.json());
			//console.log(data);
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
			<div className="gif-wrapper">
				<img className="generated-gif" src={gif} alt="gif" />
			</div>
		</div>
	);
}

export default Giphy;
