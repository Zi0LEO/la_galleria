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

export default Pic;
