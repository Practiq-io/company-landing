import React from "react";
import "./PromoBlock.css";
import PromoCard from "./PromoCard/PromoCard";
import PromoCardCustomize from "./PromoCard/PromoCardCustomize/PromoCardCustomize";
import documentation from "../../../image/documentation.svg";
import docerFiles from "../../../image/docerFiles.png";
import endTesting from "../../../image/unitTest.svg";

const PromoBlock = (props) => {
	const { animationSettings } = props;

	return (
		<section className="PB-Section">
			<div className="wrapper">
				<div className="content_wrapper">
					<div className="weCode">
						<h2
							data-aos-anchor-placement="center-center"
							data-aos="fade-right"
							data-aos-duration="800"
						>
							We code for production
						</h2>

						<p
							data-aos-anchor-placement="bottom-bottom"
							data-aos="fade-right"
							data-aos-duration="600"
							data-aos-delay="450"
						>
							We’ve built huge projects and we know the difference between the
							development and production requirements.{" "}
						</p>

						<p
							data-aos-anchor-placement="bottom-bottom"
							data-aos="fade-right"
							data-aos-duration="600"
							data-aos-delay="650"
						>
							{" "}
							We ensure that every developer on our platform has this knowledge
							before implementing a task for you.{" "}
						</p>

						<p
							data-aos-anchor-placement="bottom-bottom"
							data-aos="fade-right"
							data-aos-duration="600"
							data-aos-delay="850"
						>
							As a result you are free to choose from many deliverables that
							lets you seamlessly fit the results into your infrastructure.
						</p>
					</div>

					<div data-aos-anchor-placement="bottom-bottom" className="card_block">
						<div className="flex-container">
							<PromoCard
								cardTitleAnimation={animationSettings(
									"fade-left",
									"750",
									"800"
								)}
								cardTextAnimation={animationSettings(
									"zoom-in",
									"950",
									"800"
								)}
								cardBodyAnimation={animationSettings(
									"fade-up-left",
									"450",
									"600"
								)}
								title={"Documentation"}
								subTitle={"Swagger, Javadoc, etc."}
								textBody={
									"Code and it’s use cases are documented so you know how to use and extend it"
								}
								imgPath={documentation}
							/>
							<PromoCard
								cardTitleAnimation={animationSettings(
									"fade-left",
									"1050",
									"800"
								)}
								cardTextAnimation={animationSettings(
									"zoom-in",
									"1250",
									"800"
								)}
								cardBodyAnimation={animationSettings(
									"fade-up-left",
									"750",
									"600"
								)}
								title={"Docker files"}
								subTitle={""}
								textBody={
									"Project is ready to be seamlessly deployed into your infra"
								}
								imgPath={docerFiles}
							/>
						</div>
						<div className="flex-container">
							<PromoCard
								cardTitleAnimation={animationSettings(
									"fade-left",
									"1350",
									"800"
								)}
								cardTextAnimation={animationSettings(
									"zoom-in",
									"1850",
									"800"
								)}
								cardBodyAnimation={animationSettings(
									"fade-up-left",
									"1050",
									"600"
								)}
								title={"Unit and End to End testing"}
								subTitle={"JUnit, Jest, Nightwatch"}
								textBody={"Results are secured through unit and e2e tests"}
								imgPath={endTesting}
							/>
							<PromoCardCustomize
								cardTitleAnimation={animationSettings(
									"fade-left",
									"1650",
									"800"
								)}
								cardTextAnimation={animationSettings(
									"zoom-in",
									"1950",
									"800"
								)}
								cardBodyAnimation={animationSettings(
									"fade-up-left",
									"1350",
									"600"
								)}
								title={"Add your own deliverable standard"}
								subTitle={""}
								textBody={
									"Project is ready to be seamlessly deployed into your infrastructure"
								}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PromoBlock;
