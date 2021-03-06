import React, { Component } from 'react';
import {Provider} from "react-redux";
import store from './store';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/home/Landing';


class App extends Component {
  render() {
    return (
          <Provider store={store}>
            <div>
              <Navbar />
              <Landing />
            </div>
          </Provider>
    );
  }
}

export default App;
