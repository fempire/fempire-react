import React, { Component } from 'react';
import './App.css';
import Header from "./Parts/Header/Header";
import {Router, Route} from 'react-router-dom';
import routes from '../files/routes';
import createHistory from 'history/createBrowserHistory';

const VIEWS = Object.keys(routes);
const history = createHistory();

class App extends Component {

  render() {
    return (
      <div>
          <Header/>
          <Router history={history}>
            <div id="content">
                {VIEWS.map((route, index) => (
                    <Route key={index}
                        path={routes[route].path}
                        exact={routes[route].exact}
                        component={routes[route].main}
                    />
                ))}
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
