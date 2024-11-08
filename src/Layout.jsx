import { Outlet } from "react-router-dom";
import { Header, Footer } from "./BaseComponents";

export default function Layout() {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
