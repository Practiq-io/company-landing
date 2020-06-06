import React, { Component } from "react";
import '../../../../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../../../../node_modules/slick-carousel/slick/slick.css';
import './ServicesCarouselFix.css';
import Slider from "react-slick";

class ServicesCarousel extends Component {

	settings = {
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
		infinite: false,
		focusOnSelect: false,
		variableWidth: true,
		arrows: false
	};
	
	render() {

		

		return (
			<Slider {...this.settings}>
				{this.props.children}
			</Slider>
		);
	}
}

export default ServicesCarousel;