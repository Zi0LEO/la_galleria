import "./App.css";
import { Header, HomeComponent, Landing } from "./BaseComponents";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="home-main overflow-hidden w-screen flex flex-col">
				<Landing />
				<div className="w-full flex flex-col justify-around items-center xl:flex-row">
					<HomeComponent text="Esplora" url="explore.html" />
					<HomeComponent text="Area Personale" url="Personal.html" />
					<HomeComponent text="Area Personale" url="Personal.html" />
				</div>
			</div>
		</div>
	);
}

export default App;
