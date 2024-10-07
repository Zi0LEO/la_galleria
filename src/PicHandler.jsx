import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function PicRenderer(props) {
	const rows = props.rows;
	const picPerRow = props.picPerRow;

	return (
		<div className="overflow-hidden h-full w-full min-h-0 flex flex-col justify-around content-center gap-1">
			{Array.from({ length: rows }).map((_, index) => (
				<PicRow key={index} picPerRow={picPerRow} />
			))}
		</div>
	);
};

export { PicRenderer };

const PicRow = (props) => {
	const [numPics, setNumPics] = useState();

	useEffect(() => {
		const updateNumPics = () => {
			if (window.innerWidth <= 768) {
				setNumPics(2);
			} else if (window.innerWidth <= 1280 && window.innerWidth > 768) {
				setNumPics(4);
			} else {
				setNumPics(props.picPerRow);
			}
		};

		updateNumPics();

		window.addEventListener("resize", updateNumPics);

		return () => window.removeEventListener("resize", updateNumPics);
	}, [props.picPerRow]);

	return (
		<div className="overflow-hidden min-h-0 flex flex-row flex-auto gap-1">
			{Array.from({ length: numPics }).map((_, index) => (
				<Pic key={index} />
			))}
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
			className="aspect-square cursor-pointer relative w-full flex-1 flex bg-cover justify-center items-center transition-all duration-500 ease-in-out image-container"
			style={{ backgroundImage: `url(${path})` }}
		>
			<img
				className="rounded-[20%] object-cover w-[75%] h-[75%] z-[1] transition-all duration-500 ease-in-out main-image"
				src={path}
				alt="a pic"
			/>
		</Link>
	);
};
