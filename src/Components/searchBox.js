import React from "react";
const searchBox = ({ searchChange }) => {
	return (
		<div className="pa2 f3">
			<input
				className="p3 ba b--green bg-lightest-blue"
				type="search"
				placeholder="Search Robots"
				onChange={searchChange}
			/>
		</div>
	);
};
export default searchBox;
