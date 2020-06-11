import React from "react";
import ServicesCarousel from "../ServicesCarousel/ServicesCarousel";
import ServicesCard from "../ServicesCard/ServicesCard";
import API from "../ServicesCard/ServicesCardImg/generalapi.png";
import connector from "../ServicesCard/ServicesCardImg/connector.png";
import longProcess from "../ServicesCard/ServicesCardImg/longrunning.png";
import landingComponentIcon from '../ServicesCard/ServicesCardImg/landingSPAcomponent.png';

const BackEnd = () => {
	return (
		<div className="backendCarouselFrame">
			<ServicesCarousel>
				<ServicesCard
					id={"api"}
					imgPath={API}
					title={"General purpose API"}
					subTitle={
						"Any kind of API service that is encapsulated and does any kind of operations."
					}
					textBody={
						"・Can be a back office API that just serves denormalized data from a number of other APIs or data storages."
					}
				/>

				<ServicesCard
					id={"connector"}
					imgPath={connector}
					title={"API Connector/Adapter"}
					subTitle={
						"Used a lot by a lot companies that need to connect to different APIs from the same product type and transform the data or operations to a single internal format."
					}
					textBody={
						"・Silenium.inc is a company that uses multiple payment providers and based on a payment event or a call needs to make a request to one of the providers・Flywithus is a flights ticket seller and needs to integrate new airline by integrating with their API"
					}
				/>

				<ServicesCard
					id={"longprocess"}
					imgPath={longProcess}
					title={"Long running process"}
					subTitle={
						"Any kind of background process that is consuming data from some source and performing some operation upon it."
					}
					textBody={
						"・A process that is listening to a stock market, aggregating the data and saving it somewhere for further analysis."
					}
				/>

				<ServicesCard
					id={"Landing page / SPA / Component"}
					imgPath={landingComponentIcon}
					title={"Landing page / SPA / Component"}
					subTitle={
						"General purpose script that is not deployed anywhere and can be executed on demand on any machine."
					}
					textBody={
						"・A script that scrapes a competitors website to deduplicate products based on the existing base and add competitive pricing data.・Script that parses Excel data and creates a certain report based on it (actual problem in audit firms. They have reporting departments for that)"
					}
				/>
			</ServicesCarousel>
		</div>
	);
};

export default BackEnd;
