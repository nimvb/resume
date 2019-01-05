import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./FullPage.scss";
class FullPage extends Component {
  render() {
    const { color } = this.props;
    const { background } = this.props;
    const { children } = this.props;
    const { id } = this.props;
    return (
      <div className={`page ${this.props.className || ""}`} id={`${id || ""}`} style={{backgroundColor:background,color:color}}>{children}</div>
    );
  }
}

FullPage.propTypes = {
  id: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string

}

export default FullPage;
