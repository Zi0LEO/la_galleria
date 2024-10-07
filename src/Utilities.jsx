export const Button = (props) => {
	const text = props.text;

	return (
		<button className="w-max min-w-60 cursor-pointer flex justify-center items-center text-lg bg-gradient-to-r from-pink-400 to-violet-400 h-auto p-[5px] rounded-[15px] transition-all duration 500 ease sm:m-2 sm:p-[15px] hover:shadow-xl">
			<h4> {text} </h4>
		</button>
	);
};

export const SuggestedTags = () => {
	return (
		<div className="w-[70svw] flex flex-row flex-wrap justify-center items-center overflow-scroll sm:flex-nowrap">
			<Button text="Nature" />
			<Button text="Tree" />
			<Button text="Sea" />
			<Button text="City" />
		</div>
	);
};

export const PageNavigator = (props) => {
return <>
  </>
}

