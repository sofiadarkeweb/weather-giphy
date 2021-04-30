import React from "react";

const Header = () => {
	let thisYear = new Date().getFullYear();
	let thisDay = new Date().getDate();
	let thisMonth = new Date().getDay();
	let thisHours = new Date().getHours();
	let thisMinute = new Date().getMinutes();

	return (
		<header>
			<p className="top">
				Stockholm, Sweden {thisHours}:{thisMinute} {thisDay}/{thisMonth}/
				{thisYear}
			</p>
		</header>
	);
};

export default Header;
