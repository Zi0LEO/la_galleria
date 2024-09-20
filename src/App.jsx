import "./App.css";
import Header from "./Header";
import HomeComponent from "./HomeComponent";
import Landing from "./Landing";


function App() {
	return (
		<div className="App">
			<Header />
			<div className="home-main overflow-hidden w-screen grid grid-cols-[repeat(3,1fr)] grid-rows-[repeat(2,85svh)]">
        <Landing />
				<HomeComponent text="Esplora" url="explore.html" />
				<HomeComponent text="Area Personale" url="Personal.html" />
			</div>
		</div>
	);
}

export default App;
