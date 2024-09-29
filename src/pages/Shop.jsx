import { Button } from "../Utilities";

export const ShopPreview = () => {
	function getBalance() {
		return Math.floor(Math.random() * 10000.0) / 100.0;
	}

	let balance = getBalance();
	return (
		<div className="flex flex-col justify-center items-center h-full">
			<div className="flex flex-col justify-center items-center h-[15%] w-[80%] rounded-[20px] mt-[10px]">
				<h3 className="text-2xl font-bold mb-[3pxj">Saldo corrente</h3>
				<h3 className=" text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
					{balance}
				</h3>
			</div>
			<Button text="Aggiungi foto" />
			<Button text="Modifica saldo" />
			<Button text="Guida allo shop" />
			<Button text="Le tue preferite" />
			<Button text="Carrello" />
		</div>
	);
};
