import React from "react";
import "./HowItWorksBlock.css";
import faceLogo from "../../../image/face.png";
import dotsDesc from "../../../image/dots-desctop.png";
import dotsDesctopBlock2 from "../../../image/dotsDesctopBlock2.png";
import dotsDesctopBlock3 from "../../../image/dotsDesctopBlock3.png";
import dotsDesctopBlock4 from "../../../image/dotsDesctopBlock4.png";
import Lisa from "../../../image/Lisa.png";
import Mark from "../../../image/Mark.png";
import Michael from "../../../image/Michael.png";
import Lana from "../../../image/Lana.png";
import codeWindow from "../../../image/codeWindow.png";
import GitHub from "../../../image/GitHub.png";
import dotsMobileBlock1 from "../../../image/dotsMobileBlock1.png";
import dotsMobileBlock2 from "../../../image/dotsMobileBlock2.png";
import dotsMobileBlock3 from "../../../image/dotsMobileBlock3.png";
import dotsMobileBlock4 from "../../../image/dotsMobileBlock4.png";
import dotsMobileBlock5 from "../../../image/dotsMobileBlock5.png";
const HowItWorksBlock = (props) => {
  return (
    <section className="HIWB-Section" id="how-it-works_anchor">
      <content className="HIWB-content">
        <h2>How it Works</h2>

        
          <div className="HIWB-blocks block01">
            <div className="HIWB-info">
              <div className="HIWB-title block01">
                <p>01</p>
                <p>You submit the development request</p>

                <div className="HIWB-dotsMobile">
                  <img src={dotsMobileBlock1} alt="" />
                </div>
              </div>
              <div className="discription">
                <div className="discription-content">
                  <img src={faceLogo} alt="" />
                  You
                </div>

                <div className="discription-text">
                  <p>I need to build CRM system for my online market</p>
                </div>
              </div>
            </div>

            <div className="HIWB-dots-image">
              <img src={dotsDesc} alt="" />
            </div>
          </div>

          <div className="HIWB-blocks blockPosition">
            <div className="HIWB-info">
              <div className="HIWB-title">
                <p>02</p>
                <p>
                  Our platform classifies the skill set and level of knowledge
                  required for the task execution.{" "}
                </p>

                <div className="HIWB-dotsMobile">
                  <img src={dotsMobileBlock2} alt="" />
                </div>
              </div>
              <div className="discription">
                <p>Backend</p>
                <p>Java</p>
                <p>Ruby</p>
                <p>Laravel</p>
                <p>Python</p>
              </div>
            </div>

            <div className="HIWB-dots-image">
              <img src={dotsDesctopBlock2} alt="" />
            </div>
          </div>

          <div className="HIWB-blocks block03">
            <div className="HIWB-info">
              <div className="HIWB-title">
                <p>03</p>
                <p>We assign a group of developers to work on your request</p>

                <div className="HIWB-dotsMobile">
                  <img src={dotsMobileBlock3} alt="" />
                </div>
              </div>
              <div className="discription">
                <div className="discription-content row">
                  <div className="account">
                    <img src={Lisa} alt="" />
                    <p>Lisa</p>
                    <p>Backend</p>
                  </div>
                  <div className="account">
                    <img src={Mark} alt="" />
                    <p>Mark</p>
                    <p>Backend</p>
                  </div>
                  <div className="account">
                    <img src={Michael} alt="" />
                    <p>Michael</p>
                    <p>Backend</p>
                  </div>
                  <div className="account">
                    <img src={Lana} alt="" />
                    <p>Lana</p>
                    <p>Backend</p>
                  </div>
                  <div className="add">
                    <p>+4</p>
                    <p>Other</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="HIWB-dots-image">
              <img src={dotsDesctopBlock3} alt="" />
            </div>
          </div>

          <div className="HIWB-blocks blockPosition block04">
            <div className="HIWB-info">
              <div className="HIWB-title">
                <p>04</p>
                <p>
                  We make code reviews to ensure level of quality and provide
                  developers with resources needed to comply to industry
                  standards{" "}
                </p>

                <div className="HIWB-dotsMobile">
                  <img src={dotsMobileBlock4} alt="" />
                </div>
              </div>
              <div className="discription">
                <img src={codeWindow} alt="" />
              </div>
            </div>

            <div className="HIWB-dots-image">
              <img src={dotsDesctopBlock4} alt="" />
            </div>
          </div>

          <div className="HIWB-blocks block05">
            <div className="HIWB-info">
              <div className="HIWB-title">
                <p>05</p>
                <p>
                  The package is delivered via Github including all your
                  requirements
                </p>

                <div className="HIWB-dotsMobile">
                  <img src={dotsMobileBlock5} alt="" />
                </div>
              </div>
              <div className="discription">
                <img className="HIWB-github-logo" src={GitHub} alt="" />
              </div>
            </div>

            <div className="HIWB-dots-image">
              <img src={dotsDesc} alt="" />
            </div>
          </div>

          <div className="HIWB-blocks blockPosition block06">
            <div className="HIWB-info">
              <div className="HIWB-title">
                <p>06</p>
                <p>You can check in with any of the developers at any point </p>
              </div>
              <div className="discription">
                <div className="chat">
                  <div className="you">
                    <div className="you-content">
                      <div className="avatar">
                        <img src={faceLogo} alt="" />
                        <p>You</p>
                      </div>

                      <div className="message">
                        <p className="mobilePosition">How is your work going?</p>
                      </div>
                    </div>
                  </div>

                  <div className="someone">
                    <div className="avatar">
                      <img src={Mark} alt="" />
                      <p>Mark</p>
                    </div>

                    <div className="message">
                      <p>Hi!</p>
                      <p>All perfectly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
      </content>
    </section>
  );
};

export default HowItWorksBlock;
