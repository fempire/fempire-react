import React, { Component } from 'react';
import './list.css';

class ListItem extends Component {
    render() {
        return (
            <div className="list-item">
                {this.props.info.name}
                {this.props.info.info.map((one, index) => (
                    <p key={index}>{one}</p>
                ))}
            </div>
        );
    }
}

export default ListItem;
