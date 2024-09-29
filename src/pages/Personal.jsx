import { PicRenderer } from "../PicHandler";
import { Button } from "../Utilities";

export const PersonalPreview = () => {
	let imagePath = "/images/profileImage.jpg";
  let profileBanner = "/images/profileBG.jpg";

	return (
		<div className="flex flex-col justify-between items-center w-full h-full">
			<div className="flex flex-col items-center w-full justify-center overflow-hidden grow-0 shrink-0 bg-cover" style={{ backgroundImage: `url(${profileBanner})`}}>
				<img
					src={imagePath}
					className="max-h-80 rounded-full aspect-square object-cover mt-[8px] mb-[8px] shadow-2xl"
				/>
        </div>
				<p className="p-3 text-xl max-h-80">
					La mia bio: cose a caso per riempire spazio. Forza lupi sempre
				</p>
			
			<div className="w-full items-center flex flex-col grow-0 shrink-0">
				<Button text="Il mio profilo" />
				<Button text="Le mie foto" />
			</div>
			<div className="flex grow-0 shrink-0">
				<PicRenderer rows={1} pics={3}/>
			</div>
		</div>
	);
};
