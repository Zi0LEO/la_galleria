import { useParams } from "react-router-dom";
import PicRenderer from "../PicHandler";

export default function PicPage() {
	const { id } = useParams();
	const profileImage = "/images/profileImage.jpg";

	const path = `/pics/img${id}.jpg`;
	return (
		<div className="flex justify-between m-6">
			<div className="flex flex-col w-[70vw]">
				<div
					className="flex flex-col justify-start
			 bg-[#e2dfd2] h-fit rounded-[40px]"
				>
					<div className="flex items-center p-3">
						<img
							src={profileImage}
							className="mx-10 mr-10 rounded-full h-12 w-12"
						/>
						<h2 className="font-bold text-xl"> Nome dell'autore </h2>
					</div>
					<img
						src={path}
						className="ml-0 object-contain w-full max-h-[85svh]"
					/>
					<div className="h-[85svh]">
						<h2> Commenti: </h2>
					</div>
				</div>
			</div>
      <div className="flex flex-col w-[25vw] h-[85vh] rounded-[40px] sticky top-[15svh] bg-[#e2dfd2]">
      <PicRenderer rows={3} picPerRow={2}/>
		</div>
		</div>
	);
}
