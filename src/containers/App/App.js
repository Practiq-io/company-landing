import React,{ Component } from "react";
import "./App.css";
import MainContainer from "../PractiqProject/MainContainer";
import Footer from "../../components/Footer/Footer";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

export default class App extends Component {

	state = {
		displayWizard: false
	}
	
	toggleWizard = () => {
		this.setState({displayWizard:!this.state.displayWizard})
	}

	render(){

		const {displayWizard} = this.state;

		return (

			<div className="App">
				<NavigationBar />
	
				<MainContainer displayWizard={displayWizard} toggleWizard={this.toggleWizard}/>
	
				<Footer />
			</div>
		);
	}

}

