import React from "react";

const scroll = (props) => {
	return (
		<div
			style={{
				overflowY: "scroll",
				margin: "200px",
				marginTop: "0px",
				border: "10px solid black",
				height: "500px",
			}}
		>
			{props.children}
		</div>
	);
};

export default scroll;
