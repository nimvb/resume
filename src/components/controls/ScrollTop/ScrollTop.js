import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import "./ScrollTop.scss";

class ScrollTop extends Component {
  scrollToTop() {
    window.scrollTo({ behavior: "smooth", top:0, left:0 });
  }
  render() {
    const { className } = this.props;
    
    return [
      <div className={`scroll-top ${className || ''}`}>
        <div
          className="scroll-pointer"
          onClick={e => this.scrollToTop()}
        >
          
          <div>
            <FontAwesomeIcon icon={faAngleDoubleUp} size="2x"/>
          </div>
          <div style={{
            fontSize:"8px"
          }}>To Top</div>
        </div>
      </div>
    ];
  }
}

ScrollTop.propTypes = {

};

export default ScrollTop;
