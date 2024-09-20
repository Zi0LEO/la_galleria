import ExplorePreview from "./Explore";
import React from "react";
import PersonalPreview from "./Personal";

const Header = () => {

	return (
		<header className="sticky top-0 flex items-center bg-[url('../images/purpleBG.png')] bg-no-repeat bg-[0%_30%] bg-cover h-[15dvh] w-screen z-[999] shadow-[0_5px_15px_rgba(0,0,0,0.4)]">
			<h2 
        className="relative text-[#e2dfd2] font-yellowtail font-normal font-thin text-7xl px-[max(2%,20px)]"> La Galleria </h2>
      <div 
  className="flex-grow h-[2px] bg-[#e2dfd2]"></div>
		</header>
	) 
};

export { Header };



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
		<div className="min-h-28 w-[calc(100%-15px)] h-[85svh] flex flex-col overflow-hidden border-4 border-black rounded-[30px] m-[5px_10px] xl:w-[calc(33%-15px)]">
			<div className="h-[80px] bg-[#2b2b2b] text-center flex justify-center items-center hover:bg-[#333]">
				<h4 className="text-xl text-[#e2dfd2]"> {text} </h4>
			</div>
			<div className="bg-[#e2dfd2] overflow-hidden h-full">
				{content ? React.createElement(content) : null}
			</div>
		</div>
	);
};

export { HomeComponent };



const Landing = () => {
	return (
		<div 
  className="h-[85svh] overflow-hidden flex flex-row">
			<div 
      className="rounded-[200%] z-[1] bg-radial bg-[radial-gradient(rgb(226_223_210_/_100%),rgb(226_223_210_/_70%),rgb(226_223_210_/_20%))] w-full h-[200%] absolute left-[-50%] top-[-50%] flex justify-center items-center">
				<h3
        className="relative text-3xl left-[30svw] w-[50svw]">
					Benvenuto nella Galleria, il sito tutto italiano che ti permette di
					goderti al meglio la tua passione per la fotografia.
				</h3>
			</div>
			<img 
        className="object-cover w-[200%]"
        src="/images/landing.jpg" alt="sfondo" />
		</div>
	);
};

export { Landing };
