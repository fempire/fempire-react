import React, { Component } from 'react';
import './list.css';
import ListItem from "./ListItem";

const NAMES = [
    "katerina", "maria", "xristina", "marina", "kirki"
];

class List extends Component {
  render() {
    return (
      <div className="list">
          {NAMES.map(name => (
              <ListItem key={name} info={name}/>
          ))}
      </div>
    );
  }
}

export default List;
