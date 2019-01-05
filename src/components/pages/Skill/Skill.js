import React, { Component } from "react";
import "./Skill.scss";
import FullPage from "../../controls/FullPage";
import Content from "../../controls/Content";
import ScrollUp from "../../controls/ScrollUp";
import PropTypes from "prop-types";
import { buildParts } from "../../../service/Helper/Helper";

class Skill extends Component {
  render() {
    const { background } = this.props;
    const { color } = this.props;
    const { context } = this.props;
    const { title } = context;
    const { parts } = context;

    return (
      <FullPage
        className="skill"
        id="skill"
        background={`${background}`}
        color={color}
      >
        <Content>
          <div className="skill-wrapper">
            <div>
              <h1>{title}</h1>
            </div>
            <div className="skill-card-container">

              {buildParts(parts, { background:color , color:  background  })}

            </div>
          </div>
        </Content>
        <ScrollUp targetPage="about" />
      </FullPage>
    );
  }
}

Skill.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string
};

export default Skill;
