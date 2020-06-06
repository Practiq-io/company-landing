import React, { Component } from "react";
import "./ServicesCard.css";
import buttonRightArrow from "./ServicesCardImg/rightarrow.png";

class ServicesCard extends Component {
	state = {
		show: false,
		string: this.props.textBody,
		hiddenString: false,
		displayedString: false,
	};

	componentDidMount() {
		let cut = this.state.string.slice(150, this.state.string.length);
		let display = this.state.string.slice(0, 150);
		this.setState({ hiddenString: cut });
		this.setState({ displayedString: display });
	}

	toggleText = () => {
		this.setState({ show: !this.state.show });
	};

	render() {
		return (
			<div className="servicesCardBody">
				<div className="servicesCardImgbox">
					<img
						className="servicesCardImg"
						src={this.props.imgPath}
						alt="service icon"
					/>
				</div>

				<div className="cardStructure">
					<div className="cardInfoBox">
						<div className="servicesCardUpperBox">
							<p className="servicesCardTitle">{this.props.title}</p>
							<p className="servicesCardSubTitle">{this.props.subTitle}</p>
						</div>

						<div className="servicesCardLowerBox">
							<p className="servicesCardExample">Example:</p>
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
	}
}

export default ServicesCard;
