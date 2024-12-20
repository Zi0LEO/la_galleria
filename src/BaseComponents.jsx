import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

import { ExplorePreview } from "./pages/Explore";
import { PersonalPreview } from "./pages/Personal";
import { ShopPreview } from "./pages/Shop";

function HeaderFun() {
	return (
		<header className="sticky top-0 flex items-center bg-[url('../assets/purpleBG.jpg')] bg-no-repeat bg-[0%_30%] bg-cover h-[15dvh] w-screen z-[999] shadow-[0_5px_15px_rgba(0,0,0,0.4)]">
			<Link to="/">
				<h2 className="relative text-[#e2dfd2] font-yellowtail font-normal font-thin text-7xl px-[max(2%,20px)] cursor-pointer">
					La Galleria
				</h2>
			</Link>
			<div className="flex-grow h-[2px] bg-[#e2dfd2]"></div>
		</header>
	);
}

export const Header = React.memo(HeaderFun);

const HomeComponent = (props) => {
	const text = props.text;
	let content;
	let link;

	if (text === "Esplora") {
		content = ExplorePreview;
		link = "/explore";
	} else if (text === "Shop") {
		content = ShopPreview;
		link = "/shop";
	} else {
		content = PersonalPreview;
		link = "/personal";
	}

	return (
		<div className="min-h-fit w-[calc(100%-15px)] max-h-[85svh] flex flex-col overflow-hidden border-4 border-black rounded-[30px] m-[5px_10px] xl:w-[calc(33%-15px)]">
			<Link to={link}>
				<div className="cursor-pointer h-[80px] bg-[#2b2b2b] text-center flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-[#393e46]">
					<h4 className="text-xl text-[#e2dfd2]"> {text} </h4>
				</div>
			</Link>
			<div className="bg-[#e2dfd2] h-fit max-h-[calc(85svh-80px)]">
				{content ? React.createElement(content) : null}
			</div>
		</div>
	);
};

export { HomeComponent };

const Landing = () => {
	return (
		<div className="h-[85svh] overflow-hidden flex flex-row">
			<div className="rounded-full z-[1] bg-radial bg-[radial-gradient(rgb(226_223_210_/_100%),rgb(226_223_210_/_70%),rgb(226_223_210_/_40%))] w-full h-[85vh] absolute right-[50%] flex justify-center items-center animate-slideIn">
				<h3 className="relative text-3xl font-semibold left-[40svw] w-[50svw]">
					Benvenuto nella Galleria, il sito che ti permette di goderti al meglio
					la tua passione per la fotografia.
				</h3>
			</div>
			<img
				className="object-cover w-[200%]"
				src="/assets/landing.jpg"
				alt="sfondo"
			/>
		</div>
	);
};

export { Landing };

//<a href="https://www.vecteezy.com/free-vector/light-blue-background">Light Blue Background Vectors by Vecteezy</a>

function FooterFun() {
	return (
		<div className="bg-[#2b2b2b] h-[15vh] w-full">
			<div className="flex flex-row h-full justify-center pt-2">
				<div className="flex flex-col mx-6 gap-[10px]">
					<span>
						<p className="text-[#e2dfd2]">Disclaimer</p>
					</span>
					<span>
						<p className="text-[#e2dfd2]">Termini e condizioni</p>
					</span>
					<span>
						<p className="text-[#e2dfd2]">Informazioni</p>
					</span>
					<span>
						<p className="text-[#e2dfd2]">Fonti</p>{" "}
					</span>
				</div>

				<div className="flex flex-col mx-6 gap-[10px]">
					<span>
						<p className="text-[#e2dfd2]">Impostazioni</p>
					</span>
					<span>
						<p className="text-[#e2dfd2]">FAQ</p>
					</span>
					<span>
						<p className="text-[#e2dfd2]">Chat</p>
					</span>
				</div>

				<div className="flex flex-col mx-6 gap-[10px]">
					<span>
						{" "}
						<FacebookIcon style={{ color: "white" }} />{" "}
					</span>
					<span>
						{" "}
						<InstagramIcon style={{ color: "white" }} />{" "}
					</span>
					<span>
						{" "}
						<XIcon style={{ color: "white" }} />{" "}
					</span>
				</div>
			</div>
		</div>
	);
}

export const Footer = React.memo(FooterFun);

const Profile = (props) => {
	return (
		<>
			<div
				className="h-[30svh] flex flex-col items-center w-full justify-center bg-cover bg-center"
				style={{ backgroundImage: `url(${props.profileBanner})` }}
			>
				<img
					src={props.imagePath}
					className="h-5/6 rounded-full aspect-square shadow-2xl"
				/>
			</div>
			<span className="font-bold bg-opacity-:0 text-xl shrink-1 rounded-[20px] my-5 w-[80%] h-max bg-[#e2dfd2]">
				<p className="p-1 text-xl max-h-80 no-overflow">
<<<<<<< Updated upstream
    Questa è la mia bio, fa parte del mio profilo.
    Qui posso scrivere tutto quello che voglio sulle mie passioni e su cosa mi piace fotografare
=======
    Questa è la mia bio.
    Qui posso scrivere tutto quello che voglio su di me, sulle mie passioni, su cosa mi piace fotografare.
>>>>>>> Stashed changes
				</p>
			</span>
		</>
	);
};

Profile.propTypes = {
	profileBanner: PropTypes.string,
	imagePath: PropTypes.string,
};

export { Profile };
