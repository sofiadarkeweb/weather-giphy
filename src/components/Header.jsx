import React from "react";

const Header = () => {
	let thisYear = new Date().getFullYear();
	let thisDay = new Date().getDate();
	let thisMonth = new Date().getMonth();
	let thisHours = new Date().getHours();
	let thisMinute = new Date().getMinutes();

	let minutes = thisMinute < 10 ? "0" + thisMinute : thisMinute;
	let hours = thisHours < 10 ? "0" + thisHours : thisHours;
	let month = thisMonth + 1;

	return (
		<header>
			<p className="top">
				Stockholm, Sweden {hours}:{minutes} {thisDay}/{month}/{thisYear}
			</p>
		</header>
	);
};

export default Header;
