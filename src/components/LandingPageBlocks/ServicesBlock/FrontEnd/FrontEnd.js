import React from "react";
import ServicesCarousel from "../ServicesCarousel/ServicesCarousel";
import ServicesCard from "../ServicesCard/ServicesCard";
import landingPageIcon from "../ServicesCard/ServicesCardImg/landingPage.svg";
import SPAIcon from "../ServicesCard/ServicesCardImg/frontSPA.svg";
import componentIcon from "../ServicesCard/ServicesCardImg/component.svg";

const FrontEnd = props => {
	const {animationSettings} = props;
	return (
		<div className="frontendCarouselFrame">
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

					id={"Landingpage"}
					imgPath={landingPageIcon}
					title={"Landing page"}
					subTitle={
						"A promotional page for your product. Front end implemented for the provided design."
					}
					textBody={
						"・A retail company wants to build a landing page for it’s new product category based on the design provided by their internal designer ・Personal page for a real estate agent that will be promoted on forums and facebook"
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

					id={"Single page web application"}
					imgPath={SPAIcon}
					title={"Single page web application"}
					subTitle={
						"A single page web app based on a modern Frontend stack like React+Bootstrap+Redux+Node connected to your API."
					}
					textBody={
						"・A retail company wants to build a backoffice management app based on existing API that is serving their Frontend ・An mobile-first order application with a wizard to collect customer information"
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

					id={"Frontendcomponent"}
					imgPath={componentIcon}
					title={"Frontend component"}
					subTitle={
						"A functional component for your website based either on API or self-contained. Can be used directly on your FE or embedded using Iframe."
					}
					textBody={
						"・A Frontend calendar that exposes an API with user interaction events ・Mortgage calculator that works based on your Backend Mortgage API that let’s the customer understand the amount of mortgage that she can get"
					}
				/>
			</ServicesCarousel>
		</div>
	);
};

export default FrontEnd;
