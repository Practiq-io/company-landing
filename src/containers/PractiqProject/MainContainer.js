import React,{Component} from 'react';
import HeroBlock from '../../components/LandingPageBlocks/HeroBlock/HeroBlock';
import PromoBlock from '../../components/LandingPageBlocks/PromoBlock/PromoBlock';
import TaskBlock from '../../components/LandingPageBlocks/TaskBlock/TaskBlock';
import ServicesBlock from '../../components/LandingPageBlocks/ServicesBlock/ServicesBlock';
import HowItWorksBlock from '../../components/LandingPageBlocks/HowItWorksBlock/HowItWorksBlock';
import WhoBlock from '../../components/LandingPageBlocks/WhoBlock/WhoBlock';
import MediumBlock from '../../components/LandingPageBlocks/MediumBlock/MediumBlock';
import WizardModal from '../../components/Wizard/WizardModal';


class MainContainer extends Component {

    render(){

        const {displayWizard, toggleWizard} = this.props;

        return (
            <>
               <WizardModal toggleWizard={toggleWizard} displayWizard={displayWizard}/>
               <HeroBlock toggleWizard={toggleWizard}/>
               <PromoBlock/>
               <TaskBlock/>
               <ServicesBlock/>
               <HowItWorksBlock/>
               <WhoBlock/>
               <MediumBlock/>
            </>
        )
    }
}

export default MainContainer;