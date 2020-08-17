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
import AOS from "aos";
import "aos/dist/aos.css";

class MainContainer extends Component {

	componentDidMount() {
		AOS.init({
			once: true,
			easing: "ease-out-cubic",
			duration: 800,
			disable: function() {
				let maxWidth = 800;
				return window.innerWidth < maxWidth;
			}
		});
	}

	render() {
		const {
			showWizard,
			toggle,
			toggleSpecificTask,
			specificTask,
			programmingType,
			resetWizardTask,
		} = this.props.wizard;
		const animationByClass = (name, delay, duration, trigger) => {
			return {
				delay: delay,
				name: name,
				duration: duration,
				trigger: trigger,
			};
		};

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
						resetWizardTask={resetWizardTask}
						specificTask={specificTask}
						programmingType={programmingType}
						showWizard={showWizard}
						toggle={toggle}
					/>
				</CSSTransition>

				<HeroBlock toggle={toggle} />
				<PromoBlock animationSettings={animationByClass} />
				<TaskBlock animationSettings={animationByClass} toggle={toggle} />
				<ServicesBlock
					toggle={toggle}
					toggleSpecificTask={toggleSpecificTask}
				/>
				<HowItWorksBlock />
				<WhoBlock />
				<MediumBlock />
			</>
		);
	}
}

export default MainContainer;
