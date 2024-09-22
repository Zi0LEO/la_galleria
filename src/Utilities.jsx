const Button = (props) => {
	const text = props.text;

	return (
		<div className="flex justify-center items-center bg-gradient-to-r from-pink-400 to-violet-400 h-20 w-[80%] m-4 rounded-[20px]">
			<h4> {text} </h4>
		</div>
	);
};

export { Button };
