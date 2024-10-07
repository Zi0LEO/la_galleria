export default function ErrorPage() {
	return (
		<div className="h-[70svh] w-screen flex justify-center items-center">
			<div className="flex flex-col gap-5 justify-center items-center min-h-fit h-[50svh] w-[50svw] rounded-[40px] bg-[#e2dfd2]">
				<p className="text-xl font-bold">
					Ciao! Purtroppo questa pagina non esiste.
          </p>
        <p className="text-lg font-semibold text-center">
					Se hai cliccato un bottone per arrivare qui, probabilmente questa
					sezione sarà implementata a breve.<br />
          Grazie per aver visitato il nostro sito. Clicca sul logo in alto per
					tornare alla home
				</p>
			</div>
		</div>
	);
}
