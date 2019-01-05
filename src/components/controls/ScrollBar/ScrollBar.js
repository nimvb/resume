import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ScrollBar.scss";
import ScrollDown from "../../controls/ScrollDown";
import ScrollUp from "../../controls/ScrollUp";

class ScrollBar extends Component {
  scrollToPage(pageId) {
    const page = document.getElementById(pageId);
    if (page != null) {
      page.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  render() {
    const { targetPageUp } = this.props;
    const { targetPageDown } = this.props;
    return [
      <div className="scrollbar-wrapper">
        <ScrollDown targetPage={targetPageDown} className="scroll-container" />
        <ScrollUp targetPage={targetPageUp} className="scroll-container"/>
      </div>
    ];
  }
}

ScrollBar.propTypes = {
  targetPageUp: PropTypes.string,
  targetPageDown: PropTypes.string
};

export default ScrollBar;
