const Pic = () => {
	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}
	let randomInt = getRandomInt(22);
	const path ="/pics/img" + randomInt + ".jpg";

	return (
		<div className="image-container" style={{ backgroundImage: `url(${path})` }}> 
			<img className="main-image" src={path} alt="a pic" />
		</div>
	);
};

export default Pic;
