import React,{Component} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroBlock from '../../components/LandingPageBlocks/HeroBlock/HeroBlock';
import PromoBlock from '../../components/LandingPageBlocks/PromoBlock/PromoBlock';
import TaskBlock from '../../components/LandingPageBlocks/TaskBlock/TaskBlock';
import ServicesBlock from '../../components/LandingPageBlocks/ServicesBlock/ServicesBlock';
import HowItWorksBlock from '../../components/LandingPageBlocks/HowItWorksBlock/HowItWorksBlock';
import WhoBlock from '../../components/LandingPageBlocks/WhoBlock/WhoBlock';
import MediumBlock from '../../components/LandingPageBlocks/MediumBlock/MediumBlock';
import WizardModal from '../../components/Wizard/WizardModal';


class MainContainer extends Component {

    componentDidMount() {
        AOS.init({
            mirror: true,
            easing: 'ease-out-cubic',
            duration:800
        });
        console.log(AOS);
    }
    

    render(){
       
        const {show, toggle} = this.props.wizard;
       
        return (
            <>
               {show ? <WizardModal toggle={toggle} /> : null}
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
