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
       
        const {showWizard, toggle} = this.props.wizard;
       
        return (
            <>
               {showWizard ? <WizardModal toggle={toggle} /> : null}
               <HeroBlock toggle={toggle} />
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