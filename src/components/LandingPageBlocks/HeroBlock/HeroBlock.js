import React from 'react';
import './HeroBlock.css';
import background from "../../../image/bg.png";
import working from "../../../image/working.png";
import arrow1 from "../../../image/Arrow1.png";
import arrow2 from "../../../image/Arrow2.png";
import mobileArrowLeft from "../../../image/mobileArrowLeft.png";
import mobileArrowRight from "../../../image/mobileArrowRight.png";
import mobileBg from "../../../image/mobileBg.png";


const HeroBlock = props => {
    return (
        <section>

			 <img src={background} className="large_image" alt=""/> 
			 <img src={mobileBg} className="mobile_image" alt=""/> 


					<div className="grid_wrapper">


						<div className="section_title">
						<h1>Let our pre-vetted developers build a <span>React app</span> for you</h1>
						</div>

						<div className="section_text">
							<p>We are the first freelance platform that invests in education of our freelancers so that they can provide a better service with clear deliverables.</p>

							<div className="arrow">
								<img src={arrow2} className="ArrowLeft large"alt=""/>
								<img src={arrow1} className="ArrowRight large"alt=""/>
								<img src={mobileArrowLeft} className="ArrowLeft mobile"alt=""/>
								<img src={mobileArrowRight} className="ArrowRight mobile"alt=""/>


							</div>
						</div>

						<div className="button">
							<button>Get started <span></span></button>
						</div>

						<div className="code_window">
							<div className="code_block">

							</div>
						</div>

						<div className="working_image">
							<img src={working} alt=""/>
						</div>
					</div>
				</section>
    )
}



export default HeroBlock;
