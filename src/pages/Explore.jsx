import PicRenderer from "../PicHandler";
import { SuggestedTags, PageNavigator } from "../Utilities";

export const ExplorePreview = () => {
	const rows = 3;
  const pics = 100;

	return <PicRenderer rows={rows} pics={pics} />;
};

export default function Explore() {
  const currentUrl = window.location.href;

	return (
		<div className="flex flex-col items-center">
			<div className="h-[25vh] w-screen flex flex-col justify-center items-center bg-[url(/images/explore_banner.jpg)]">
        <h2 className="text-[#e2dfd2] font-yellowtail font-normal font-thin text-6xl"> Esplora </h2> 
				<input
					placeholder="Inserisci tag"
					className="w-[30vw] h-8 bg-[#e2dfd2] rounded-3xl text-center m-[15px]"
				/>
        <SuggestedTags />
			</div>
      <PageNavigator currentUrl={ currentUrl } />
      <div className="h-100 w-[80vw]">
      <PicRenderer pics={50}/>
      </div>
		</div>
	);
}
