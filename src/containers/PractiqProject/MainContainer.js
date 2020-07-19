import React, { Component } from "react";
import HeroBlock from "../../components/LandingPageBlocks/HeroBlock/HeroBlock";
import PromoBlock from "../../components/LandingPageBlocks/PromoBlock/PromoBlock";
import TaskBlock from "../../components/LandingPageBlocks/TaskBlock/TaskBlock";
import ServicesBlock from "../../components/LandingPageBlocks/ServicesBlock/ServicesBlock";
import HowItWorksBlock from "../../components/LandingPageBlocks/HowItWorksBlock/HowItWorksBlock";
import WhoBlock from "../../components/LandingPageBlocks/WhoBlock/WhoBlock";
import MediumBlock from "../../components/LandingPageBlocks/MediumBlock/MediumBlock";
import WizardModal from "../../components/Wizard/WizardModal";
import "./MainContainer.css";
import { CSSTransition } from "react-transition-group";



class MainContainer extends Component {
	render() {
		const { showWizard, toggle } = this.props.wizard;

		return (
			<>
				<div
					className="wizard-backdrop"
					style={{
						visibility: showWizard ? "visible" : "hidden",
						opacity: showWizard ? "0.4" : "0",
					}}
				></div>

				<CSSTransition
					in={showWizard}
					timeout={300}
					classNames="wizardModal"
					unmountOnExit
				>

					<WizardModal
						showWizard={showWizard}
						toggle={toggle}
					/>
                
				</CSSTransition>
					
				

				<HeroBlock toggle={toggle} />
				<PromoBlock />
				<TaskBlock />
				<ServicesBlock />
				<HowItWorksBlock />
				<WhoBlock />
				<MediumBlock />
			</>
		);
	}
}

export default MainContainer;
