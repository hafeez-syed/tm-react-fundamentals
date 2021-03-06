import PropTypes from 'prop-types';
import React  from 'react';

export class Badge extends React.Component {
    render() {
        return (
            <div>
                Hello and welcome to the React world!!!
                <div style={{display: 'block'}}>
                    <img
                        src={this.props.img}
                        alt='Avatar'
                        style={{width: 100, height: 100}}
                    />
                    <h1>Name: {this.props.name}</h1>
                    <h3>Username: {this.props.username}</h3>
                </div>
            </div>
        )
    }
}

Badge.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
};
