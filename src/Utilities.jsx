export const Button = (props) => {
	const text = props.text;

	return (
		<div className="flex justify-center items-center text-lg bg-gradient-to-r from-pink-400 to-violet-400 h-auto p-[15px] w-[80%] m-2 rounded-[15px] transition-all duration 500 ease hover:shadow-xl">
			<h4> {text} </h4>
		</div>
	);
};

export const SuggestedTags = () => {
	return (
		<div className="w-4/6 flex flex-row wrap">
			<Button text="Nature" />
			<Button text="Tree" />
			<Button text="Sea" />
			<Button text="City" />
		</div>
	);
};
