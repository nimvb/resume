import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagic } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
class Header extends Component {

  scrollToPage(pageId) {
    const page = document.getElementById(pageId);
    if (page != null) {
      page.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  render() {
    const { menu } = this.props;
    const { children } = this.props;
    return (
      <div className="navigation">
        <div className="logo" onClick={this.props.colorChange}>
          <div className="logo-container pulse">
            <FontAwesomeIcon icon={faMagic} />
          </div>
          <div className="logo-text">
            Click
          </div>
        </div>

        <div className="menu">
          {menu.map((obj,index)=>{
            return (
              <div className="menu-item" onClick={(e)=>{
                this.scrollToPage(obj.target)
              }}>{obj.text}</div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Header;
