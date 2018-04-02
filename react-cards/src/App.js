import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyCard from './MyCard';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <MyCard />
      </MuiThemeProvider>
    );
  }
}

export default App;
