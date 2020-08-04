import React, { Component } from "react";
import "./ServicesCard.css";
import buttonRightArrow from "./ServicesCardImg/cardRightArrow.svg";

class ServicesCard extends Component {
	state = {
		show: false,
		textBody: this.props.textBody,
		hiddenString: false,
		displayedString: false,
	};

	componentDidMount() {
		let cut = this.state.textBody.slice(150, this.state.textBody.length);
		let display = this.state.textBody.slice(0, 150);
		this.setState({ hiddenString: cut });
		this.setState({ displayedString: display });
	}

	toggleText = () => {
		this.setState({ show: !this.state.show });
	};

	render() {
		const {
			cardBodyAnimation, cardLogoAnimation, cardTitleAnimation, 
			cardTextAnimation, cardExampleAnimation, 
			cardButtonAnimation, cardSubTitleAnimation, toggle
		} = this.props;

		const cardBodyDelay = cardBodyAnimation.delay ? cardBodyAnimation.delay : null;
		const cardBodyAosName = cardBodyAnimation.name ? cardBodyAnimation.name : null;
		const cardBodyDuration = cardBodyAnimation.duration ? cardBodyAnimation.duration : null;
		const cardAnimationTrigger = this.props.cardAnimationTrigger ? this.props.cardAnimationTrigger : null;

		const cardLogoDelay = cardLogoAnimation.delay ? cardLogoAnimation.delay : null;
		const cardLogoAosName = cardLogoAnimation.name ? cardLogoAnimation.name : null;
		const cardLogoDuration = cardLogoAnimation.duration ?cardLogoAnimation.duration : null;

		const cardTitleDelay = cardTitleAnimation.delay ? cardTitleAnimation.delay : null;
		const cardTitleAosName = cardTitleAnimation.name ? cardTitleAnimation.name : null;
		const cardTitleDuration = cardTitleAnimation.duration ? cardTitleAnimation.duration : null;

		const cardTextDelay = cardTextAnimation.delay ? cardTextAnimation.delay : null;
		const cardTextAosName = cardTextAnimation.name ? cardTextAnimation.name : null;
		const cardTextDuration = cardTextAnimation.duration ? cardTextAnimation.duration : null;

		const cardExampleDelay = cardExampleAnimation.delay ? cardExampleAnimation.delay : null;
		const cardExampleAosName = cardExampleAnimation.name ? cardExampleAnimation.name : null;
		const cardExampleDuration = cardExampleAnimation.duration ? cardExampleAnimation.duration : null;

		const cardSubTitleDelay = cardSubTitleAnimation.delay ? cardSubTitleAnimation.delay : null;
		const cardSubTitleAosName = cardSubTitleAnimation.name ? cardSubTitleAnimation.name : null;
		const cardSubTitleDuration = cardSubTitleAnimation.duration ? cardSubTitleAnimation.duration : null;

		const cardButtonDelay = cardButtonAnimation.delay ? cardButtonAnimation.delay : null;
		const cardButtonAosName = cardButtonAnimation.name ? cardButtonAnimation.name : null;
		const cardButtonDuration = cardButtonAnimation.duration ? cardButtonAnimation.duration : null;
		
		return (
			<div 
				data-aos-anchor={cardAnimationTrigger}
				data-aos={cardBodyAosName}
				data-aos-duration={cardBodyDuration}
				data-aos-delay={cardBodyDelay}
				
				className="servicesCardBody"
			>
				<div className="mobileWrap">
					<div 
						data-aos-anchor={cardAnimationTrigger}
						data-aos={cardLogoAosName}
						data-aos-duration={cardLogoDuration}
						data-aos-delay={cardLogoDelay}

						className="servicesCardImgbox"
					>
						<img
							className="servicesCardImg"
							src={this.props.imgPath}
							alt="service icon"
						/>
						
					</div>
					<p className="servicesCardTitleMobile">{this.props.title}</p>
				</div>
				
				<div className="cardStructure">
					<div className="cardInfoBox">
						<div className="servicesCardUpperBox">
							<p 
								data-aos-anchor={cardAnimationTrigger}
								data-aos={cardTitleAosName}
								data-aos-duration={cardTitleDuration}
								data-aos-delay={cardTitleDelay}

								className="servicesCardTitle"
							>
								{this.props.title}
							</p>
							<p 
								data-aos-anchor={cardAnimationTrigger}
								data-aos={cardSubTitleAosName}
								data-aos-duration={cardSubTitleDuration}
								data-aos-delay={cardSubTitleDelay}

								className="servicesCardSubTitle"
							>
								{this.props.subTitle}
							</p>
						</div>

						<div className="servicesCardLowerBox">
							<p 
								data-aos-anchor={cardAnimationTrigger}
								data-aos={cardExampleAosName}
								data-aos-duration={cardExampleDuration}
								data-aos-delay={cardExampleDelay}

								className="servicesCardExample"
							>
								Example:
							</p>

							<div 
								data-aos-anchor={cardAnimationTrigger}
								data-aos={cardTextAosName}
								data-aos-duration={cardTextDuration}
								data-aos-delay={cardTextDelay}

								className="services-animation-wrapper"
							>
								<p className="servicesCardTextBody">
									{this.state.displayedString}
									<span
										className="servicesCardMainSpan"
										style={{
											display: this.state.hiddenString ? "inline" : "none",
										}}
									>
										<span
											id="servicesCardDots"
											style={{
												display: this.state.show ? "none" : "inline",
											}}
										>
											...
										</span>
										<span
											style={{
												display: this.state.show ? "inline" : "none",
											}}
											id="moreText"
										>
											{<br></br>}
											{this.state.hiddenString}
										</span>
										<span onClick={() => this.toggleText()} id="toggleTextSpan">
											{this.state.show ? " Less" : " More"}
										</span>
									</span>
								</p>
							</div>
						</div>
					</div>

					<div
						onClick={() => toggle()}
						data-aos-anchor={cardAnimationTrigger}
						data-aos={cardButtonAosName}
						data-aos-duration={cardButtonDuration}
						data-aos-delay={cardButtonDelay}

						className="servicesCardButton"
					>
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
	}
}

export default ServicesCard;