import React, { Component } from "react";
import "./App.css";
import MainContainer from "../PractiqProject/MainContainer";
import Footer from "../../components/Footer/Footer";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

export default class App extends Component {
	state = {
		showWizard: false,
		toggle: () => {
			this.setState({ showWizard: !this.state.showWizard });
		}
	};

	render() {
		return (
			<div className="App">
				<NavigationBar />
				
				<MainContainer wizard={this.state} />

				<Footer />
			</div>
		);
	}
}
