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
		},
		toggleSpecificTask: (taskName, programmingType) => {
			this.setState({
				showWizard: true,
				specificTask: taskName,
				programmingType: programmingType,
			});
		},
		resetWizardTask: () => {
			this.setState({
				specificTask: "",
				programmingType: "",
			})
		},
		bodyIsVisible: false,
	};

	handleLoad = () => {
		this.setState({ bodyIsVisible: true });
	};

	componentDidMount() {
		window.addEventListener("load", this.handleLoad);
	}

	componentWillUnmount() {
		window.removeEventListener("load", this.handleLoad);
	}
	

	render() {
		return (
			<>
				<div
					style={{
						display: this.state.bodyIsVisible ? "none" : "block"
					}} 
					className="loader-position"
				>
					<div 
						className="loader-frame"
					>
						<div 
							style={{
								display: this.state.bodyIsVisible ? "none" : "block"
							}} 
							className="loader"
						>
						</div>
					</div>
					
				</div>
				
				<div
					style={{ 
						opacity: this.state.bodyIsVisible ? "1" : "0",
						position: this.state.bodyIsVisible ? "static" : "fixed"
					}}
					className="App"
				>
					<NavigationBar toggle={this.state.toggle} />
					<MainContainer wizard={this.state} />
					<Footer />
				</div>
			</>
		);
	}
}
