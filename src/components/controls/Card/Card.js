import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.scss';
import iconResolver from '../../../service/IconResolver';


class Card extends Component {

    render() {

        const { color } = this.props;
        const { background } = this.props;
        const { title } = this.props;
        const { description } = this.props;
        const { icons } = this.props;

        return (
            <div className="skillcard" style={{ color: color, backgroundColor: background }}>
                <div className="card-title">{title}</div>
                <div className="card-description">{description}</div>
                <div className="card-icons">

                    {
                        icons.map((icon, index) => {
                            return (

                                iconResolver(icon, "1.5rem", color)

                            )
                        })
                    }



                </div>
            </div>
        );
    }

}

Card.propTypes = {
    color: PropTypes.string,
    background: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
}




export default Card;