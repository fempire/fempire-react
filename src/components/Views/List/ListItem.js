import React, { Component } from 'react';
import './list.css';

class ListItem extends Component {
    render() {
        return (
            <div className="list-item">
                {this.props.info}
            </div>
        );
    }
}

export default ListItem;
