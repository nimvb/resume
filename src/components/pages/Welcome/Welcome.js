import React, { Component } from "react";
import FullPage from "../../controls/FullPage";
import Header from "../../controls/Header";
import SocialIcon from "../../controls/SocialIcon";
import ScrollDown from "../../controls/ScrollDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Welcome.scss";
import ScrollTop from "../../controls/ScrollTop";
import PropTypes from "prop-types";
import Content from "../../controls/Content";

class Welcome extends Component {


    processSocials(socials){

        let processedSocials = socials.map(
            (social,index) => {
                let icon = <FontAwesomeIcon icon={faTwitter} />
                if(social.type === "twitter"){
                    icon = <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                }
                if(social.type === "linkedin"){
                    icon = <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                }
                if(social.type === "github"){
                    icon = <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                }


                return <SocialIcon link={social.link} ico={icon} />
            }
        );

        return (
            [
                processedSocials
            ]
        )
    }

  render() {
    const { background } = this.props;
    const { color } = this.props;
    const { title } = this.props.context;
    const { subtitle } = this.props.context;
    const { socials } = this.props.context;


    return (

      <FullPage className="welcome" id="welcome" background={`${background}`} color={color}>
        <Header colorChange={this.props.colorChange} menu={this.props.menu}/>

        
        <Content>
          <div className="main-wrapper">
            <div className="title">{title}</div>
            <div className="subtitle">
              {subtitle}
            </div>
            <div className="social-icons">

            {this.processSocials(socials)}
            </div>
          </div>
        </Content>

        <ScrollDown targetPage="about" />
        <ScrollTop />
      </FullPage>
    );
  }
}

Welcome.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string
};

export default Welcome;
