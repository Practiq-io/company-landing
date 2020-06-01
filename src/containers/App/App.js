import React from "react";
import "./App.css";
import MainContainer from "../PractiqProject/MainContainer";
import Footer from "../../components/Footer/Footer";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

function App() {
	return (
		<div className="App">
			<NavigationBar />

			<MainContainer />

			<Footer />
		</div>
	);
}

export default App;
