import PicRenderer from "../PicHandler";
import { SuggestedTags, PageNavigator } from "../Utilities";

export const ExplorePreview = () => {
	const rows = 3;
    const pics = 3;

	return <PicRenderer rows={rows} picPerRow={pics} />;
};

export default function Explore() {
  const currentUrl = window.location.href;

	return (
		<div className="flex flex-col items-center">
			<div className="h-[35vh] w-screen flex flex-col justify-center items-center bg-[url(/assets/exploreBanner.jpg)] bg-center bg-cover bg-no-repeat
			">
        <h2 className="text-[#e2dfd2] font-yellowtail font-normal font-thin text-6xl"> Esplora </h2> 
				<input
					placeholder="Inserisci tag"
					className="min-w-[30vw] max-w-[70vw] h-8 bg-[#e2dfd2] rounded-3xl text-center m-[15px]"
				/>
        <SuggestedTags />
			</div>
      <PageNavigator currentUrl={ currentUrl } />
      <div className="w-[80vw]">
      <PicRenderer rows={10} picPerRow={5} />
      </div>
		</div>
	);
}
