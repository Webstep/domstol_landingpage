import React from "react";

const ExampleSlide = () => {
	return (
		<>
			{[...new Array(5)].map((_, index) => (
				<section>{index + 1}</section>
			))}
		</>
	);
};

export default ExampleSlide;
