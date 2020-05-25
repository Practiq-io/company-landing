import React from 'react';
import './NavigationBar.css';
import logo from "../../image/logo.png";
import mobileLogo from "../../image/mobileLogo.png";



const NavigationBar = () => {
    return (
        <nav className="Navigation-Panel">
            <div className="wrapper">
							<div className="nav_wrapper">
								<div className="logo">
									<img src={logo}></img>
									<img src={mobileLogo}></img>
								</div>

								<div className="navigation">
									<div className="nav_desctop">
										<a href="#">What we do</a>
										<a href="#">How it works</a>
										<a href="#">About us</a>
										<a href="#">Get started</a>
									</div>
									<span className="mobile_nav">

									</span>
								</div>
							</div>
						</div>

						
        </nav>
    )
}

export default NavigationBar;