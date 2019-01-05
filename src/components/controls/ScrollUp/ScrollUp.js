import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./ScrollUp.scss";

class ScrollUp extends Component {
  scrollToPage(pageId) {
    const page = document.getElementById(pageId);
    if (page != null) {
      page.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  render() {
    const { className } = this.props;
    const { targetPage } = this.props;
    return [
      <div className={`scroll-up ${className || ''}`}>
        <div
          className="scroll-pointer bounce"
          onClick={e => this.scrollToPage(targetPage)}
        >
          
          <div>
            <FontAwesomeIcon icon={faChevronUp} size="2x" />
          </div>
          <div style={{fontSize:"0.5rem",marginTop:"-0.125rem"}}>Up</div>
        </div>
      </div>
    ];
  }
}

ScrollUp.propTypes = {
  targetPage: PropTypes.string
};

export default ScrollUp;
