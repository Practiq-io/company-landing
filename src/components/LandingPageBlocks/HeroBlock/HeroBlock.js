import React, { useEffect } from "react";
import background from "../../../image/bg2.png";
import working from "../../../image/working.png";
import mobileArrowLeft from "../../../image/mobileArrowLeft.png";
import mobileArrowRight from "../../../image/mobileArrowRight.png";
import mobileBg from "../../../image/mobileBg.png";
import mobileCodePlaceholder from '../../../image/mobile-codeblock-plug.png';
import "./HeroBlock.css";
import { startAnimation } from "./animationScripts/animationScript";

const HeroBlock = (props) => {
	useEffect(() => {
		startAnimation();
	});

	return (
		<section>
			<img src={background} className="large_image" alt="" />
			<img src={mobileBg} className="mobile_image" alt="" />

			<div className="grid_wrapper">
				<div className="section_title">
					<h1>
						Let our pre-vetted developers <br className="title-animation-linebreak"></br> build a{" "}
						<span id="code_block-animation-title"></span>
						{" "}for you
					</h1>
				</div>

				<div className="section_text">
					<p>
						We are the first freelance platform that invests in<br className="title-animation-linebreak"></br>{" "}
						education of our freelancers so that they can provide<br className="title-animation-linebreak"></br> a
						better service with clear deliverables.
					</p>
					<div className="desktop-hero-button">
						<button>
							Get started 
						</button>
					</div>

					<div className="arrow">
						<img src={mobileArrowLeft} className="ArrowLeft mobile" alt="" />
						<img src={mobileArrowRight} className="ArrowRight mobile" alt="" />
					</div>
				</div>

			
					<button className="mobile-hero-button">
						Get started 
					</button>
				

				<div className="code_window">
					<div className="code_block">
						<div className="code_block_header">
							<div className="code_block_header_dot red"></div>
							<div className="code_block_header_dot yellow"></div>
							<div className="code_block_header_dot green"></div>
						</div>
						<div className="code-block-frame">
							<div className="code_block_title">
								// Fetch wizard structure and pass for mounting
							</div>
							<p id="code_block-animation-txt">
								<span id="animation-cursor"></span>
							</p>
						</div>
						
						<img className="mobileCodeBlockPlaceholder" src={mobileCodePlaceholder} alt=""/>
					</div>
				</div>

				<div className="working_image">
					<img src={working} alt="" />
				</div>
			</div>
		</section>
	);
};

export default HeroBlock;
