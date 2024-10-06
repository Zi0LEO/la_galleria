import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function PicRenderer(props) {
	const rows = props.rows;
	const pics = props.pics;

	return (
		<div className="flex gap-1">
			{Array.from({ length: 3 }).map((_, index) => (
				<PicColumn key={index} pics={pics/3} />
			))}
		</div>
	);
}

PicRenderer.propTypes = {
	rows: PropTypes.int,
	pics: PropTypes.int,
};

export default PicRenderer;

const PicColumn = (props) => {

  return <div className="flex flex-col" >
  </div>

}

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
