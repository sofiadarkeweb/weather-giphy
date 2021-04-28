import React, { useEffect } from "react";

function refreshPage() {
	window.location.reload(false);
}

const Button = (props) => {
	return (
		<div>
			<button className="refresh-btn" onClick={refreshPage}>
				{props.title}
			</button>
		</div>
	);
};

export default Button;
