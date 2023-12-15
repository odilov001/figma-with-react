import "./App.css";
import Navbar from "./components/navbar";

function App() {
	// eslint-disable-next-line no-unused-vars
	function img(link, alt) {
		return <img src={link} alt={alt} />;
	}

	return (
		<div className="App">
			<Navbar />
		</div>
	);
}

export default App;
