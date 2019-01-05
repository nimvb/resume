import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./SocialIcon.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SocialIcon extends Component {
  render() {
    const { link } = this.props;
    const { ico } = this.props;
    return [
      <div className="socialicon animate-icons">
        <a href={link}>{ico}</a>
      </div>
    ];
  }
}


SocialIcon.propTypes = {

  link: PropTypes.string,
  ico: PropTypes.instanceOf(FontAwesomeIcon)

}

export default SocialIcon;
