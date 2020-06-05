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
               <div>
                   <ServicesCard 
                        imgPath = {API}
                        title = {"General purpose API"}
                        subTitle = {"Any kind of API service that is encapsulated and does any kind of operations."}
                        textBody = {"・Can be a back office API that just serves denormalized data from a number of other APIs or data storages."}
                   />
               </div>
               <div>
                   <ServicesCard 
                        imgPath = {connector}
                        title = {"API Connector/Adapter"}
                        subTitle = {"・Silenium.inc is a company that uses multiple payment providers and based on a payment event or a call needs to make a request to one of the providers... More"}
                        textBody = {"・Can be a back office API that just serves denormalized data from a number of other APIs or data storages."}
                   />
               </div>
               <div>
                   <ServicesCard 
                        imgPath = {API}
                        title = {"General purpose API"}
                        subTitle = {"Any kind of API service that is encapsulated and does any kind of operations."}
                        textBody = {"・Can be a back office API that just serves denormalized data from a number of other APIs or data storages."}
                   />
               </div>
               <div>
                   <ServicesCard 
                        imgPath = {API}
                        title = {"General purpose API"}
                        subTitle = {"Any kind of API service that is encapsulated and does any kind of operations."}
                        textBody = {"・Can be a back office API that just serves denormalized data from a number of other APIs or data storages."}
                   />
               </div>
            </ServicesCarousel>

        </div>
    )
}

export default BackEnd;