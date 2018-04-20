import React, { Component } from 'react';
import './list.css';
import ListItem from "./ListItem";
import getPersons from "../../../files/getPersons";

const NAMES = [
    "katerina", "maria", "xristina", "marina", "kirki"
];

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    };

    componentDidMount() {
        getPersons().then(response => {

        });
    };

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
