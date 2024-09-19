import PicRow from "./PicRow";

const ExplorePreview = () => {
	const rows = 3;

	return (
		<div className="h-full w-full flex flex-col justify-center content-center">
      {Array.from({ length: rows }).map((_, index) => (
			<PicRow key={index} />
      ))}
		</div>
	);
};
export default ExplorePreview;
