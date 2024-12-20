import { useParams } from "react-router-dom";
import PicRenderer from "../PicHandler";
import { Button } from "../Utilities";

export default function PicPage() {
	const { id } = useParams();
	const profileImage = "/assets/profileImage.jpg";
	const profileBanner = "/assets/profileBG.jpg";

	const path = `/pics/img${id}.jpg`;

	return (
		<div className="flex flex-col justify-around m-4 gap-5 flex-wrap xl:flex-row">
			<div className="flex flex-col w-[100svw-40px] xl:w-[70vw]">
				<div className="overflow-hidden relative flex flex-col justify-center h-fit rounded-[40px] bg-[#e2dfd2]">
					<div
						className="bg-cover bg-center flex items-center p-5 mb-2 profile-banner relative"
						style={{ backgroundImage: `url(${profileBanner})` }}
					>
						<img src={profileImage} className="mx-8 rounded-full aspect-squars w-20" />
						<h2 className="font-bold text-xl p-[10px] bg-[#e2dfd2] rounded-[10px]"> Nome dell'autore </h2>
					</div>
					<img
						src={path}
						className="absolute max-h-[80svh] z-[-1] blur-lg w-full object-cover top-[92px] overflow-hidden"
					/>
					<span className="self-center justify-self-center rounded-[20px] h-fit w-fit overflow-hidden">
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
			<div className="flex flex-col w-[100svw-40px] h-[85vh] overflow-hidden rounded-[40px] sticky top-[15svh] bg-[#e2dfd2] xl:w-[25svw]">
				<PicRenderer rows={4} picPerRow={2} />
			</div>
		</div>
	);
}
