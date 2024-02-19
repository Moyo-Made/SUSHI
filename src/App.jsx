import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Categories from "./Components/Categories";
import Subcategory from "./Components/Subcategory";
import Testimonials from "./Components/Testimonials";

export default function App() {
	return (
		<Router>
		<div className="bg-[#ffffff6d]">
			<Navbar />
			<Hero />
			<Categories />
			<Subcategory />
			<Testimonials />
		</div>
		</Router>
	);
}
