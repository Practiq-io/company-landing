import React from "react";
import "./ServicesCard.css";
import buttonRightArrow from "./ServicesCardImg/rightarrow.png";

const ServicesCard = (props) => {

    let string = null;
    if(props.textBody){
        string = props.textBody;
    }
    if(string.length > 150) {
        let cut = string.slice(150, string.length);
        console.log('\n',cut, "<===== im cuted string", cut.length, "<==== CUTED LENGTH\n");
    }
    console.log(props.textBody, "<== TEXT BODY STRING", props.textBody.length, "<===== TEXT LENGTH");
    

	return (
		<div className="servicesCardBody">
			<div className="servicesCardImgbox">
				<img
					className="servicesCardImg"
					src={props.imgPath}
					alt="service icon"
				/>
			</div>

			<div className="cardStructure">
				<div className="cardInfoBox">
					<div className="servicesCardUpperBox">
						<p className="servicesCardTitle">{props.title}</p>
						<p className="servicesCardSubTitle">{props.subTitle}</p>
					</div>

					<div className="servicesCardLowerBox">
						<p className="servicesCardExample">Example:</p>
						<p className="servicesCardTextBody">{props.textBody}</p>
					</div>
				</div>

				<div className="servicesCardButton">
					<p>Get started</p>
					<img
						className="servicesCardButtonImg"
						src={buttonRightArrow}
						alt="action button"
					/>
				</div>
			</div>
		</div>
	);
};

export default ServicesCard;
