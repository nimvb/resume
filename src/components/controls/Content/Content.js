import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./Content.scss";
class Content extends Component {
  render() {
    
    const { children } = this.props;
    const { id } = this.props;
    return (
      <div className={`content ${this.props.className || ""}`} id={`${id || ""}`}>{children}</div>
    );
  }
}

Content.propTypes = {
  id: PropTypes.string

}

export default Content;
