import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./ScrollDown.scss";

class ScrollDown extends Component {
  scrollToPage(pageId) {
    const page = document.getElementById(pageId);
    if (page != null) {
      page.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  render() {
    const { targetPage } = this.props;
    return [
      <div className={`scroll-down ${this.props.className || ''}`}>
        <div
          className="scroll-pointer bounce"
          onClick={e => this.scrollToPage(targetPage)}
        >
          <div style={{fontSize:"0.5rem",marginBottom:"-0.125rem"}}>Down</div>
          <div>
            <FontAwesomeIcon icon={faChevronDown} size="2x"/>
          </div>
        </div>
      </div>
    ];
  }
}

ScrollDown.propTypes = {
  targetPage: PropTypes.string
};

export default ScrollDown;
