import { Header, HomeComponent, Landing, Footer } from "../BaseComponents";

function Home() {
	return (
		<div className="Home">
			<Header />
			<div className="home-main overflow-hidden w-screen flex flex-col">
				<Landing />
				<div className="w-full flex flex-col justify-around items-center xl:flex-row">
					<HomeComponent text="Esplora" />
					<HomeComponent text="Shop" />
					<HomeComponent text="Area Personale" />
				</div>
			</div>
      <Footer />
		</div>
	);
}

export default Home;
