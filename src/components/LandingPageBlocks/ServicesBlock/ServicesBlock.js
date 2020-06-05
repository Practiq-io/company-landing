import React, { Component } from "react";
import "./ServicesBlock.css";
import FrontEnd from "./FrontEnd/FrontEnd";
import BackEnd from "./BackEnd/BackEnd";

class ServicesBlock extends Component {

    render(){

        return (

            <section className="SB-Section">
    
                <content className="upperServicesBox">

                    <h2 className="servicesTitle">What we can build for you</h2>

                    <div className="servicesButtonBox">

                        <p className="frontendButton">Frontend</p>
                        <p className="backendButton">Backend</p>

                        <div className="buttonSwitch"></div>

                    </div>

                </content>
            
                <content className="lowerServicesBox">
                    
                    <BackEnd />
                    <FrontEnd />
                
                </content>


    
            </section>

        );

    }

};

export default ServicesBlock;
