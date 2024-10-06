import PicRenderer from "../PicHandler";
import { Button } from "../Utilities";

export const PersonalPreview = () => {
	let imagePath = "/images/profileImage.jpg";
	let profileBanner = "/images/profileBG.jpg";

	return (
		<div className="flex flex-col justify-between items-center w-full h-full flex-auto">
			<div
				className="flex flex-col h-[30svh] items-center w-full justify-center bg-cover object-contain"
				style={{ backgroundImage: `url(${profileBanner})` }}
			>
				<img
					src={imagePath}
					className="h-5/6 rounded-full aspect-square shadow-2xl"
				/>
			</div>
			<div className="shrink-1">
				<p className="p-2 text-xl max-h-80">
					La mia bio: cose a caso per riempire spazio. Forza lupi sempre
				</p>
			</div>

			<div className="w-full items-center py-1 flex flex-col flex-auto min-h-fit">
				<Button text="Il mio profilo" />
				<Button text="Le mie foto" />
			</div>
      <p className="p-3 text-2xl font-superbold"> Le più apprezzate </p>
			<PicRenderer pics={4} />
		</div>
	);
};
