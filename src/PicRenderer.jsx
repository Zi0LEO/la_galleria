import PicRow from "./PicRow";

const PicRenderer = (props) => {
	const rows = props.rows;

	return (
		<div className="h-full w-full flex flex-col justify-center content-center">
			{Array.from({ length: rows }).map((_, index) => (
				<PicRow key={index} />
			))}
		</div>
	);
};

export default PicRenderer;
