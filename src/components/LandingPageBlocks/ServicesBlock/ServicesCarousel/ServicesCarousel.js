import React, { Component } from "react";
import "../../../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../../../../node_modules/slick-carousel/slick/slick.css";
import activeLeftArrow from './CarouselCustomArrows/ActiveLeft.svg';
import inactiveLeftArrow from './CarouselCustomArrows/InactiveLeft.svg';
import activeRightArrow from './CarouselCustomArrows/ActiveRight.svg';
import inactiveRightArrow from './CarouselCustomArrows/InactiveRight.svg';
import "./ServicesCarouselFix.css";
import Slider from "react-slick";



class ServicesCarousel extends Component {
	state = {
		activeSlide: 0,
	};
	constructor(props) {
		super(props);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	}
	next() {
		this.slider.slickNext();
	}
	previous() {
		this.slider.slickPrev();
	}
	settings = {
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
		infinite: false,
		focusOnSelect: false,
		variableWidth: true,
		afterChange: (current) => this.setState({ activeSlide: current }),
	};
	render() {
		return (
			<>
				<Slider ref={(c) => (this.slider = c)} {...this.settings}>
					{this.props.children}
				</Slider>
				<div 
					style={{
						pointerEvents: this.state.activeSlide === 0 ? "none" : "auto"
					}}
					className="leftArrow" 
					onClick={this.previous
				}>
					<img 
						src={
							this.state.activeSlide === 0 ? 
							inactiveLeftArrow : activeLeftArrow
							} 
						alt=""
					/>
				</div>
				<div
					style={{
						pointerEvents: this.state.activeSlide === 2 ? "none" : "auto"
					}} 
					className="rightArrow" 
					onClick={this.next}
				>
					<img 
						src={
							this.state.activeSlide === 2 ? 
							inactiveRightArrow : activeRightArrow
						} 
						alt=""
					/>
				</div>
			</>
		);
	}
}

export default ServicesCarousel;