const Landing = () => {
	return (
		<div 
  className="col-span-2 row-start-1 overflow-hidden flex flex-row">
			<div 
      className="rounded-[200%] z-[1] bg-radial bg-[radial-gradient(rgb(226_223_210_/_100%),rgb(226_223_210_/_70%),rgb(226_223_210_/_20%))] w-full h-[200%] absolute left-[-50%] top-[-50%] flex justify-center items-center">
				<h3
        className="relative text-3xl left-[30svw] w-[50svw]">
					Benvenuto nella Galleria, il sito tutto italiano che ti permette di
					goderti al meglio la tua passione per la fotografia.
				</h3>
			</div>
			<img 
        className="object-cover w-[200%]"
        src="/images/landing.jpg" alt="sfondo" />
		</div>
	);
};

export default Landing;
