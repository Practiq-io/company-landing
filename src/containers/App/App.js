import React, { Component } from "react";
import "./App.css";
import MainContainer from "../PractiqProject/MainContainer";
import Footer from "../../components/Footer/Footer";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

export default class App extends Component {
	state = {
		show: false,
		toggle: () => {
			this.setState({ show: !this.state.show });
		},
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
