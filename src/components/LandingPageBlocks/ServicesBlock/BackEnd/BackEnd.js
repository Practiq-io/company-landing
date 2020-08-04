import React from "react";
import ServicesCarousel from "../ServicesCarousel/ServicesCarousel";
import ServicesCard from "../ServicesCard/ServicesCard";
import API from "../ServicesCard/ServicesCardImg/apiLogo.svg";
import connector from "../ServicesCard/ServicesCardImg/connectorLogo.svg";
import longProcess from "../ServicesCard/ServicesCardImg/longRunning.svg";
import landingComponentIcon from '../ServicesCard/ServicesCardImg/BACKENDSPA.svg';

const BackEnd = props => {
	const {animationSettings, toggle} = props;
	return (
		<div className="backendCarouselFrame">
			<ServicesCarousel>
				<ServicesCard
					cardBodyAnimation={animationSettings("fade-up", "450", "800")}
					cardLogoAnimation={animationSettings("zoom-in", "1150", "600")}
					cardTitleAnimation={animationSettings("fade-right", "750", "600" )}
					cardSubTitleAnimation={animationSettings("fade-right", "950", "600" )}
					cardExampleAnimation={animationSettings("fade-right", "1150", "600" )}
					cardTextAnimation={animationSettings("fade-right", "1350", "600")}
					cardButtonAnimation={animationSettings("zoom-in", "1550", "800")}
					cardAnimationTrigger={"#services-animation-trigger"}

					toggle={toggle}
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
					cardBodyAnimation={animationSettings("fade-up", "750", "800")}
					cardLogoAnimation={animationSettings("zoom-in", "1150", "600")}
					cardTitleAnimation={animationSettings("fade-right", "750", "600" )}
					cardSubTitleAnimation={animationSettings("fade-right", "950", "600" )}
					cardExampleAnimation={animationSettings("fade-right", "1150", "600" )}
					cardTextAnimation={animationSettings("fade-right", "1350", "600")}
					cardButtonAnimation={animationSettings("zoom-in", "1550", "800")}
					cardAnimationTrigger={"#services-animation-trigger"}

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
					cardBodyAnimation={animationSettings("fade-up", "1050", "800")}
					cardLogoAnimation={animationSettings("zoom-in", "1150", "600")}
					cardTitleAnimation={animationSettings("fade-right", "750", "600" )}
					cardSubTitleAnimation={animationSettings("fade-right", "950", "600" )}
					cardExampleAnimation={animationSettings("fade-right", "1150", "600" )}
					cardTextAnimation={animationSettings("fade-right", "1350", "600")}
					cardButtonAnimation={animationSettings("zoom-in", "1550", "800")}
					cardAnimationTrigger={"#services-animation-trigger"}

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
					cardBodyAnimation={animationSettings("fade-up", "1350", "800")}
					cardLogoAnimation={animationSettings("zoom-in", "1150", "600")}
					cardTitleAnimation={animationSettings("fade-right", "750", "600" )}
					cardSubTitleAnimation={animationSettings("fade-right", "950", "600" )}
					cardExampleAnimation={animationSettings("fade-right", "1150", "600" )}
					cardTextAnimation={animationSettings("fade-right", "1350", "600")}
					cardButtonAnimation={animationSettings("fade-zoom-in", "1550", "200")}
					cardAnimationTrigger={"#services-animation-trigger"}

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
