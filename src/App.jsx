import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Categories from "./Components/Categories";
import Subcategory from "./Components/Subcategory";
import Testimonials from "./Components/Testimonials";
import Services from "./Components/Services";
import Footer from "./Components/Footer";

export default function App() {
	return (
		<Router>
			<div className="bg-[#ffffff6d] overflow-x-hidden">
				<Navbar />
				<Hero />
				<Categories />
				<Subcategory />
				<Testimonials />
				<Services />
				<Footer />
			</div>
		</Router>
	);
}
