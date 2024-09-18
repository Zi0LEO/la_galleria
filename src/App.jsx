import "./App.css";
import Header from "./Header";
import HomeComponent from "./HomeComponent";
import Landing from "./Landing";


function App() {
	return (
		<div className="App">
			<Header />
			<div className="home-main w-screen grid grid-cols-[repeat(2,50%)] grid-rows-[repeat(2,90svh)]">
        <Landing />
				<HomeComponent text="Esplora" url="explore.html" />
				<HomeComponent text="Area Personale" url="Personal.html" />
			</div>
		</div>
	);
}

export default App;
