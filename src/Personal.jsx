import PicRenderer from "./PicRenderer";
import Button from "./Button";

const PersonalPreview = () => {
	let imagePath = "/images/profileImage.jpg";
  let profileBanner = "/images/profileBG.jpg";

	return (
		<div className="flex flex-col justify-between items-center w-full h-full">
			<div className="flex flex-col items-center w-full mt-[30px] justify-center overflow-hidden bg-cover" style={{ backgroundImage: `url(${profileBanner})`}}>
				<img
					src={imagePath}
					className="max-h-80 rounded-full aspect-square object-cover"
				/>
        </div>
				<p className="p-3 text-xl max-h-80">
					La mia bio: cose a caso per riempire spazio. Forza lupi sempre
				</p>
			
			<div className="w-full items-center flex flex-col">
				<Button text="Il mio profilo" />
				<Button text="Le mie foto" />
			</div>
			<div className="flex">
				<PicRenderer rows={1} />
			</div>
		</div>
	);
};

export default PersonalPreview;
