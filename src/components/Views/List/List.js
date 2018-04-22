import React, { Component } from 'react';
import './list.css';
import ListItem from "./ListItem";
import getPersons from "../../../files/getPersons";

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
          persons: []
        };
    };

    componentDidMount() {
        getPersons().then(response => {
            this.setState({
                persons: response
            })
        });
    };

  render() {
    return (
      <div className="list">
          {this.state.persons.map((name, index) => (
              <ListItem key={index} info={name}/>
          ))}
      </div>
    );
  }
}

export default List;
