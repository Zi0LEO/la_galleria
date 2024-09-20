import { useState, useEffect } from "react";

const PicRenderer = (props) => {
	const rows = props.rows;

	return (
		<div className="h-full w-full flex flex-col justify-center content-center">
			{Array.from({ length: rows }).map((_, index) => (
				<PicRow key={index} />
			))}
		</div>
	);
};

export { PicRenderer };



const PicRow = () => {
	const [numPics, setNumPics] = useState();

	useEffect(() => {
		const updateNumPics = () => {
			if (window.innerWidth <= 768) {
				setNumPics(2);
			} else if (window.innerWidth <= 1280 && window.innerWidth > 768) {
				setNumPics(4);
			} else {
				setNumPics(3);
			}
		};

		updateNumPics();

		window.addEventListener("resize", updateNumPics);

		return () => window.removeEventListener("resize", updateNumPics);
	}, []);

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
	const path ="/pics/img" + randomInt + ".jpg";

	return (
		<div className="relative w-full h-full flex justify-center items-center bg-cover transition-all duration-500 ease-in-out image-container" style={{ backgroundImage: `url(${path})` }}> 
			<img className="rounded-[20%] w-[75%] h-[75%] object-cover z-[1] transition-all duration-500 ease-in-out main-image" src={path} alt="a pic" />
		</div>
	);
};
