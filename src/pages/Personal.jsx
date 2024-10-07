import { Profile } from "../BaseComponents";
import PicRenderer from "../PicHandler";
import { Button } from "../Utilities";

let imagePath = "/images/profileImage.jpg";
let profileBanner = "/images/profileBG.jpg";

export const PersonalPreview = () => {
	return (
		<div className="flex flex-col justify-between items-center w-full h-full flex-auto">
			<Profile imagePath={imagePath} profileBanner={profileBanner} />
			<div className="w-full items-center py-1 flex flex-col flex-auto min-h-fit">
				<Button text="Il mio profilo" />
				<Button text="Le mie foto" />
			</div>
			<div className="h-[40%] relative">
				<PicRenderer rows={1} picPerRow={3} />
			</div>
		</div>
	);
};

export default function PersonalPage() {
	return (
    <div className="flex flex-col items-center">
		<Profile
			imagePath={imagePath}
			profileBanner={profileBanner}
		/>
      <div className="flex w-[80svw] items-center">
      <PicRenderer rows={5} picPerRow={5} />
      </div>
    </div>
	);
}
