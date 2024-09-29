import { useState, useEffect } from "react";

const PicRenderer = (props) => {
	const rows = props.rows;
  const pics = props.pics;

	return (
		<div className="h-full w-full flex flex-col justify-center content-center">
			{Array.from({ length: rows }).map((_, index) => (
				<PicRow key={index} pics={pics}/>
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
		<div className="flex flex-row flex-auto h-[33%]">
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
		<div
			className="cursor-pointer relative w-full h-64 flex justify-center items-center bg-cover transition-all duration-500 ease-in-out m-1 image-container"
			style={{ backgroundImage: `url(${path})` }}
		>
			<img
				className="rounded-[20%] w-[75%] h-[75%] object-cover z-[1] transition-all duration-500 ease-in-out main-image"
				src={path}
				alt="a pic"
			/>
		</div>
	);
};
