import React from "react";
import "./WhoBlock.css";
import linkid from "../../../image/linkid.svg";
import IkaMobile from "../../../image/Ika-mobile.png";
import LizaMobile from "../../../image/Liza-mobile.png";
import RomaMobile from "../../../image/Roma-mobile.png";
import linkidMobile from "../../../image/linkid-blue.svg";

const WhoBlock = (props) => {
	return (
		<section className="WB-Section" id="who-block_anchor">
			<div className="wrapper">
				<content className="WB-content">
					<h2
						data-aos-anchor="#HB-animation-trigger"
						data-aos="fade-right"
						data-aos-duration="800"
					>
						Who build this
					</h2>

					<div className="person-card">

						<div 
							data-aos-anchor="#HB-animation-trigger"
							data-aos="fade-left"
							data-aos-delay="650"
							data-aos-duration="1000"

							className="person"
						>
							<div className="person-image">
								<p
									data-aos-anchor="#HB-animation-trigger"
									data-aos="fade-left"
									data-aos-delay="850"
									data-aos-duration="1000"
								>
									Ilya Sidorovich
								</p>

								<div 
									data-aos-anchor="#HB-animation-trigger"
									data-aos="fade-in"
									data-aos-delay="1550"
									data-aos-duration="1000"

									className="linkid-logo"
								>
									<img src={linkid} alt="" />
								</div>
							</div>
							<div className="who-block-text">
								<p
									data-aos-anchor="#HB-animation-trigger"
									data-aos="fade-in"
									data-aos-delay="1850"
									data-aos-duration="1000"
								>
									Co-founder, Tech Senior Software Developer @ Booking.com BSc
									Finance & Marketing, KIMEP
								</p>
							</div>
						</div>

						<div 
							data-aos-anchor="#HB-animation-trigger"
							data-aos="fade-left"
							data-aos-delay="850"
							data-aos-duration="1000"

							className="person liza"
						>
							<div className="person-image">
								<p
									data-aos-anchor="#HB-animation-trigger"
									data-aos="fade-left"
									data-aos-delay="1050"
									data-aos-duration="1000"
								>
									Elizaveta Kolesnichenko
								</p>

								<div 
									data-aos-anchor="#HB-animation-trigger"
									data-aos="fade-in"
									data-aos-delay="1750"
									data-aos-duration="1000"

									className="linkid-logo"
								>
									<img src={linkid} alt="" />
								</div>
							</div>
							<div className="who-block-text">
								<p
									data-aos-anchor="#HB-animation-trigger"
									data-aos="fade-in"
									data-aos-delay="2050"
									data-aos-duration="1000"
								>
									Co-founder, Product / Strategy Head of Startup Incubation @ ACE
									Incubator MSc Cognitive Neurobiology, UvA
								</p>
							</div>
						</div>

						<div 
							data-aos-anchor="#HB-animation-trigger"
							data-aos="fade-left"
							data-aos-delay="1050"
							data-aos-duration="1000"

							className="person roma"
						>
							<div className="person-image">
								<p
									data-aos-anchor="#HB-animation-trigger"
									data-aos="fade-left"
									data-aos-delay="1250"
									data-aos-duration="1000"
								>
									Roman Cherepivskiy
								</p>

								<div 
									data-aos-anchor="#HB-animation-trigger"
									data-aos="fade-in"
									data-aos-delay="1950"
									data-aos-duration="1000"

									className="linkid-logo"
								>
									<img src={linkid} alt="" />
								</div>
							</div>
							<div className="who-block-text">
								<p
									data-aos-anchor="#HB-animation-trigger"
									data-aos="fade-in"
									data-aos-delay="2250"
									data-aos-duration="1000"
								>
									Senior UI/UX Designer Computer Hardware and Software Almaty
									technological university
								</p>
							</div>
						</div>

						<div className="person-mobile-block">
							<div className="person-card-mobile ika">
								<div className="person-card-image">
									<img src={IkaMobile} alt="" />
								</div>

								<div className="person-card-text">
									<p>Ilya Sidorovich</p>
									<p>
										Co-founder, Tech Senior Software Developer @ Booking.com BSc
										Finance & Marketing, KIMEP
									</p>
									<div className="person-card-logo">
										<img src={linkidMobile} alt="" />
									</div>
								</div>
							</div>

							<div className="person-card-mobile liza">
								<div className="person-card-image">
									<img src={LizaMobile} alt="" />
								</div>

								<div className="person-card-text">
									<p>Elizaveta Kolesnichenko</p>
									<p>
										Co-founder, Product / Strategy Head of Startup Incubation @
										ACE Incubator MSc Cognitive Neurobiology, UvA
									</p>
									<div className="person-card-logo">
										<img src={linkidMobile} alt="" />
									</div>
								</div>
							</div>

							<div className="person-card-mobile roma">
								<div className="person-card-image">
									<img src={RomaMobile} alt="" />
								</div>

								<div className="person-card-text">
									<p>Roman Cherepivskiy</p>
									<p>
										Senior UI/UX Designer Computer Hardware and Software Almaty
										technological university
									</p>
									<div className="person-card-logo">
										<img src={linkidMobile} alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</content>
			</div>
			<div id="HB-animation-trigger" className="HB-block_trigger-box"></div>
		</section>
	);
};

export default WhoBlock;
