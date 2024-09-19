import { useState, useEffect } from "react";
import Pic from "./Pic";

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

	useEffect(() => {
		console.log(numPics); // Logs the updated number of pictures
	}, [numPics]);

	return (
		<div className="flex flex-row flex-auto h-[33%]">
			{Array.from({ length: numPics }).map((_, index) => (
				<Pic key={index} />
			))}
		</div>
	);
};

export default PicRow;
