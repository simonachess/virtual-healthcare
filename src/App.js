import Articles from "./components/Articles";
import Download from "./components/Download";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Providers from "./components/Providers";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="container px-36 mx-auto pt-5">
			<NavBar />
			<Home />
			<Services />
			<Providers />
			<Download />
			<Testimonials />
			<Articles />
			<Footer />
		</div>
	);
}

export default App;
