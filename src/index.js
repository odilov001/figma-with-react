import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./assets/bundle.css";
import "./assets/font-family.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
