const { default: Header } = require( "./header" );
const { default: Navbar } = require( "./navbar" );

 function Render() {
	return (
		<>
			<Navbar />
			<Header />
		</>
	);
}


export default Render;