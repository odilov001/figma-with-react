import FirstSection from "./first-section";
import Footer from "./footer";
import Info from "./info";
import SecondSection from "./second-section";
import ThirdSection from "./third-section";

const { default: Header } = require("./header");

const { default: Navbar } = require("./navbar");

function Render() {
	return (
		<>
			<Navbar />
			<Header />
			<FirstSection />
			<SecondSection />
			<ThirdSection />
			<Footer />
			<Info />
		</>
	);
}

export default Render;
