import { useParams } from "react-router-dom";
import PicRenderer from "../PicHandler";
import { Button } from "../Utilities";

export default function PicPage() {
	const { id } = useParams();
	const profileImage = "/images/profileImage.jpg";
	const profileBanner = "/images/profileBG.jpg";

	const path = `/pics/img${id}.jpg`;

	return (
		<div className="flex justify-between m-6 flex-wrap">
			<div className="flex flex-col w-[70vw]">
				<div className="overflow-hidden relative flex flex-col justify-center h-fit rounded-[40px] bg-[#e2dfd2]">
					<div
						className="bg-cover bg-center flex items-center p-5 mb-2 profile-banner relative"
						style={{ backgroundImage: `url(${profileBanner})` }}
					>
						<img src={profileImage} className="mx-10 rounded-full h-12 w-12" />
						<h2 className="font-bold text-xl"> Nome dell'autore </h2>
					</div>
					<img
						src={path}
						className="absolute h-[80svh] z-[-1] blur-lg w-full object-cover top-[92px] overflow-hidden"
					/>
					<span className="self-center rounded-[20px] h-fit w-fit overflow-hidden">
						<img src={path} className="object-contain w-full max-h-[80svh]" />
					</span>
          <span className="self-end w-fit mx-10 mt-10">
					<Button text="Aggiungi al carrello" />
          </span>
					<div className="my-5 h-fit min-h-44">
						<h2 className="ml-5 font-bold text-xl"> Commenti: </h2>
					</div>
				</div>
			</div>
			<div className="flex flex-col w-[25vw] h-[85vh] overflow-hidden rounded-[40px] sticky top-[15svh] bg-[#e2dfd2]">
				<PicRenderer rows={3} picPerRow={2} />
			</div>
		</div>
	);
}
