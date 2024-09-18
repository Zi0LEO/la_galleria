import ExplorePreview from "./Explore";
import React from "react";

const HomeComponent = (props) => {

	const text = props.text;
	let content;

	if (text === "Esplora") {
		content = ExplorePreview;
	} else if (text === "Shop") {
		//////////////////   content = ShopPreview;
	} else {
		// content = PersonalPreview;
	}

	return (
		<div className="nav-slice h-[calc(100svh-100px)] row-start-2 flex flex-col overflow-hidden border-2 border-black rounded-[30px] m-[5px_10px]">
			<div className="h-[80px] bg-[#2b2b2b] text-center flex justify-center items-center hover:bg-[#333]">
				<h4 className="text-[#e2dfd2]"> {text} </h4>
			</div>
			<div className="h-[calc(100%-80px)]">
				{content ? React.createElement(content) : null}
			</div>
		</div>
	);
};

export default HomeComponent;
