const Button = (props) => {
	const text = props.text;

	return (
		<div className="flex justify-center items-center text-lg bg-gradient-to-r from-pink-400 to-violet-400 h-20 w-[80%] m-2 rounded-[15px] transition-all duration 500 ease hover:shadow-xl">
			<h4> {text} </h4>
		</div>
	);
};

export { Button };
