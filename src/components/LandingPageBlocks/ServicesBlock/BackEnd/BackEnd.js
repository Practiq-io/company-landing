import React from "react";
import ServicesCarousel from "../ServicesCarousel/ServicesCarousel";
import ServicesCard from "../ServicesCard/ServicesCard";
import API from "../ServicesCard/ServicesCardImg/apiLogo.svg";
import connector from "../ServicesCard/ServicesCardImg/connectorLogo.svg";
import longProcess from "../ServicesCard/ServicesCardImg/longRunning.svg";
import { Component } from "react";



class BackEnd extends Component {
	state = {
		screenWidth: 0,
	};

	componentWillMount() {
		this.setState({ screenWidth: window.innerWidth });
	}

	render() {
		const { toggleSpecificTask } = this.props;
		return (
			<>
				{this.state.screenWidth > 800 ? (
					<div className="backendCarouselFrame">
						<ServicesCarousel>
							<ServicesCard
								toggleSpecificTask={() =>
									toggleSpecificTask("General purpose API", "backend")
								}
								id={"api"}
								imgPath={API}
								title={"General purpose API"}
								subTitle={
									"Any kind of API service that is encapsulated and does any kind of operations."
								}
								textBody={
									"・Can be a back office API that just serves denormalized data from a number of other APIs or data storages."
								}
								animationName={"fade-up"}
								animationDelay={"450"}
							/>

							<ServicesCard
								toggleSpecificTask={() =>
									toggleSpecificTask("API Connector/Adapter", "backend")
								}
								id={"connector"}
								imgPath={connector}
								title={"API Connector/Adapter"}
								subTitle={
									"Used a lot by a lot companies that need to connect to different APIs from the same product type and transform the data or operations to a single internal format."
								}
								textBody={
									"・Silenium.inc is a company that uses multiple payment providers and based on a payment event or a call needs to make a request to one of the providers・Flywithus is a flights ticket seller and needs to integrate new airline by integrating with their API"
								}
								animationName={"fade-up"}
								animationDelay={"750"}
							/>

							<ServicesCard
								toggleSpecificTask={() =>
									toggleSpecificTask("Long running process", "backend")
								}
								id={"longprocess"}
								imgPath={longProcess}
								title={"Long running process"}
								subTitle={
									"Any kind of background process that is consuming data from some source and performing some operation upon it."
								}
								textBody={
									"・A process that is listening to a stock market, aggregating the data and saving it somewhere for further analysis."
								}
								animationName={"fade-up"}
								animationDelay={"1050"}
							/>
						</ServicesCarousel>
					</div>
				) : (
					<div className="backendCarouselFrame">
						<ServicesCarousel>
							<ServicesCard
								toggleSpecificTask={() =>
									toggleSpecificTask("General purpose API", "backend")
								}
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
								toggleSpecificTask={() =>
									toggleSpecificTask("API Connector/Adapter", "backend")
								}
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
								toggleSpecificTask={() =>
									toggleSpecificTask("Long running process", "backend")
								}
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
						</ServicesCarousel>
					</div>
				)}
			</>
		);
	}
}

export default BackEnd;
