import React from "react";

const Header = () => {
	let thisYear = new Date().getFullYear();
	let thisDay = new Date().getDate();
	let thisMonth = new Date().getDay();
	let thisHours = new Date().getHours();
	let thisMinute = new Date().getMinutes();

	// function zeros() {
	// 	if (thisMinute < 10) thisMinute = "0" + thisMinute;
	// }
	// zeros();

	let minutes = thisMinute < 10 ? "0" + thisMinute : thisMinute;
	let hours = thisHours < 10 ? "0" + thisHours : thisHours;

	return (
		<header>
			<p className="top">
				Stockholm, Sweden {hours}:{minutes} {thisDay}/{thisMonth}/{thisYear}
			</p>
		</header>
	);
};

export default Header;
