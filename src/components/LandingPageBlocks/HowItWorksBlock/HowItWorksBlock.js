import React from "react";
import "./HowItWorksBlock.css";
import faceLogo from "../../../image/face.svg";
import dotsDesc from "../../../image/dots-desctop.png";
import dotsDesctopBlock2 from "../../../image/dotsDesctopBlock2.png";
import dotsDesctopBlock3 from "../../../image/dotsDesctopBlock3.png";
import dotsDesctopBlock4 from "../../../image/dotsDesctopBlock4.png";
import Lisa from "../../../image/Lisa.svg";
import Mark from "../../../image/Mark.svg";
import Michael from "../../../image/Michael.svg";
import Lana from "../../../image/Lana.svg";
import codeWindow from "../../../image/codeWindow.svg";
import GitHub from "../../../image/GitHub.svg";
import dotsMobileBlock1 from "../../../image/dotsMobileBlock1.png";
import dotsMobileBlock2 from "../../../image/dotsMobileBlock2.png";
import dotsMobileBlock3 from "../../../image/dotsMobileBlock3.png";
import dotsMobileBlock4 from "../../../image/dotsMobileBlock4.png";
import dotsMobileBlock5 from "../../../image/dotsMobileBlock5.png";

const HowItWorksBlock = () => {
	return (
		<section className="HIWB-Section" id="how-it-works_anchor">
			<div className="wrapper">
				<content className="HIWB-content">
					<h2
						data-aos-anchor-placement="bottom-bottom"
						data-aos="fade-down"
						data-aos-duration="800"
						className="HIW-title"
					>
						How it Works
					</h2>

					<div className="HIWB-blocks block01">
						<div className="HIWB-info">
							<div className="HIWB-title block01">
								<p
									data-aos-anchor-placement="bottom-bottom"
									data-aos="fade-right"
									data-aos-delay="450"
									data-aos-duration="800"
								>
									01
								</p>

								<p
									data-aos-anchor-placement="bottom-bottom"
									data-aos="fade-right"
									data-aos-delay="650"
									data-aos-duration="800"
								>
									You submit the development request
								</p>

								<div
									data-aos-anchor-placement="bottom-bottom"
									data-aos="fade-zoom-in"
									data-aos-delay="650"
									data-aos-duration="800"
									className="HIWB-dotsMobile"
								>
									<img src={dotsMobileBlock1} alt="" />
								</div>
							</div>
							<div className="discription">
								<div
									data-aos-anchor-placement="bottom-bottom"
									data-aos="zoom-in"
									data-aos-delay="850"
									data-aos-duration="1000"
									className="discription-content"
								>
									<img src={faceLogo} alt="" />
									You
								</div>

								<div
									data-aos-anchor-placement="bottom-bottom"
									data-aos="fade-right"
									data-aos-delay="950"
									data-aos-duration="1000"
									className="discription-text"
								></div>
							</div>
						</div>

						<div
							data-aos-anchor-placement="bottom-bottom"
							data-aos="fade-zoom-in"
							data-aos-delay="650"
							data-aos-duration="800"
							className="HIWB-dots-image"
						>
							<img src={dotsDesc} alt="" />
						</div>
					</div>

					<div className="HIWB-blocks blockPosition">
						<div className="HIWB-info">
							<div className="HIWB-title">
								<p
									data-aos-anchor-placement="bottom-bottom"
									data-aos="fade-left"
									data-aos-delay="650"
									data-aos-duration="800"
								>
									02
								</p>
								<p
									data-aos-anchor-placement="bottom-bottom"
									data-aos="fade-left"
									data-aos-delay="850"
									data-aos-duration="800"
								>
									Our platform classifies the skill set and level of knowledge
									required for the task execution.{" "}
								</p>

								<div
									data-aos-anchor-placement="bottom-bottom"
									data-aos="fade-zoom-in"
									data-aos-delay="650"
									data-aos-duration="800"
									className="HIWB-dotsMobile"
								>
									<img src={dotsMobileBlock2} alt="" />
								</div>
							</div>
							<div className="discription">
								<p
									data-aos-anchor-placement="bottom-bottom"
									data-aos="zoom-in-up"
									data-aos-delay="1050"
									data-aos-duration="1000"
								>
									Backend
								</p>
								<p
									data-aos-anchor-placement="bottom-bottom"
									data-aos="zoom-in-up"
									data-aos-delay="1250"
									data-aos-duration="900"
								>
									Java
								</p>
								<p
									data-aos-anchor-placement="bottom-bottom"
									data-aos="zoom-in-up"
									data-aos-delay="1450"
									data-aos-duration="900"
								>
									Ruby
								</p>
								<p
									data-aos-anchor-placement="bottom-bottom"
									data-aos="zoom-in-up"
									data-aos-delay="1650"
									data-aos-duration="900"
								>
									Laravel
								</p>
								<p
									data-aos-anchor-placement="bottom-bottom"
									data-aos="zoom-in-up"
									data-aos-delay="1850"
									data-aos-duration="900"
								>
									Python
								</p>
							</div>
						</div>

						<div
							data-aos-anchor-placement="bottom-bottom"
							data-aos="fade-zoom-in"
							data-aos-delay="650"
							data-aos-duration="800"
							className="HIWB-dots-image"
						>
							<img src={dotsDesctopBlock2} alt="" />
						</div>
					</div>

					<div className="HIWB-blocks block03">
						<div className="HIWB-info">
							<div className="HIWB-title">
								<p
									data-aos-anchor-placement="bottom-bottom"
									data-aos="fade-right"
									data-aos-delay="650"
									data-aos-duration="800"
								>
									03
								</p>
								<p
									data-aos-anchor-placement="bottom-bottom"
									data-aos="fade-right"
									data-aos-delay="850"
									data-aos-duration="800"
								>
									We assign a group of developers to work on your request
								</p>

								<div
									data-aos-anchor-placement="bottom-bottom"
									data-aos="fade-zoom-in"
									data-aos-delay="650"
									data-aos-duration="800"
									className="HIWB-dotsMobile"
								>
									<img src={dotsMobileBlock3} alt="" />
								</div>
							</div>
							<div className="discription">
								<div className="discription-content row">
									<div
										data-aos-anchor-placement="bottom-bottom"
										data-aos="zoom-in-up"
										data-aos-delay="1050"
										data-aos-duration="1000"
										className="account"
									>
										<img src={Lisa} alt="" />
										<p
											data-aos-anchor-placement="bottom-bottom"
											data-aos="zoom-in-up"
											data-aos-delay="1150"
											data-aos-duration="1000"
										>
											Lisa
										</p>
										<p
											data-aos-anchor-placement="bottom-bottom"
											data-aos="zoom-in-up"
											data-aos-delay="1250"
											data-aos-duration="1000"
										>
											Backend
										</p>
									</div>
									<div
										data-aos-anchor-placement="bottom-bottom"
										data-aos="zoom-in-up"
										data-aos-delay="1250"
										data-aos-duration="1000"
										className="account"
									>
										<img src={Mark} alt="" />
										<p
											data-aos-anchor-placement="bottom-bottom"
											data-aos="zoom-in-up"
											data-aos-delay="1350"
											data-aos-duration="1000"
										>
											Mark
										</p>
										<p
											data-aos-anchor-placement="bottom-bottom"
											data-aos="zoom-in-up"
											data-aos-delay="1450"
											data-aos-duration="1000"
										>
											Backend
										</p>
									</div>
									<div
										data-aos-anchor-placement="bottom-bottom"
										data-aos="zoom-in-up"
										data-aos-delay="1450"
										data-aos-duration="1000"
										className="account"
									>
										<img src={Michael} alt="" />
										<p
											data-aos-anchor-placement="bottom-bottom"
											data-aos="zoom-in-up"
											data-aos-delay="1550"
											data-aos-duration="1000"
										>
											Michael
										</p>
										<p
											data-aos-anchor-placement="bottom-bottom"
											data-aos="zoom-in-up"
											data-aos-delay="1650"
											data-aos-duration="1000"
										>
											Backend
										</p>
									</div>
									<div
										data-aos-anchor-placement="bottom-bottom"
										data-aos="zoom-in-up"
										data-aos-delay="1650"
										data-aos-duration="1000"
										className="account"
									>
										<img src={Lana} alt="" />
										<p
											data-aos-anchor-placement="bottom-bottom"
											data-aos="zoom-in-up"
											data-aos-delay="1750"
											data-aos-duration="1000"
										>
											Lana
										</p>
										<p
											data-aos-anchor-placement="bottom-bottom"
											data-aos="zoom-in-up"
											data-aos-delay="1850"
											data-aos-duration="1000"
										>
											Backend
										</p>
									</div>
									<div
										data-aos-anchor-placement="bottom-bottom"
										data-aos="zoom-in"
										data-aos-delay="1850"
										data-aos-duration="1000"
										className="add"
									>
										<p>+4</p>
										<p
											data-aos-anchor-placement="bottom-bottom"
											data-aos="zoom-in-up"
											data-aos-delay="1950"
											data-aos-duration="1000"
										>
											Other
										</p>
									</div>
								</div>
							</div>
						</div>

						<div
							data-aos-anchor-placement="bottom-bottom"
							data-aos="fade-zoom-in"
							data-aos-delay="650"
							data-aos-duration="800"
							className="HIWB-dots-image"
						>
							<img src={dotsDesctopBlock3} alt="" />
						</div>
					</div>

					<div className="HIWB-blocks blockPosition block04">
						<div className="HIWB-info">
							<div className="HIWB-title">
								<p
									data-aos-anchor-placement="bottom-bottom"
									data-aos="fade-left"
									data-aos-delay="650"
									data-aos-duration="800"
								>
									04
								</p>
								<p
									data-aos-anchor-placement="bottom-bottom"
									data-aos="fade-left"
									data-aos-delay="850"
									data-aos-duration="800"
								>
									We make code reviews to ensure level of quality and provide
									developers with resources needed to comply to industry
									standards{" "}
								</p>

								<div
									data-aos-anchor-placement="bottom-bottom"
									data-aos="fade-zoom-in"
									data-aos-delay="650"
									data-aos-duration="800"
									className="HIWB-dotsMobile"
								>
									<img src={dotsMobileBlock4} alt="" />
								</div>
							</div>
							<div
								data-aos-anchor-placement="bottom-bottom"
								data-aos="fade-left"
								data-aos-delay="1250"
								data-aos-duration="800"
								className="discription"
							>
								<img src={codeWindow} alt="" />
							</div>
						</div>

						<div
							data-aos-anchor-placement="bottom-bottom"
							data-aos="fade-zoom-in"
							data-aos-delay="650"
							data-aos-duration="800"
							className="HIWB-dots-image"
						>
							<img src={dotsDesctopBlock4} alt="" />
						</div>
					</div>

					<div className="HIWB-blocks block05">
						<div className="HIWB-info">
							<div className="HIWB-title">
								<p
									data-aos-anchor-placement="bottom-bottom"
									data-aos="fade-right"
									data-aos-delay="650"
									data-aos-duration="800"
								>
									05
								</p>
								<p
									data-aos-anchor-placement="bottom-bottom"
									data-aos="fade-right"
									data-aos-delay="850"
									data-aos-duration="800"
								>
									The package is delivered via Github including all your
									requirements
								</p>

								<div
									data-aos-anchor-placement="bottom-bottom"
									data-aos="fade-zoom-in"
									data-aos-delay="650"
									data-aos-duration="800"
									className="HIWB-dotsMobile"
								>
									<img src={dotsMobileBlock5} alt="" />
								</div>
							</div>
							<div
								data-aos-anchor-placement="bottom-bottom"
								data-aos="zoom-in"
								data-aos-delay="1050"
								data-aos-duration="800"
								className="discription"
							>
								<img className="HIWB-github-logo" src={GitHub} alt="" />
							</div>
						</div>

						<div
							data-aos-anchor-placement="bottom-bottom"
							data-aos="fade-zoom-in"
							data-aos-delay="650"
							data-aos-duration="800"
							className="HIWB-dots-image"
						>
							<img src={dotsDesc} alt="" />
						</div>
					</div>

					<div
						id="third-set-animation-trigger"
						className="HIWB-blocks blockPosition block06"
					>
						<div className="HIWB-info">
							<div className="HIWB-title">
								<p
									data-aos-anchor-placement="bottom-bottom"
									data-aos="fade-left"
									data-aos-delay="650"
									data-aos-duration="800"
								>
									06
								</p>
								<p
									data-aos-anchor-placement="bottom-bottom"
									data-aos="fade-left"
									data-aos-delay="850"
									data-aos-duration="800"
								>
									You can check in with any of the developers at any point
								</p>
							</div>
							<div className="discription">
								<div className="chat">
									<div className="you">
										<div className="you-content">
											<div
												data-aos-anchor-placement="bottom-bottom"
												data-aos="zoom-in-right"
												data-aos-delay="1050"
												data-aos-duration="1000"
												className="avatar"
											>
												<img src={faceLogo} alt="" />
												<p>You</p>
											</div>

											<div
												data-aos-anchor-placement="bottom-bottom"
												data-aos="zoom-in-left"
												data-aos-delay="1050"
												data-aos-duration="1000"
												className="message"
											>
												<p
													data-aos-anchor-placement="bottom-bottom"
													data-aos="fade-in"
													data-aos-delay="1850"
													data-aos-duration="1000"
													className="mobilePosition"
												></p>
											</div>
										</div>
									</div>

									<div className="someone">
										<div
											data-aos-anchor-placement="bottom-bottom"
											data-aos="zoom-in-left"
											data-aos-delay="1350"
											data-aos-duration="1000"
											className="avatar"
										>
											<img src={Mark} alt="" />
											<p>Mark</p>
										</div>

										<div
											data-aos-anchor-placement="bottom-bottom"
											data-aos="zoom-in-up"
											data-aos-delay="1450"
											data-aos-duration="1000"
											className="message"
										></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</content>
			</div>
		</section>
	);
};

export default HowItWorksBlock;
