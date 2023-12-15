import Render from "./components";
function App() {
	// eslint-disable-next-line no-unused-vars
	function img(link, alt) {
		return <img src={link} alt={alt} />;
	}

	return (
		<div className="App">
			<Render />
		</div>
	);
}

export default App;
