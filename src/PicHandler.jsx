import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function PicRenderer(props) {
	const [numCols, setNumCols] = useState();

	useEffect(() => {
		const updateNumCols = () => {
			if (window.innerWidth <= 768) {
				setNumCols(2);
			} else if (window.innerWidth <= 1280 && window.innerWidth > 768) {
				setNumCols(4);
			} else {
				setNumCols(props.cols);
			}
		};

		updateNumCols();

		window.addEventListener("resize", updateNumCols);

		return () => window.removeEventListener("resize", updateNumCols);
	});

	return (
		<div className="flex gap-1">
			{Array.from({ length: numCols }).map((_, index) => (
				<PicColumn key={index} />
			))}
		</div>
	);
}

PicRenderer.propTypes = {
	cols: PropTypes.int,
};

PicRenderer.defaultProps = {
	cols: 3,
};

export default PicRenderer;

// to do: calculate height of parent and keep rendering images till it is full
const PicColumn = () => {

	return (
		<div className="flex flex-col">
		</div>
	);
};

const Pic = () => {
	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}
	let randomInt = getRandomInt(22);
	const path = "/pics/img" + randomInt + ".jpg";

	return (
		<Link
			to={`/explore/${randomInt}`}
			className="h-fit max-h-[calc((85svh-86px)/4)] min-w-[calc(20%-8px)] flex-grow aspect-square cursor-pointer relative flex bg-cover justify-center items-center transition-all duration-500 ease-in-out image-container"
			style={{ backgroundImage: `url(${path})` }}
		>
			<img
				className="object-cover p-[15%] rounded-[20%] z-[1] transition-all duration-500 ease-in-out main-image"
				src={path}
				alt="a pic"
			/>
		</Link>
	);
};
