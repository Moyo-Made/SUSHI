import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

export default function App() {
	return (
		<Router>
		<div className="bg-[#ffffff6d]">
			<Navbar />
			<Hero />
		</div>
		</Router>
	);
}
