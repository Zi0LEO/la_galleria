import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PicRenderer = (props) => {
	const rows = props.rows;
	const pics = props.pics;

	return (
		<div className="overflow-hidden h-full w-full min-h-0 flex flex-col justify-around content-center gap-1">
			{Array.from({ length: rows }).map((_, index) => (
				<PicRow key={index} pics={pics} />
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
				setNumPics(props.pics);
			}
		};

		updateNumPics();

		window.addEventListener("resize", updateNumPics);

		return () => window.removeEventListener("resize", updateNumPics);
	}, [props.pics]);

	return (
		<div className="overflow-hidden flex-1 min-h-0 flex flex-row gap-1 flex-wrap">
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
			className="min-h-0 object-cover aspect-square overflow-hidden cursor-pointer relative w-full flex-1 flex bg-cover justify-center items-center transition-all duration-500 ease-in-out image-container"
			style={{ backgroundImage: `url(${path})` }}
		>
			<img
				className="rounded-[20%] w-[75%] h-[75%] z-[1] transition-all duration-500 ease-in-out main-image"
				src={path}
				alt="a pic"
			/>
		</Link>
	);
};
