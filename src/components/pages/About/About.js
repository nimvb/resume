import React, { Component } from "react";
import PropTypes from 'prop-types';
import FullPage from "../../controls/FullPage";
import Content from "../../controls/Content/Content";
import ScrollBar from "../../controls/ScrollBar/ScrollBar";
import { buildParts } from "../../../service/Helper/Helper";
import "./About.scss";


class About extends Component {
  render() {

    const { background } = this.props;
    const { color } = this.props;
    const { context } = this.props;
    const { title } = context;
    const { parts } = context;
    return (
      <FullPage className="about" id="about" background={`${background}`} color={color}>
        <Content>
          <div className="about-wrapper">
            <div><h1>{title}</h1></div>
            <div className="about-text">
              {buildParts(parts)}
            </div>
          </div>
        </Content>
        <ScrollBar targetPageDown="skill" targetPageUp="welcome"></ScrollBar>
      </FullPage>
    );
  }
}

About.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string
}

export default About;
