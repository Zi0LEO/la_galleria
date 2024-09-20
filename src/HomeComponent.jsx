import ExplorePreview from "./Explore";
import React from "react";
import PersonalPreview from "./Personal";

const HomeComponent = (props) => {

	const text = props.text;
	let content;

	if (text === "Esplora") {
		content = ExplorePreview;
	} else if (text === "Shop") {
		//content = ShopPreview;
	} else {
		content = PersonalPreview;
	}

	return (
		<div className="min-h-28 nav-slice h-full flex flex-col overflow-hidden border-2 border-black rounded-[30px] m-[5px_10px]">
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
