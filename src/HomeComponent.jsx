import ExplorePreview from "./Explore";
import React from "react";
import PersonalPreview from "./Personal";

const HomeComponent = (props) => {

	const text = props.text;
	let content;
  let position;

	if (text === "Esplora") {
		content = ExplorePreview;
    position = 2;
	} else if (text === "Shop") {
		//content = ShopPreview;
	} else {
		content = PersonalPreview;
    position = 3;
	}

	return (
		<div className="min-h-28 w-[calc(100%-15px)] h-[85svh] flex flex-col overflow-hidden border-2 border-black rounded-[30px] m-[5px_10px] xl:w-[calc(33%-15px)]">
			<div className="h-[80px] bg-[#2b2b2b] text-center flex justify-center items-center hover:bg-[#333]">
				<h4 className="text-xl text-[#e2dfd2]"> {text} </h4>
			</div>
			<div className="bg-[#e2dfd2] overflow-hidden h-full">
				{content ? React.createElement(content) : null}
			</div>
		</div>
	);
};

export default HomeComponent;
