import React from 'react';
import './BackEnd.css';
import ServicesCarousel from '../ServicesCarousel/ServicesCarousel';
import ServicesCard from '../ServicesCard/ServicesCard';
import API from '../ServicesCard/ServicesCardImg/generalapi.png';
import connector from '../ServicesCard/ServicesCardImg/connector.png';
import longProcess from '../ServicesCard/ServicesCardImg/longrunning.png';

const BackEnd = () => {
    return (
        <div className="backendCarouselFrame">
            
            <ServicesCarousel>
               {/* <div>
                   <ServicesCard 
                        imgPath = {API}
                        title = {"General purpose API"}
                        subTitle = {"Any kind of API service that is encapsulated and does any kind of operations."}
                        textBody = {"・Can be a back office API that just serves denormalized data from a number of other APIs or data storages."}
                   />
               </div> */}
               <div>
                   <ServicesCard 
                        imgPath = {connector}
                        title = {"API Connector/Adapter"}
                        subTitle = {"Used a lot by a lot companies that need to connect to different APIs from the same product type and transform the data or operations to a single internal format. "}
                        textBody = {"・Silenium.inc is a company that uses multiple payment providers and based on a payment event or a call needs to make a request to one of the providersIM GOING TO EXTEND BEYOND 150 CHARACTERS AND I SHOULD BE CUTED"}
                   />
               </div>
               {/* <div>
                   <ServicesCard 
                        imgPath = {API}
                        title = {"General purpose API"}
                        subTitle = {"Any kind of API service that is encapsulated and does any kind of operations."}
                        textBody = {"・Can be a back office API that just serves denormalized data from a number of other APIs or data storages."}
                   />
               </div> */}
               {/* <div>
                   <ServicesCard 
                        imgPath = {API}
                        title = {"General purpose API"}
                        subTitle = {"Any kind of API service that is encapsulated and does any kind of operations."}
                        textBody = {"・Can be a back office API that just serves denormalized data from a number of other APIs or data storages."}
                   />
               </div> */}
            </ServicesCarousel>

        </div>
    )
}

export default BackEnd;