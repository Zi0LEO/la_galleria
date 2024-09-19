const PersonalPreview = () => {
	let imagePath = "/images/profileImage.jpg";

	return (
		<div className="flex flex-col justify-center items-center w-full h-full">
			<div className="rounded-full overflow-hidden">
				<img src={imagePath} className="object-cover" />
			</div>
			<div className="p-3">
				<p className="text-xl">La mia bio: cose a caso per riempire spazio. Forza lupi sempre</p>
			</div>
		</div>
	);
};

export default PersonalPreview;
